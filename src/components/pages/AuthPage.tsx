import * as React from "react";
import { useSearch, useNavigate, Link } from "@tanstack/react-router";
import LuxeBackground from "../common/LuxeBackground";

export default function AuthPage() {
  const search = useSearch({ from: "/auth" });
  const navigate = useNavigate();

  const [view, setView] = React.useState<"login" | "signup">("login");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("Identity verified. Redirecting to patient dashboard...");
  const [toastIcon, setToastIcon] = React.useState("check_circle");
  const [toastType, setToastType] = React.useState<"success" | "error">("success");
  const [selectedTier, setSelectedTier] = React.useState("NORMAL USER");

  React.useEffect(() => {
    if (search.mode) {
      setView(search.mode);
    }
  }, [search.mode]);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (view === "signup") {
      const name = (document.getElementById("reg-name") as HTMLInputElement).value;
      const email = (document.getElementById("reg-email") as HTMLInputElement).value;
      const phone = (document.getElementById("reg-phone") as HTMLInputElement).value;
      const password = (document.getElementById("reg-password") as HTMLInputElement).value;
      const dob = (document.getElementById("reg-dob") as HTMLInputElement).value;
      const language = (document.getElementById("reg-lang") as HTMLInputElement).value;
      const tier = (document.getElementById("reg-tier") as HTMLSelectElement).value;

      const userObj = {
        name,
        email,
        phone,
        password,
        dob,
        language,
        tier,
        preferences: {
          dietary: "Gluten-free, Low-sodium organic chef meals",
          pillow: "Therapeutic Memory Foam",
          newspaper: "Economic Times (Digital + Print)",
          visitingHours: "Restricted (Family guests only)"
        }
      };

      // Retrieve existing registered users
      const usersList = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      
      // Check if email already exists
      const userExists = usersList.some((u: any) => u.email === email);
      if (userExists) {
        setToastType("error");
        setToastIcon("error");
        setToastMessage("Account already exists with this email address.");
        setShowToast(true);
        setTimeout(() => {
          setIsSubmitting(false);
          setShowToast(false);
        }, 2000);
        return;
      }

      // Add new user and save
      usersList.push(userObj);
      localStorage.setItem("registeredUsers", JSON.stringify(usersList));
      localStorage.setItem("currentUser", JSON.stringify(userObj));

      setToastType("success");
      setToastIcon("check_circle");
      setToastMessage("Account created successfully! Redirecting to dashboard...");
      setShowToast(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setShowToast(false);
        navigate({ to: "/dashboard" });
      }, 1500);

    } else {
      // Login Flow
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;

      const usersList = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      const foundUser = usersList.find((u: any) => u.email === email && u.password === password);

      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        setToastType("success");
        setToastIcon("check_circle");
        setToastMessage("Identity verified. Redirecting to patient dashboard...");
        setShowToast(true);

        setTimeout(() => {
          setIsSubmitting(false);
          setShowToast(false);
          navigate({ to: "/dashboard" });
        }, 1500);
      } else {
        setToastType("error");
        setToastIcon("error");
        setToastMessage("Invalid credentials or user not found. Please sign up.");
        setShowToast(true);

        setTimeout(() => {
          setIsSubmitting(false);
          setShowToast(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen relative overflow-hidden flex items-center justify-center p-6">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <LuxeBackground theme="dark" />
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-fixed/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-container/40 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row items-stretch min-h-[650px] glass-panel overflow-hidden rounded-xl shadow-2xl animate-rise">
        {/* Left Side: Brand/Visual */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-primary items-center justify-center p-12 text-center border-r border-secondary/20">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              alt="Hospital modern lobby"
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <Link
              to="/"
              className="font-display-lg text-display-lg text-secondary-fixed tracking-tight hover:opacity-80 transition-opacity block animate-fade-in"
            >
              MediCore
            </Link>
            <div className="h-px w-24 bg-secondary-fixed/50 mx-auto"></div>
            <p className="font-headline-sm text-headline-sm text-on-primary/90 max-w-sm mx-auto leading-relaxed">
              Compassionate Care. Clinical Excellence.
            </p>
            <p className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest pt-4">
              General Hospital &amp; Research Centre
            </p>
          </div>
        </div>

        {/* Right Side: Interaction */}
        <div className="w-full md:w-1/2 flex flex-col bg-white/50 backdrop-blur-md p-8 md:p-12">
          {/* Navigation Tabs */}
          <nav className="flex space-x-8 mb-8">
            <button
              className={`font-label-caps text-label-caps pb-2 border-b-2 transition-all duration-300 cursor-pointer ${
                view === "login"
                  ? "border-secondary text-on-surface"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
              id="tab-login"
              onClick={() => setView("login")}
            >
              Login
            </button>
            <button
              className={`font-label-caps text-label-caps pb-2 border-b-2 transition-all duration-300 cursor-pointer ${
                view === "signup"
                  ? "border-secondary text-on-surface"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
              id="tab-signup"
              onClick={() => setView("signup")}
            >
              Create Account
            </button>
          </nav>

          {/* Login View */}
          <div
            className={`fade-in space-y-8 flex-grow ${view === "login" ? "" : "hidden"}`}
            id="view-login"
          >
            <div className="space-y-2">
              <h2 className="font-headline-md text-headline-md text-primary">Welcome Back</h2>
              <p className="font-body-md text-on-surface-variant">
                Please enter your credentials to access your patient portal.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleAuthSubmit}>
              <div className="relative pt-4">
                <label
                  className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full py-4 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                  id="email"
                  placeholder="e.g. ravi.kumar@medicore.com"
                  required
                  type="email"
                />
              </div>
              <div className="relative pt-4">
                <label
                  className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                  htmlFor="password"
                >
                  Secure Password
                </label>
                <input
                  className="w-full py-4 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    className="w-4 h-4 border-secondary/30 rounded-sm text-secondary focus:ring-secondary/20"
                    type="checkbox"
                  />
                  <span className="font-body-md text-[14px] text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Remember Me
                  </span>
                </label>
                <a className="font-label-caps text-[11px] text-secondary hover:text-primary transition-colors underline underline-offset-4 cursor-pointer">
                  Forgot Password?
                </a>
              </div>
              <div className="pt-6 space-y-4">
                <button
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-secondary-fixed border border-secondary-fixed/30 font-label-caps text-label-caps tracking-[0.2em] transition-all duration-500 hover:bg-primary-container hover:shadow-lg hover:shadow-primary/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "VERIFYING..." : "LOGIN"}
                </button>
                <p className="text-center font-body-md text-[13px] text-on-surface-variant">
                  By signing in, you agree to our{" "}
                  <a className="underline text-on-surface cursor-pointer">
                    Patient Privacy Standards
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          {/* Sign Up View */}
          <div
            className={`fade-in space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar ${view === "signup" ? "" : "hidden"}`}
            id="view-signup"
          >
            <div className="space-y-1">
              <h2 className="font-headline-md text-headline-sm text-primary">
                Patient Registration
              </h2>
              <p className="font-body-md text-on-surface-variant text-sm">
                Create your secure account to select and view your VIP suite, amenities, and preference profile.
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleAuthSubmit}>
              <div className="relative pt-4">
                <label
                  className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                  htmlFor="reg-name"
                >
                  Full Name
                </label>
                <input
                  className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                  id="reg-name"
                  placeholder="Ravi Kumar"
                  required
                  type="text"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative pt-4">
                  <label
                    className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                    htmlFor="reg-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                    id="reg-email"
                    placeholder="Email Address"
                    required
                    type="email"
                  />
                </div>
                <div className="relative pt-4">
                  <label
                    className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                    htmlFor="reg-phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                    id="reg-phone"
                    placeholder="+91 98765 43210"
                    required
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative pt-4">
                  <label
                    className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                    htmlFor="reg-dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                    id="reg-dob"
                    required
                    type="date"
                  />
                </div>
                <div className="relative pt-4">
                  <label
                    className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                    htmlFor="reg-lang"
                  >
                    Preferred Language
                  </label>
                  <input
                    className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                    id="reg-lang"
                    placeholder="e.g. English"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative pt-4">
                  <label
                    className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                    htmlFor="reg-tier"
                  >
                    Member Tier
                  </label>
                  <select
                    className="w-full py-2 input-luxe bg-transparent font-body-md text-on-surface focus:outline-none"
                    id="reg-tier"
                    required
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                  >
                    <option value="NORMAL USER" className="text-black">Normal User (Free)</option>
                    <option value="PLATINUM MEMBER" className="text-black">Platinum VIP Member</option>
                    <option value="GOLD MEMBER" className="text-black">Gold VIP Member</option>
                    <option value="SILVER MEMBER" className="text-black">Silver VIP Member</option>
                  </select>
                </div>
                <div className="relative pt-4">
                  <label
                    className="font-label-caps text-[10px] text-secondary absolute top-0 left-0"
                    htmlFor="reg-password"
                  >
                    Create Password
                  </label>
                  <input
                    className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                    id="reg-password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>

              {/* Conditional VIP Payment Details Panel */}
              {selectedTier !== "NORMAL USER" && (
                <div className="p-4 bg-primary/5 border border-secondary/30 rounded-lg space-y-4 animate-fade-in">
                  <p className="font-label-caps text-[10px] text-secondary tracking-widest font-semibold">
                    VIP MEMBERSHIP PAYMENT (₹10,000 / Year Pre-auth)
                  </p>
                  <div className="relative pt-4">
                    <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="reg-card">
                      Card Number
                    </label>
                    <input
                      className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                      id="reg-card"
                      placeholder="4111 2222 3333 4444"
                      required={selectedTier !== "NORMAL USER"}
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative pt-4">
                      <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="reg-expiry">
                        Expiry Date
                      </label>
                      <input
                        className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                        id="reg-expiry"
                        placeholder="MM/YY"
                        required={selectedTier !== "NORMAL USER"}
                        type="text"
                      />
                    </div>
                    <div className="relative pt-4">
                      <label className="font-label-caps text-[10px] text-secondary absolute top-0 left-0" htmlFor="reg-cvv">
                        CVV
                      </label>
                      <input
                        className="w-full py-2 input-luxe font-body-md text-on-surface placeholder:text-on-surface-variant/30"
                        id="reg-cvv"
                        placeholder="123"
                        required={selectedTier !== "NORMAL USER"}
                        type="password"
                        maxLength={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 space-y-4">
                <button
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-secondary-fixed border border-secondary-fixed/30 font-label-caps text-label-caps tracking-[0.2em] transition-all duration-500 hover:bg-primary-container hover:shadow-lg hover:shadow-primary/20 cursor-pointer disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? "CREATING..." : "CREATE ACCOUNT"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer Support */}
          <div className="mt-auto pt-6 border-t border-secondary/10 flex items-center justify-between">
            <span className="flex items-center text-on-surface-variant text-[12px] font-body-md">
              <span className="material-symbols-outlined mr-2 text-[18px]">verified_user</span>
              Secure SSL Encrypted
            </span>
            <button className="flex items-center text-on-surface-variant hover:text-secondary text-[12px] font-body-md transition-colors cursor-pointer">
              <span className="material-symbols-outlined mr-1 text-[18px]">support_agent</span>
              Support
            </button>
          </div>
        </div>
      </main>

      {/* Success Message Toast */}
      <div
        className={`fixed bottom-10 right-10 transition-all duration-500 z-50 ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        id="toast"
      >
        <div className={`glass-panel px-6 py-4 flex items-center space-x-4 border-l-4 ${toastType === "success" ? "border-secondary" : "border-red-500"}`}>
          <span className={`material-symbols-outlined ${toastType === "success" ? "text-secondary" : "text-red-500"}`}>{toastIcon}</span>
          <p className="font-body-md text-primary">
            {toastMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
