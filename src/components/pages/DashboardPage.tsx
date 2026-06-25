import * as React from 'react';
import { Link } from '@tanstack/react-router';

export default function DashboardPage() {
  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* Top Navigation Bar (Fixed Shell) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 max-w-container-max mx-auto bg-background/70 dark:bg-primary/70 backdrop-blur-xl border-b border-secondary/30 shadow-sm dark:shadow-none">
        <Link to="/" className="font-display-lg text-headline-sm text-primary dark:text-primary-fixed tracking-tight">
          LuxeBook
        </Link>
        <nav className="hidden md:flex space-x-10 items-center">
          <Link className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300" to="/treatments">
            Treatments
          </Link>
          <Link className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300" to="/services">
            Services
          </Link>
          <Link className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300" to="/about">
            About
          </Link>
          <Link className="text-secondary dark:text-secondary-fixed border-b border-secondary font-body-md text-body-md" to="/booking">
            Booking
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link to="/experience" className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors">
            Member Club
          </Link>
          <div className="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="User avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-wCzw9MuMnjwSJfyexulbNe0dh0XIVXxLFPqg4IrvHi4pL8gygtkc4w_Yps4w8MZY2OwGeuZz6bj1sf1kF--xNIFQaR3a84y2FKq4I_5v7aakh4nhaQmVvzdKFVND0mP_DT83SAPQ1CWbdA6ypblKCr1Nj8qXFJQD29HDNS8udCqAt5xQYXA6lQamncIs96_Ktf8mzwx-OlLEXKYGhF4Um_svOyWTSjCrzJDBecPgN0soi1QXrCqJx_Hq8kLogbLjg6mkOcP2uQ4"
            />
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-[72px]">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-primary flex-col hidden md:flex h-full border-r border-secondary/10">
          <div className="flex flex-col h-full py-10 px-6">
            <div className="space-y-2 mb-auto">
              <Link className="flex items-center space-x-4 px-4 py-3 rounded-lg sidebar-active transition-all duration-300" to="/dashboard">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                <span className="font-label-caps text-label-caps">Dashboard</span>
              </Link>
              <Link className="flex items-center space-x-4 px-4 py-3 rounded-lg text-primary-fixed/60 hover:text-secondary-fixed transition-all duration-300" to="/booking">
                <span className="material-symbols-outlined">calendar_today</span>
                <span className="font-label-caps text-label-caps">Bookings</span>
              </Link>
              <Link className="flex items-center space-x-4 px-4 py-3 rounded-lg text-primary-fixed/60 hover:text-secondary-fixed transition-all duration-300" to="/dashboard">
                <span className="material-symbols-outlined">history</span>
                <span className="font-label-caps text-label-caps">History</span>
              </Link>
              <Link className="flex items-center space-x-4 px-4 py-3 rounded-lg text-primary-fixed/60 hover:text-secondary-fixed transition-all duration-300" to="/experience">
                <span className="material-symbols-outlined">card_membership</span>
                <span className="font-label-caps text-label-caps">Luxe Club</span>
              </Link>
            </div>
            
            <div className="border-t border-secondary/20 pt-8 pb-4">
              <Link className="flex items-center space-x-4 px-4 py-3 rounded-lg text-primary-fixed/60 hover:text-secondary-fixed transition-all duration-300" to="/dashboard">
                <span className="material-symbols-outlined">settings</span>
                <span className="font-label-caps text-label-caps">Settings</span>
              </Link>
              <Link className="flex items-center space-x-4 px-4 py-3 rounded-lg text-error hover:opacity-80 transition-all duration-300" to="/auth" search={{ mode: 'login' }}>
                <span className="material-symbols-outlined">logout</span>
                <span className="font-label-caps text-label-caps">Sign Out</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-background relative">
          <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 relative z-10">
            {/* Welcome Header */}
            <section className="mb-16 animate-rise">
              <p className="font-label-caps text-label-caps text-secondary mb-2">WELCOME BACK</p>
              <h1 className="font-display-lg text-headline-md text-primary mb-4">Ms. Alexander</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Your personalized journey toward aesthetic excellence continues. Your next transformation awaits.</p>
            </section>
            
            <div className="grid grid-cols-12 gap-8">
              {/* Upcoming Appointments */}
              <div className="col-span-12 lg:col-span-8">
                <div className="flex justify-between items-end mb-6">
                  <h2 className="font-headline-sm text-headline-sm text-primary">Upcoming Appointments</h2>
                  <button className="text-secondary font-label-caps text-label-caps hover:underline cursor-pointer">VIEW CALENDAR</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="glass-card p-8 rounded-xl transition-transform hover:scale-[1.02] duration-500">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-primary/5 p-3 rounded-lg">
                        <span className="material-symbols-outlined text-primary">face_6</span>
                      </div>
                      <span className="text-secondary font-label-caps text-label-caps bg-secondary/10 px-3 py-1 rounded-full">CONFIRMED</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm mb-1">Dermal Refinement</h3>
                    <p className="text-on-surface-variant font-body-md mb-6">With Dr. Elena Vance</p>
                    <div className="space-y-2 border-t border-secondary/10 pt-6">
                      <div className="flex items-center text-on-surface-variant space-x-3">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        <span className="text-body-md">October 24, 2024</span>
                      </div>
                      <div className="flex items-center text-on-surface-variant space-x-3">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span className="text-body-md">02:30 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 (Empty/Add) */}
                  <Link to="/booking" className="border-2 border-dashed border-secondary/20 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-secondary/5 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">add</span>
                    </div>
                    <h3 className="font-label-caps text-label-caps text-primary">Schedule Treatment</h3>
                    <p className="text-on-surface-variant text-sm mt-2">Reserve your next aesthetic session.</p>
                  </Link>
                </div>

                {/* Treatment History */}
                <div className="mt-16">
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-8">Clinical History</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-surface-container-low/50 border-b border-secondary/10 hover:bg-white transition-colors duration-300">
                      <div className="flex items-center space-x-6">
                        <div className="text-on-surface-variant font-label-caps text-[10px] w-12 text-center leading-none">
                          SEP<br/><span className="text-lg font-bold text-primary">12</span>
                        </div>
                        <div>
                          <h4 className="font-body-lg text-body-lg font-medium">HydraFacial Signature Elite</h4>
                          <p className="text-on-surface-variant text-sm">60 Minute Session • Beverly Hills Suite</p>
                        </div>
                      </div>
                      <button className="text-secondary hover:text-primary transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">receipt_long</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-6 bg-surface-container-low/50 border-b border-secondary/10 hover:bg-white transition-colors duration-300">
                      <div className="flex items-center space-x-6">
                        <div className="text-on-surface-variant font-label-caps text-[10px] w-12 text-center leading-none">
                          AUG<br/><span className="text-lg font-bold text-primary">05</span>
                        </div>
                        <div>
                          <h4 className="font-body-lg text-body-lg font-medium">Platelet-Rich Plasma Therapy</h4>
                          <p className="text-on-surface-variant text-sm">Full Face &amp; Neck Treatment</p>
                        </div>
                      </div>
                      <button className="text-secondary hover:text-primary transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">receipt_long</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Content: Rewards & Profile */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                {/* Loyalty Rewards */}
                <div className="bg-primary p-8 rounded-xl text-primary-fixed shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <span className="material-symbols-outlined text-9xl">workspace_premium</span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-6">
                      <span className="material-symbols-outlined text-secondary-fixed">stars</span>
                      <span className="font-label-caps text-label-caps tracking-widest text-secondary-fixed">PLATINUM TIER</span>
                    </div>
                    <h3 className="font-headline-md text-headline-sm mb-2 text-white">LuxeBook Rewards</h3>
                    <p className="text-primary-fixed/60 text-sm mb-8">Only 250 points until your complimentary Diamond Glow treatment.</p>
                    <div className="space-y-4">
                      <div className="flex justify-between font-label-caps text-[10px] text-white/80">
                        <span>750 POINTS</span>
                        <span>1000 POINTS</span>
                      </div>
                      <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[75%] gold-shimmer"></div>
                      </div>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center">
                        <span className="material-symbols-outlined text-secondary-fixed mb-2">spa</span>
                        <span className="text-[10px] font-label-caps">FREE ADD-ON</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center">
                        <span className="material-symbols-outlined text-secondary-fixed mb-2">priority_high</span>
                        <span className="text-[10px] font-label-caps">PRIORITY BOOK</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Management Quick View */}
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Clinic Profile</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-sm">person</span>
                        </div>
                        <span className="text-body-md font-medium">Personal Details</span>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                    </div>
                    <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-sm">credit_card</span>
                        </div>
                        <span className="text-body-md font-medium">Payment Methods</span>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                    </div>
                    <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-sm">notifications</span>
                        </div>
                        <span className="text-body-md font-medium">Preferences</span>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                    </div>
                  </div>
                  <button className="w-full mt-10 py-4 border border-secondary text-secondary font-label-caps text-label-caps hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer">
                    EDIT FULL PROFILE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full py-20 px-6 md:px-20 flex flex-col items-center space-y-6 bg-surface-container-highest dark:bg-tertiary-container border-t border-secondary/20">
            <div className="font-display-lg text-headline-md text-primary dark:text-primary-fixed mb-6">LuxeBook</div>
            <nav className="flex flex-wrap justify-center gap-8 mb-10">
              <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">Privacy Policy</a>
              <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">Terms of Service</a>
              <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">Sustainability</a>
              <a className="text-on-surface-variant hover:text-primary transition-all font-body-md cursor-pointer">Accessibility</a>
              <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md" to="/contact">Contact Us</Link>
            </nav>
            <p className="text-on-surface dark:text-on-tertiary-container font-body-md text-center opacity-70">
              © 2024 LuxeBook Aesthetic Clinic. All rights reserved. Clinical Excellence in Quiet Luxury.
            </p>
          </footer>
        </main>
      </div>

      {/* Mobile Bottom Navigation Shell */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-secondary/10 flex justify-around items-center py-4 px-6 z-50">
        <Link className="text-secondary flex flex-col items-center" to="/">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-label-caps mt-1">HOME</span>
        </Link>
        <Link className="text-on-surface-variant flex flex-col items-center" to="/booking">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-label-caps mt-1">BOOK</span>
        </Link>
        <Link className="text-on-surface-variant flex flex-col items-center" to="/dashboard">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-label-caps mt-1">HISTORY</span>
        </Link>
        <Link className="text-on-surface-variant flex flex-col items-center" to="/dashboard">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-label-caps mt-1">PROFILE</span>
        </Link>
      </div>
    </div>
  );
}
