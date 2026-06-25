import * as React from "react";
import { Link } from "@tanstack/react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { hospitalDb, Department, SubService, Doctor } from "../../data/hospitalDb";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [selectedDept, setSelectedDept] = React.useState<Department | null>(null);
  const [selectedService, setSelectedService] = React.useState<SubService | null>(null);
  const [selectedDoctor, setSelectedDoctor] = React.useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<string>("2025-07-15");
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [bookingRef, setBookingRef] = React.useState<string>("");

  const departments = React.useMemo(() => hospitalDb.getDepartments(), []);
  const allDoctors = React.useMemo(() => hospitalDb.getDoctors(), []);

  // Sync state when step changes or selections reset
  const nextStep = (step: number) => {
    setCurrentStep(step);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  // Doctor Synchronization: display only doctors who support the selected sub-service in this department
  const filteredDoctors = React.useMemo(() => {
    if (!selectedDept || !selectedService) return [];
    return allDoctors.filter(
      (doc) =>
        doc.departmentId === selectedDept.id &&
        doc.supportedServices.includes(selectedService.id)
    );
  }, [selectedDept, selectedService, allDoctors]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDept || !selectedService || !selectedDoctor) return;

    const newAppt = hospitalDb.saveAppointment({
      patientName: fullName,
      patientEmail: email,
      notes: notes,
      departmentId: selectedDept.id,
      serviceId: selectedService.id,
      doctorId: selectedDoctor.id,
      date: selectedDate,
      time: selectedTime || "10:30 AM",
      fee: selectedService.fee
    });

    setBookingRef(newAppt.id);
    nextStep(6);
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen bg-background">
      {/* Top Navigation */}
      <Header variant="light" />

      {/* Progress Bar */}
      <div className="fixed top-[72px] left-0 w-full h-[2px] bg-secondary/10 z-50">
        <div
          className="h-full progress-shimmer transition-all duration-700 ease-in-out"
          id="booking-progress"
          style={{ width: `${(currentStep / 6) * 100}%` }}
        ></div>
      </div>

      <main className="pt-32 pb-20 px-6 md:px-20 max-w-container-max mx-auto min-h-screen flex flex-col items-center">
        {/* Booking Container */}
        <div
          className="w-full max-w-4xl glass-container rounded-xl p-8 md:p-16 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-between"
          id="booking-flow"
        >
          <div>
            {/* Step Header */}
            <div className="mb-12" id="step-info">
              <span className="font-label-caps text-label-caps gold-text mb-2 block uppercase">
                Step <span id="current-step-num">{currentStep}</span> of 6
              </span>
              <h1 className="font-display-lg text-headline-md text-primary" id="step-title">
                {currentStep === 1 && "Select Department"}
                {currentStep === 2 && `Select Service for ${selectedDept?.name}`}
                {currentStep === 3 && `Select Specialist for ${selectedService?.name}`}
                {currentStep === 4 && "Select Appointment Date & Time"}
                {currentStep === 5 && "Provide Details"}
                {currentStep === 6 && "Appointment Confirmed"}
              </h1>
            </div>

            {/* Step 1: Select Department */}
            {currentStep === 1 && (
              <div className="step-content space-y-4" id="step-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      className="group text-left p-6 border border-[#cda052]/20 bg-white/30 hover:bg-white/60 hover:border-[#cda052]/60 transition-all duration-300 rounded-lg flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        setSelectedDept(dept);
                        setSelectedService(null);
                        setSelectedDoctor(null);
                        nextStep(2);
                      }}
                    >
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-1 flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-xl">{dept.icon}</span>
                          {dept.name}
                        </h3>
                        <p className="text-on-surface-variant font-body-md text-body-md line-clamp-2">
                          {dept.description}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-all">
                        arrow_forward_ios
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Select Sub-Service */}
            {currentStep === 2 && (
              <div className="step-content space-y-4" id="step-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedDept?.services.map((service) => (
                    <button
                      key={service.id}
                      className="group text-left p-6 border border-[#cda052]/20 bg-white/30 hover:bg-white/60 hover:border-[#cda052]/60 transition-all duration-300 rounded-lg flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        setSelectedService(service);
                        setSelectedDoctor(null);
                        nextStep(3);
                      }}
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-headline-sm text-headline-sm text-primary">
                            {service.name}
                          </h3>
                          <span className="text-secondary font-bold text-sm font-label-caps">${service.fee}</span>
                        </div>
                        <p className="text-on-surface-variant font-body-md text-body-md line-clamp-2 mb-2">
                          {service.description}
                        </p>
                        <div className="flex gap-4 text-xs text-on-surface-variant">
                          <span>Duration: {service.duration}</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-all">
                        arrow_forward_ios
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Select Specialist */}
            {currentStep === 3 && (
              <div className="step-content space-y-8" id="step-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doc) => (
                      <button
                        key={doc.id}
                        className="group flex flex-col items-center text-center space-y-4 cursor-pointer"
                        onClick={() => {
                          setSelectedDoctor(doc);
                          nextStep(4);
                        }}
                      >
                        <div className="w-40 h-52 bg-surface-container rounded-full overflow-hidden border border-[#cda052]/20 relative group-hover:border-secondary transition-all">
                          <img
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            alt={doc.name}
                            src={doc.image}
                          />
                        </div>
                        <div>
                          <h4 className="font-headline-sm text-headline-sm text-primary">{doc.name}</h4>
                          <p className="font-body-md text-body-md text-secondary uppercase tracking-widest text-[10px]">
                            {doc.title}
                          </p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-10 text-on-surface-variant">
                      No specialists available for this service at this moment.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Calendar & Time */}
            {currentStep === 4 && (
              <div className="step-content" id="step-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="gold-border rounded-xl p-6 bg-white/20">
                    <div className="flex justify-between items-center mb-8">
                      <span className="font-headline-sm text-primary">July 2025</span>
                      <div className="flex space-x-4">
                        <span className="material-symbols-outlined cursor-pointer hover:text-secondary">
                          chevron_left
                        </span>
                        <span className="material-symbols-outlined cursor-pointer hover:text-secondary">
                          chevron_right
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-y-4 text-center">
                      {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                        <span key={d} className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">
                          {d}
                        </span>
                      ))}

                      <span className="py-2 text-on-surface-variant/30">30</span>
                      {[...Array(30).keys()].map((day) => {
                        const dayNum = day + 1;
                        const isSelected = dayNum === 15;
                        return (
                          <button
                            key={dayNum}
                            className={`py-2 rounded-full transition-all cursor-pointer ${
                              isSelected
                                ? "bg-primary text-on-primary font-bold shadow-lg"
                                : "hover:bg-secondary/10"
                            }`}
                            onClick={() => setSelectedDate(`2025-07-${dayNum < 10 ? "0" + dayNum : dayNum}`)}
                          >
                            {dayNum < 10 ? `0${dayNum}` : dayNum}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="font-body-lg text-body-lg text-primary border-b border-secondary/20 pb-2">
                      Available Slots
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"].map((time) => (
                        <button
                          key={time}
                          className={`py-4 text-center border rounded-lg transition-all font-body-md cursor-pointer ${
                            selectedTime === time
                              ? "bg-secondary text-primary font-semibold border-secondary"
                              : "border-secondary/30 hover:bg-secondary hover:text-primary"
                          }`}
                          onClick={() => {
                            setSelectedTime(time);
                            nextStep(5);
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Patient Details */}
            {currentStep === 5 && (
              <div className="step-content max-w-lg mx-auto w-full" id="step-5">
                <form className="space-y-10" onSubmit={handleBookingSubmit}>
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-0 border-b border-secondary/40 py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder-on-surface-variant/40 font-body-lg text-body-lg"
                      id="full-name"
                      placeholder=" "
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <label
                      className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none transform -translate-y-8 scale-75 origin-top-left group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-secondary"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-0 border-b border-secondary/40 py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder-on-surface-variant/40 font-body-lg text-body-lg"
                      id="email"
                      placeholder=" "
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none transform -translate-y-8 scale-75 origin-top-left group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-secondary"
                      htmlFor="email"
                    >
                      Contact Email
                    </label>
                  </div>
                  <div className="relative group">
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-secondary/40 py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder-on-surface-variant/40 font-body-lg text-body-lg"
                      id="notes"
                      placeholder=" "
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                    <label
                      className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none transform -translate-y-8 scale-75 origin-top-left group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-secondary"
                      htmlFor="notes"
                    >
                      Medical Notes (Optional)
                    </label>
                  </div>
                  <div className="pt-8">
                    <button
                      className="w-full bg-primary text-on-primary py-5 px-8 rounded-lg font-label-caps tracking-[0.2em] text-label-caps hover:bg-primary-container transition-all flex justify-center items-center group cursor-pointer"
                      type="submit"
                    >
                      CONFIRM APPOINTMENT
                      <span className="material-symbols-outlined ml-2 text-secondary group-hover:translate-x-2 transition-transform">
                        arrow_right_alt
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 6: Confirmation */}
            {currentStep === 6 && (
              <div className="step-content flex flex-col items-center justify-center text-center space-y-8 py-10" id="step-6">
                <div className="w-32 h-32 relative mb-6">
                  <div className="absolute inset-0 border-[3px] border-[#cda052]/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-full shadow-2xl">
                    <span className="material-symbols-outlined text-[#cda052] text-5xl">
                      check_circle
                    </span>
                  </div>
                </div>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
                  You're All Set
                </h2>
                <div className="max-w-md mx-auto bg-[#cda052]/10 border border-[#cda052]/25 rounded-xl p-6 space-y-4 text-left">
                  <div className="flex justify-between border-b border-secondary/20 pb-2">
                    <span className="text-xs uppercase text-on-surface-variant font-semibold">Appointment Ref</span>
                    <span className="font-bold text-primary text-sm">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-on-surface-variant">Patient Name</span>
                    <span className="font-medium text-primary text-sm">{fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-on-surface-variant">Department</span>
                    <span className="font-medium text-primary text-sm">{selectedDept?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-on-surface-variant">Service</span>
                    <span className="font-medium text-primary text-sm">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-on-surface-variant">Specialist</span>
                    <span className="font-medium text-primary text-sm">{selectedDoctor?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-on-surface-variant">Date & Time</span>
                    <span className="font-medium text-primary text-sm">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between border-t border-secondary/20 pt-2">
                    <span className="text-xs uppercase text-on-surface-variant font-semibold">Consultation Fee</span>
                    <span className="font-bold text-secondary text-sm">${selectedService?.fee}</span>
                  </div>
                </div>

                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                  A confirmation has been logged. Please view your registered profile for details and pre-authorizations.
                </p>
                <div className="pt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center w-full">
                  <button className="px-10 py-4 border border-[#cda052]/40 rounded-lg text-secondary font-label-caps tracking-widest hover:bg-secondary/5 transition-all cursor-pointer">
                    ADD TO CALENDAR
                  </button>
                  <Link
                    to="/dashboard"
                    className="px-10 py-4 bg-primary text-on-primary rounded-lg font-label-caps tracking-widest hover:bg-primary-container transition-all flex items-center justify-center"
                  >
                    VIEW DASHBOARD
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Back Button */}
          {currentStep > 1 && currentStep < 6 && (
            <button
              className="mt-8 flex items-center text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-[10px] tracking-widest cursor-pointer self-start"
              id="back-btn"
              onClick={prevStep}
            >
              <span className="material-symbols-outlined mr-2 text-[18px]">west</span> BACK
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
