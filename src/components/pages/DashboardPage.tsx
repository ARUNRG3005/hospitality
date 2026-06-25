import * as React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export default function DashboardPage() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const [user, setUser] = React.useState<any>(null);
  const [booking, setBooking] = React.useState<any>(null);

  // Form states for creating a new booking
  const [roomSelection, setRoomSelection] = React.useState("R101");
  const [checkInDate, setCheckInDate] = React.useState("");
  const [checkOutDate, setCheckOutDate] = React.useState("");
  const [chefService, setChefService] = React.useState(false);
  const [chauffeurService, setChauffeurService] = React.useState(false);
  const [conciergeService, setConciergeService] = React.useState(false);
  const [billingMethod, setBillingMethod] = React.useState("Corporate VIP Ledger");

  const [isEditingPreferences, setIsEditingPreferences] = React.useState(false);
  const [preferences, setPreferences] = React.useState({
    dietary: "Gluten-free, Low-sodium organic chef meals",
    pillow: "Therapeutic Memory Foam",
    newspaper: "Economic Times (Digital + Print)",
    visitingHours: "Restricted (Family guests only)"
  });

  React.useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      navigate({ to: "/auth" });
      setTimeout(() => {
        toast.error("Access Denied", {
          description: "Please sign up or login to access your patient dashboard.",
        });
      }, 100);
    } else {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      if (parsedUser.preferences) {
        setPreferences(parsedUser.preferences);
      }

      // Fetch user specific booking
      const userBooking = localStorage.getItem("userBooking_" + parsedUser.email);
      if (userBooking) {
        setBooking(JSON.parse(userBooking));
      }
    }
  }, [navigate]);

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const updatedUser = {
      ...user,
      preferences: preferences
    };
    
    // Save locally
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    
    // Update in registeredUsers list
    const usersList = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const updatedUsers = usersList.map((u: any) => u.email === user.email ? updatedUser : u);
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

    setUser(updatedUser);
    setIsEditingPreferences(false);
    toast.success("VIP Preferences updated", {
      description: "Preferences successfully synced to EHR system.",
    });
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (!checkInDate || !checkOutDate) {
      toast.error("Date Missing", {
        description: "Please select both check-in and check-out dates.",
      });
      return;
    }

    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    
    if (end <= start) {
      toast.error("Invalid Dates", {
        description: "Check-out date must be after check-in date.",
      });
      return;
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let nightlyRate = 25000;
    let roomName = "VIP Suite R101";
    if (roomSelection === "R102") {
      nightlyRate = 27000;
      roomName = "VIP Suite R102";
    } else if (roomSelection === "R103") {
      nightlyRate = 35000;
      roomName = "Ultra VIP Suite R103";
    }

    const roomSubtotal = nightlyRate * diffDays;
    const services = [];
    let serviceFee = 0;

    if (chefService) {
      services.push("Private Chef Service");
      serviceFee += 5000;
    }
    if (chauffeurService) {
      services.push("Airport Chauffeur Mercedes S-Class");
      serviceFee += 10000;
    }
    if (conciergeService) {
      services.push("Dedicated Concierge Coordinator");
      serviceFee += 15000;
    }

    const grossTotal = roomSubtotal + serviceFee;

    const bookingObj = {
      roomName,
      roomSelection,
      checkInDate,
      checkOutDate,
      duration: diffDays,
      nightlyRate,
      roomSubtotal,
      services,
      serviceFee,
      grossTotal,
      billingMethod,
      status: "Confirmed & Occupied",
      ledgerStatus: "APPROVED"
    };

    localStorage.setItem("userBooking_" + user.email, JSON.stringify(bookingObj));
    setBooking(bookingObj);
    
    toast.success("VIP Reservation Confirmed", {
      description: `Suite ${roomName} successfully booked for ${diffDays} nights.`,
    });
  };

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    toast.success("Signed Out", {
      description: "Successfully cleared secure session.",
    });
    navigate({ to: "/" });
  };

  if (!user) {
    return <div className="min-h-screen bg-background"></div>;
  }

  // Format Date of Birth for display
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 bg-background/70 dark:bg-primary/70 backdrop-blur-xl border-b border-secondary/30 shadow-sm dark:shadow-none">
        <Link
          to="/"
          className="font-display-lg text-headline-sm text-primary dark:text-primary-fixed tracking-tight"
        >
          MediCore
        </Link>
        <nav className="hidden md:flex space-x-10 items-center">
          <Link
            className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300"
            to="/treatments"
          >
            Departments
          </Link>
          <Link
            className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300"
            to="/booking"
          >
            Booking
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <button
            onClick={handleSignOut}
            className="text-error font-label-caps text-xs tracking-widest border border-error/20 hover:bg-error/5 px-4 py-2 rounded transition-colors cursor-pointer"
          >
            Sign Out
          </button>
          <div className="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="User avatar"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
            />
          </div>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="pt-[120px] pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Welcome Header */}
        <section className="mb-12 animate-rise">
          <p className="font-label-caps text-label-caps text-secondary mb-2 tracking-widest">PATIENT DIRECTORY PORTAL</p>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-display-lg text-headline-md text-primary mb-2">{user.name}</h1>
              <p className="text-on-surface-variant text-body-md">
                Secure clinical data profile. Ensure all preferences are active for your upcoming stay.
              </p>
            </div>
            <div className="self-start md:self-center px-4 py-2 bg-primary text-[#D4AF37] border border-[#D4AF37] rounded-full text-xs font-label-caps tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              {user.tier || "PLATINUM MEMBER"}
            </div>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Basic Details & Preferences */}
          <div className="lg:col-span-5 space-y-8 animate-rise" style={{ animationDelay: "0.1s" }}>
            <div className="glass-card p-8 rounded-xl border border-secondary/20 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">person</span>
                Personal Details
              </h3>
              <div className="space-y-4 text-body-md">
                <div className="flex justify-between py-2 border-b border-secondary/10">
                  <span className="text-on-surface-variant">Date of Birth</span>
                  <span className="font-medium text-primary">{formatDate(user.dob)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-secondary/10">
                  <span className="text-on-surface-variant">Secure Contact</span>
                  <span className="font-medium text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs text-secondary">lock</span>
                    {user.phone}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-secondary/10">
                  <span className="text-on-surface-variant">Primary Email</span>
                  <span className="font-medium text-primary">{user.email}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-on-surface-variant">Preferred Language</span>
                  <span className="font-medium text-primary">{user.language}</span>
                </div>
              </div>
            </div>

            {/* VIP Preferences Card */}
            <div className="glass-card p-8 rounded-xl border border-secondary/20 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">settings_suggest</span>
                  VIP Preferences
                </h3>
                {!isEditingPreferences && (
                  <button
                    onClick={() => setIsEditingPreferences(true)}
                    className="text-secondary hover:text-primary font-label-caps text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">edit</span>
                    EDIT
                  </button>
                )}
              </div>

              {isEditingPreferences ? (
                <form onSubmit={handleSavePreferences} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-label-caps text-on-surface-variant">Dietary Preference</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-background border border-secondary/30 rounded focus:border-secondary focus:outline-none text-body-md"
                      value={preferences.dietary}
                      onChange={(e) => setPreferences({ ...preferences, dietary: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-label-caps text-on-surface-variant">Pillow Selection</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-background border border-secondary/30 rounded focus:border-secondary focus:outline-none text-body-md"
                      value={preferences.pillow}
                      onChange={(e) => setPreferences({ ...preferences, pillow: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-label-caps text-on-surface-variant">Press/Newspaper</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-background border border-secondary/30 rounded focus:border-secondary focus:outline-none text-body-md"
                      value={preferences.newspaper}
                      onChange={(e) => setPreferences({ ...preferences, newspaper: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-label-caps text-on-surface-variant">Visiting Constraints</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-background border border-secondary/30 rounded focus:border-secondary focus:outline-none text-body-md"
                      value={preferences.visitingHours}
                      onChange={(e) => setPreferences({ ...preferences, visitingHours: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-white border border-primary hover:bg-[#D4AF37] hover:border-[#D4AF37] text-xs font-label-caps tracking-widest transition-all cursor-pointer"
                    >
                      SAVE CHANGES
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingPreferences(false)}
                      className="px-6 py-3 border border-secondary text-secondary hover:bg-secondary/5 text-xs font-label-caps tracking-widest transition-all cursor-pointer"
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4 text-body-md">
                  <div className="flex flex-col py-2 border-b border-secondary/10">
                    <span className="text-xs font-label-caps text-on-surface-variant mb-1">Catering &amp; Diet</span>
                    <span className="font-medium text-primary">{preferences.dietary}</span>
                  </div>
                  <div className="flex flex-col py-2 border-b border-secondary/10">
                    <span className="text-xs font-label-caps text-on-surface-variant mb-1">Room Setup / Pillows</span>
                    <span className="font-medium text-primary">{preferences.pillow}</span>
                  </div>
                  <div className="flex flex-col py-2 border-b border-secondary/10">
                    <span className="text-xs font-label-caps text-on-surface-variant mb-1">Daily Press Preference</span>
                    <span className="font-medium text-primary">{preferences.newspaper}</span>
                  </div>
                  <div className="flex flex-col py-2">
                    <span className="text-xs font-label-caps text-on-surface-variant mb-1">Visiting Protocols</span>
                    <span className="font-medium text-primary">{preferences.visitingHours}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Bookings & Payments */}
          <div className="lg:col-span-7 space-y-8 animate-rise" style={{ animationDelay: "0.2s" }}>
            
            {booking ? (
              <>
                {/* Active Booking Card */}
                <div className="glass-card p-8 rounded-xl border border-secondary/20 shadow-sm animate-rise">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">hotel</span>
                    Active Room Reservation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <span className="text-xs font-label-caps text-on-surface-variant block mb-1">Room Allocation</span>
                      <h4 className="font-display-lg text-headline-sm text-primary">{booking.roomName}</h4>
                      <p className="text-on-surface-variant text-sm mt-1">Luxury Wing - 3rd Floor</p>
                    </div>
                    <div>
                      <span className="text-xs font-label-caps text-on-surface-variant block mb-1">Reservation Period</span>
                      <h4 className="font-headline-sm text-body-lg font-medium text-primary">
                        {formatDate(booking.checkInDate)} – {formatDate(booking.checkOutDate)}
                      </h4>
                      <p className="text-on-surface-variant text-sm mt-1">Inpatient Stay ({booking.duration} Nights)</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-secondary/10">
                    <div>
                      <span className="text-xs font-label-caps text-on-surface-variant block mb-2">Requested Add-on Services</span>
                      <div className="flex flex-wrap gap-2">
                        {booking.services.length > 0 ? (
                          booking.services.map((service: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium">
                              {service}
                            </span>
                          ))
                        ) : (
                          <span className="text-on-surface-variant text-xs">No extra services requested.</span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between p-4 bg-primary/[0.03] border border-secondary/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">health_and_safety</span>
                        <div>
                          <span className="text-sm font-medium text-primary block">Private ICU Pod Capability</span>
                          <span className="text-xs text-on-surface-variant">Continuous vitals telemetry prepared for bedside deployment.</span>
                        </div>
                      </div>
                      <span className="text-xs font-label-caps text-[#4ECDC4] bg-[#4ECDC4]/10 px-3 py-1 rounded">
                        STANDBY READY
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment & Ledger Details Card */}
                <div className="glass-card p-8 rounded-xl border border-secondary/20 shadow-sm relative overflow-hidden animate-rise">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">receipt_long</span>
                    Payment &amp; Ledger Details
                  </h3>

                  <div className="space-y-4 text-body-md">
                    <div className="flex justify-between py-2 border-b border-secondary/10">
                      <span className="text-on-surface-variant">Suite Nightly Rate ({booking.roomName})</span>
                      <span className="font-medium text-primary">₹{booking.nightlyRate.toLocaleString("en-IN")}.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-secondary/10">
                      <span className="text-on-surface-variant">Room Subtotal ({booking.duration} Nights)</span>
                      <span className="font-medium text-primary">₹{booking.roomSubtotal.toLocaleString("en-IN")}.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-secondary/10">
                      <span className="text-on-surface-variant">Ancillary Services Surcharge</span>
                      <span className="font-medium text-primary">₹{booking.serviceFee.toLocaleString("en-IN")}.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-secondary/20">
                      <span className="font-semibold text-primary">Total Gross Billable Charges</span>
                      <span className="font-semibold text-secondary text-lg">₹{booking.grossTotal.toLocaleString("en-IN")}.00</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                      <div className="p-4 bg-background border border-secondary/10 rounded-lg">
                        <span className="text-xs font-label-caps text-on-surface-variant block mb-1">Billing Method</span>
                        <span className="font-medium text-primary">{booking.billingMethod}</span>
                        <span className="text-[10px] text-on-surface-variant block mt-0.5">Account Code: CORP-VIP-7798</span>
                      </div>
                      <div className="p-4 bg-background border border-secondary/10 rounded-lg flex justify-between items-center">
                        <div>
                          <span className="text-xs font-label-caps text-on-surface-variant block mb-1">Ledger Status</span>
                          <span className="font-medium text-primary">Authorized &amp; Checked</span>
                        </div>
                        <span className="text-xs font-label-caps text-secondary bg-secondary/10 px-3 py-1 rounded">
                          {booking.ledgerStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* No Booking Form - Ask details instead of showing defaults */
              <div className="glass-card p-8 rounded-xl border border-secondary/20 shadow-sm animate-rise">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">domain_verification</span>
                  VIP Suite Booking Request
                </h3>
                <p className="text-on-surface-variant text-body-md mb-8">
                  No active reservation found. Please select your suite type, stay duration, and luxury services below.
                </p>

                <form onSubmit={handleCreateBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-label-caps text-on-surface-variant" htmlFor="booking-room">
                        Suite Category
                      </label>
                      <select
                        id="booking-room"
                        className="w-full p-3 bg-background border border-secondary/20 rounded focus:border-secondary focus:outline-none text-body-md font-medium"
                        value={roomSelection}
                        onChange={(e) => setRoomSelection(e.target.value)}
                      >
                        <option value="R101">VIP Suite R101 (₹25,000 / Night)</option>
                        <option value="R102">VIP Suite R102 (₹27,000 / Night)</option>
                        <option value="R103">Ultra VIP Suite R103 (₹35,000 / Night)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-label-caps text-on-surface-variant" htmlFor="booking-ledger">
                        Billing / Ledger Option
                      </label>
                      <select
                        id="booking-ledger"
                        className="w-full p-3 bg-background border border-secondary/20 rounded focus:border-secondary focus:outline-none text-body-md font-medium"
                        value={billingMethod}
                        onChange={(e) => setBillingMethod(e.target.value)}
                      >
                        <option value="Corporate VIP Ledger">Corporate VIP Ledger</option>
                        <option value="Direct Personal Invoice">Direct Personal Invoice</option>
                        <option value="Executive Insurance Pre-auth">Executive Insurance Pre-auth</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-label-caps text-on-surface-variant" htmlFor="checkin-date">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        id="checkin-date"
                        className="w-full p-3 bg-background border border-secondary/20 rounded focus:border-secondary focus:outline-none text-body-md"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-label-caps text-on-surface-variant" htmlFor="checkout-date">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        id="checkout-date"
                        className="w-full p-3 bg-background border border-secondary/20 rounded focus:border-secondary focus:outline-none text-body-md"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-secondary/10">
                    <span className="text-xs font-label-caps text-on-surface-variant block mb-1">
                      Luxury Ancillary Services (Optional Add-ons)
                    </span>
                    
                    <label className="flex items-center gap-3 py-2 cursor-pointer hover:bg-secondary/5 px-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-secondary/30 rounded text-secondary focus:ring-secondary/20"
                        checked={chefService}
                        onChange={(e) => setChefService(e.target.checked)}
                      />
                      <div>
                        <span className="text-sm font-medium text-primary block">Private Chef Service</span>
                        <span className="text-xs text-on-surface-variant">Custom curated in-suite organic dining (₹5,000 flat)</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 py-2 cursor-pointer hover:bg-secondary/5 px-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-secondary/30 rounded text-secondary focus:ring-secondary/20"
                        checked={chauffeurService}
                        onChange={(e) => setChauffeurService(e.target.checked)}
                      />
                      <div>
                        <span className="text-sm font-medium text-primary block">Mercedes S-Class Chauffeur</span>
                        <span className="text-xs text-on-surface-variant">Secure private airport/city logistics (₹10,000 flat)</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 py-2 cursor-pointer hover:bg-secondary/5 px-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-secondary/30 rounded text-secondary focus:ring-secondary/20"
                        checked={conciergeService}
                        onChange={(e) => setConciergeService(e.target.checked)}
                      />
                      <div>
                        <span className="text-sm font-medium text-primary block">Dedicated Concierge Coordinator</span>
                        <span className="text-xs text-on-surface-variant">One-on-one personal assistant on-call (₹15,000 flat)</span>
                      </div>
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-secondary-fixed border border-secondary-fixed/30 font-label-caps text-label-caps tracking-[0.2em] transition-all hover:bg-primary-container hover:shadow-lg cursor-pointer"
                    >
                      CONFIRM RESERVATION
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-6 md:px-20 flex flex-col items-center space-y-6 bg-surface-container-highest dark:bg-tertiary-container border-t border-secondary/20">
        <div className="font-display-lg text-headline-md text-primary dark:text-primary-fixed mb-6">
          MediCore
        </div>
        <nav className="flex flex-wrap justify-center gap-8 mb-10">
          <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">
            Privacy Policy
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">
            Terms of Service
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">
            Patient Rights
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">
            Accessibility
          </a>
          <Link
            className="text-on-surface-variant hover:text-primary transition-all font-body-md"
            to="/contact"
          >
            Contact Us
          </Link>
        </nav>
        <p className="text-on-surface dark:text-on-tertiary-container font-body-md text-center opacity-70">
          © {currentYear} MediCore General Hospital. All rights reserved. Compassionate Care,
          Clinical Excellence.
        </p>
      </footer>
    </div>
  );
}
