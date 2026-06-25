import * as React from 'react';
import { Link } from '@tanstack/react-router';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function BookingPage() {
  const [currentStep, setCurrentStep] = React.useState(1);

  const nextStep = (step: number) => {
    setCurrentStep(step);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* Top Navigation */}
      <Header variant="light" />

      {/* Progress Bar */}
      <div className="fixed top-[72px] left-0 w-full h-[2px] bg-secondary/10 z-50">
        <div className="h-full progress-shimmer transition-all duration-700 ease-in-out" id="booking-progress" style={{ width: `${currentStep * 20}%` }}></div>
      </div>
      
      <main className="pt-32 pb-20 px-6 md:px-20 max-w-container-max mx-auto min-h-screen flex flex-col items-center">
        {/* Booking Container */}
        <div className="w-full max-w-4xl glass-container rounded-xl p-8 md:p-16 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col" id="booking-flow">
          {/* Step Header */}
          <div className="mb-12" id="step-info">
            <span className="font-label-caps text-label-caps gold-text mb-2 block uppercase">Step <span id="current-step-num">{currentStep}</span> of 5</span>
            <h1 className="font-display-lg text-headline-md text-primary" id="step-title">
              {currentStep === 1 && "Select Your Rejuvenation"}
              {currentStep === 2 && "Select Specialist"}
              {currentStep === 3 && "Select Appointment Date & Time"}
              {currentStep === 4 && "Provide Details"}
              {currentStep === 5 && "Reservation Confirmed"}
            </h1>
          </div>
          
          {/* Step 1: Select Treatment */}
          <div className={`step-content space-y-4 ${currentStep === 1 ? '' : 'hidden'}`} id="step-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="group text-left p-6 gold-border bg-white/30 hover:bg-white/60 transition-all duration-300 rounded-lg flex justify-between items-center" onClick={() => nextStep(2)}>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Dermal Refinement</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">Hydrating botanical facial with LED infusion.</p>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-all">arrow_forward_ios</span>
              </button>
              <button className="group text-left p-6 gold-border bg-white/30 hover:bg-white/60 transition-all duration-300 rounded-lg flex justify-between items-center" onClick={() => nextStep(2)}>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Sculptural Contour</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">Precision micro-current and lymphatic drainage.</p>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-all">arrow_forward_ios</span>
              </button>
              <button className="group text-left p-6 gold-border bg-white/30 hover:bg-white/60 transition-all duration-300 rounded-lg flex justify-between items-center" onClick={() => nextStep(2)}>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Gold-Leaf Revital</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">Luxury 24k gold mask with vitamin synthesis.</p>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-all">arrow_forward_ios</span>
              </button>
              <button className="group text-left p-6 gold-border bg-white/30 hover:bg-white/60 transition-all duration-300 rounded-lg flex justify-between items-center" onClick={() => nextStep(2)}>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Cryo-Luxe Polish</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">Thermal shock therapy for collagen renewal.</p>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-all">arrow_forward_ios</span>
              </button>
            </div>
          </div>
          
          {/* Step 2: Select Specialist */}
          <div className={`step-content space-y-8 ${currentStep === 2 ? '' : 'hidden'}`} id="step-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <button className="group flex flex-col items-center text-center space-y-4" onClick={() => nextStep(3)}>
                <div className="w-40 h-52 bg-surface-container rounded-full overflow-hidden border border-secondary/20 relative group-hover:border-secondary transition-all">
                  <img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Dr. Elara Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyd4A97dj2wBVW0pAeQ8Kcd_bprTOvsEZTq4-pXG45BQz4hsEKIwKQyKHAuDRHmvLx-4rHlI1d9U24sXCDW1LM1UfV0236hxlPYzvPjptvlDERgPd2MD8JxvFib5JKyMg1gaIyZoHsMokf8xwA_VY15aLNKz76-D3BNDHWXhIe50dLcMJfMFEa0VIMZIVzGE08NXi36_yJeL77WbWoin_c0SsDX89aq9rpauUeEXYAYk-ENBzjX-wJcfeNNEe5BLmcdUfKc4nSRLQ"/>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Dr. Elara Vance</h4>
                  <p className="font-body-md text-body-md text-secondary uppercase tracking-widest text-[10px]">Senior Aesthetician</p>
                </div>
              </button>
              <button className="group flex flex-col items-center text-center space-y-4" onClick={() => nextStep(3)}>
                <div className="w-40 h-52 bg-surface-container rounded-full overflow-hidden border border-secondary/20 relative group-hover:border-secondary transition-all">
                  <img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Julian Thorne" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbRDL9zzvmnnlPYMSMqucuVkamSUD7T48hVu05lJGsrIRcVyqwANmKm6LxILwLxAgLAmbl6fFyhnbLqQdeCVSW6dEyfBp_LdfVo0l58jCbiF-HFfuhQzUInMs73DS8Mui1pBYxvDXwENKJUIZFZ2GNELglSNQpCkrBlu6UfIm9pY3nfzM2j40PB4IJpop0cWdc91mefhClXjqad3lllaKNfSTt4KWC2b6xvxgcsAfAJYvSkbd3Mc0i5_CfZloYvL2eC4DEl2Ii0Io"/>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Julian Thorne</h4>
                  <p className="font-body-md text-body-md text-secondary uppercase tracking-widest text-[10px]">Skin Specialist</p>
                </div>
              </button>
              <button className="group flex flex-col items-center text-center space-y-4" onClick={() => nextStep(3)}>
                <div className="w-40 h-52 bg-surface-container rounded-full overflow-hidden border border-secondary/20 relative group-hover:border-secondary transition-all">
                  <img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Dr. Maya Ross" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsMbNEYGVTBrw-eHYefjbH3LOLysAhWer2ypWDBJqmCo-SeD3rOefN39LEaSdrFFlVVkOcYPmGaTv6e0cOVR0r2p_To1QXhvBFMmHjPfGUtxl6fCKtklJyqTqRxkJ_u-164BHlG5JD1as73wxjtwrzSZV5Zpw60k2RujxTCl6qs6lShquCTFqZ_6Tjf5g6lR8cZBSjPRYEoxS1paDpzOfkA7zCE37COAqJSFYhfbWzvWgEFXrVewUjki-_8k1BctxsLoKZ67-Bk04"/>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Dr. Maya Ross</h4>
                  <p className="font-body-md text-body-md text-secondary uppercase tracking-widest text-[10px]">Dermatology Director</p>
                </div>
              </button>
            </div>
          </div>
          
          {/* Step 3: Calendar & Time */}
          <div className={`step-content ${currentStep === 3 ? '' : 'hidden'}`} id="step-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="gold-border rounded-xl p-6 bg-white/20">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-headline-sm text-primary">October 2024</span>
                  <div className="flex space-x-4">
                    <span className="material-symbols-outlined cursor-pointer hover:text-secondary">chevron_left</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-secondary">chevron_right</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-y-4 text-center">
                  <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Mo</span>
                  <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Tu</span>
                  <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">We</span>
                  <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Th</span>
                  <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Fr</span>
                  <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Sa</span>
                  <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Su</span>
                  
                  <span className="py-2 text-on-surface-variant/30">27</span>
                  <span className="py-2 text-on-surface-variant/30">28</span>
                  <span className="py-2 text-on-surface-variant/30">29</span>
                  <span className="py-2 text-on-surface-variant/30">30</span>
                  <button className="py-2 hover:bg-secondary/10 rounded-full transition-all">01</button>
                  <button className="py-2 hover:bg-secondary/10 rounded-full transition-all">02</button>
                  <button className="py-2 hover:bg-secondary/10 rounded-full transition-all">03</button>
                  <button className="py-2 bg-primary text-on-primary rounded-full shadow-lg font-bold">04</button>
                  <button className="py-2 hover:bg-secondary/10 rounded-full transition-all">05</button>
                  <button className="py-2 hover:bg-secondary/10 rounded-full transition-all">06</button>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-body-lg text-body-lg text-primary border-b border-secondary/20 pb-2">Available Slots</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 text-center border border-secondary/30 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all font-body-md cursor-pointer" onClick={() => nextStep(4)}>09:00 AM</button>
                  <button className="py-4 text-center border border-secondary/30 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all font-body-md cursor-pointer" onClick={() => nextStep(4)}>11:30 AM</button>
                  <button className="py-4 text-center border border-secondary/30 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all font-body-md cursor-pointer" onClick={() => nextStep(4)}>02:00 PM</button>
                  <button className="py-4 text-center border border-secondary/30 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all font-body-md cursor-pointer" onClick={() => nextStep(4)}>04:30 PM</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4: Patient Details */}
          <div className={`step-content max-w-lg mx-auto w-full ${currentStep === 4 ? '' : 'hidden'}`} id="step-4">
            <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); nextStep(5); }}>
              <div className="relative group">
                <input className="w-full bg-transparent border-0 border-b border-secondary/40 py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder-on-surface-variant/40 font-body-lg text-body-lg" id="full-name" placeholder=" " required type="text"/>
                <label className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none transform -translate-y-8 scale-75 origin-top-left group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-secondary" htmlFor="full-name">Full Name</label>
              </div>
              <div className="relative group">
                <input className="w-full bg-transparent border-0 border-b border-secondary/40 py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder-on-surface-variant/40 font-body-lg text-body-lg" id="email" placeholder=" " required type="email"/>
                <label className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none transform -translate-y-8 scale-75 origin-top-left group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-secondary" htmlFor="email">Concierge Email</label>
              </div>
              <div className="relative group">
                <textarea className="w-full bg-transparent border-0 border-b border-secondary/40 py-3 px-0 focus:ring-0 focus:border-secondary transition-all placeholder-on-surface-variant/40 font-body-lg text-body-lg" id="notes" placeholder=" " rows={2}></textarea>
                <label className="absolute left-0 top-3 text-on-surface-variant transition-all duration-300 pointer-events-none transform -translate-y-8 scale-75 origin-top-left group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-secondary" htmlFor="notes">Aesthetic Goals (Optional)</label>
              </div>
              <div className="pt-8">
                <button className="w-full bg-primary text-on-primary py-5 px-8 rounded-lg font-label-caps tracking-[0.2em] text-label-caps hover:bg-primary-container transition-all flex justify-center items-center group cursor-pointer" type="submit">
                  CONFIRM RESERVATION
                  <span className="material-symbols-outlined ml-2 text-secondary group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Step 5: Confirmation */}
          <div className={`step-content flex flex-col items-center justify-center text-center space-y-8 py-10 ${currentStep === 5 ? '' : 'hidden'}`} id="step-5">
            <div className="w-32 h-32 relative mb-6">
              <div className="absolute inset-0 border-[3px] border-secondary/20 rounded-full animate-ping"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-full shadow-2xl">
                <span className="material-symbols-outlined text-on-primary text-5xl">check_circle</span>
              </div>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Your Journey Begins</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
              A confirmation of your appointment has been sent to your concierge inbox. We look forward to welcoming you to the sanctuary.
            </p>
            <div className="pt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <button className="px-10 py-4 border border-secondary/40 rounded-lg text-secondary font-label-caps tracking-widest hover:bg-secondary/5 transition-all cursor-pointer">
                ADD TO CALENDAR
              </button>
              <Link to="/dashboard" className="px-10 py-4 bg-primary text-on-primary rounded-lg font-label-caps tracking-widest hover:bg-primary-container transition-all flex items-center justify-center">
                VIEW DASHBOARD
              </Link>
            </div>
          </div>
          
          {/* Back Button */}
          <button className={`absolute bottom-8 left-8 md:bottom-16 md:left-16 flex items-center text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-[10px] tracking-widest cursor-pointer ${currentStep > 1 && currentStep < 5 ? '' : 'hidden'}`} id="back-btn" onClick={prevStep}>
            <span className="material-symbols-outlined mr-2 text-[18px]">west</span> BACK
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
