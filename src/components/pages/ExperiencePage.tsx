import { Link } from "@tanstack/react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import LuxeBackground from "../common/LuxeBackground";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function ExperiencePage() {
  useScrollReveal();

  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* Top Navigation */}
      <Header variant="light" />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-20 overflow-hidden">
        {/* Ambient Canvas Background & Image combination */}
        <LuxeBackground theme="light" />
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
          <img
            alt="Luxury Background Texture"
            className="w-full h-full object-cover ambient-hero scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFvowjBL16J3UWISJpyNPeFF4m2YIWEvksOOBc0DVR7FrLHZ4VPMJnxQAt8EVUcoawNsfAe_33LbcBkzG2u9__iQ8OoqUl5mvkk5tvQJKxtIGyuyOZj8-ECG0p_VMOmW0AeEM74he-B-pX0A1U7Y332EvDfyt5CN0mQFmF4zWkouuGwZA8gyiFXrOG8_06aTXDAF0bUG-zknYV9X2fTfbF58WyV9SalZUkBuPpgC597rOQvtf7Z5PPi2BWrTI0sv5USjpkVS4Zkeg"
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl space-y-8">
          <span
            className="font-label-caps text-label-caps text-secondary tracking-[0.4em] uppercase opacity-0 animate-rise block"
            style={{ animationDelay: "0s" }}
          >
            Trusted Care • 24/7 Emergency
          </span>
          <h1
            className="font-display-lg text-display-lg text-primary leading-tight opacity-0 animate-rise"
            style={{ animationDelay: "0.2s" }}
          >
            Advanced Healthcare for Every Life Stage
          </h1>
          <p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic opacity-0 animate-rise"
            style={{ animationDelay: "0.4s" }}
          >
            Expert physicians, modern diagnostics, and compassionate care — all under one roof.
          </p>
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 opacity-0 animate-rise"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="/booking"
              className="px-10 py-5 bg-primary text-[#D4AF37] gold-border font-display-lg text-headline-sm hover:bg-primary-container hover:scale-105 transition-all duration-500 min-w-[280px] flex items-center justify-center shadow-lg"
            >
              Book Appointment
            </Link>
            <Link
              to="/treatments"
              className="px-10 py-5 border border-secondary text-secondary font-label-caps text-label-caps hover:bg-secondary/5 hover:scale-105 transition-all duration-500 min-w-[280px] flex items-center justify-center"
            >
              Our Departments
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="font-label-caps text-[10px] tracking-widest text-secondary uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-secondary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Featured Treatments (Bento Grid) */}
      <section className="py-40 px-6 md:px-20 bg-background max-w-container-max mx-auto reveal">
        <div className="mb-20 text-center space-y-4">
          <h2 className="font-display-lg text-headline-md text-primary">Our Care Divisions</h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
          {/* Large Feature */}
          <div className="md:col-span-7 relative group overflow-hidden gold-border h-[400px] md:h-full">
            <img
              alt="Emergency & Trauma Care"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdheCWZQb53yWwFRSwBqvD0_Imp0JTCCGERgR1p3C61qcRODTuuvjPUH7dxp7O71Rdq7tb-knByOWeU5tKpbbThL36oFi3xli9mdpLGkP_CMb1Mi_m0ObX-sLj4ZLyNAPTUl6Mdz_itET4IXF46A2BMwa8eOhKks2yKKekWBTez3mcTWgDn1qDbt-M7QQXF8yawmcmg0a03apn6hby8o-K9f30MXXvZLkV5IZcw-p73Hwb4bdnpqaV-CXGiYmuw7VHjuVG5l20lGo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12 text-white">
              <span className="font-label-caps text-label-caps text-[#D4AF37] mb-2">
                24/7 Critical Care
              </span>
              <h3 className="font-display-lg text-headline-md mb-4">Emergency & Trauma Care</h3>
              <p className="font-body-md text-white/80 max-w-md mb-4">
                Round-the-clock emergency services with rapid triage, trauma surgery, and intensive
                care for life-threatening conditions.
              </p>
              <Link
                to="/booking"
                className="text-[#D4AF37] font-label-caps text-label-caps border-b border-[#D4AF37] self-start hover:text-white hover:border-white transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-rows-2 gap-8">
            {/* Small Feature 1 */}
            <div className="relative group overflow-hidden gold-border min-h-[250px]">
              <img
                alt="General Surgery"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRpxQJD_Rvda1HmcG7-BBaKOV81fN3NcRYRVlxhZHsLvvKpiV-5PCo8MNNrk6jHq8FrPf0YoUUhnwyhr26CRrUKx2J-GTzZMgmMT0PHYJISpEhf605gouFIq4c7qOTBpHJ_EyHfrsNN7Hh8qLPvkIGDt6yjyMIwAO9KfstRlhKtfZSNnHW8kk3lU8qtAEkCu9BN-StoDOsVKDoKm2qXmkFcBIsb41vcL4KYN35b9gxVWk15QWhTWHnFD0207yR5lmhWNDciATph30"
              />
              <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="font-display-lg text-headline-sm text-white mb-4">
                    General Surgery
                  </h3>
                  <Link
                    to="/treatments"
                    className="text-[#D4AF37] font-label-caps text-label-caps border-b border-[#D4AF37] hover:text-white hover:border-white transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Feature 2 */}
            <div className="relative group overflow-hidden gold-border min-h-[250px]">
              <img
                alt="Cardiology & Heart Care"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9AcmbJHNHMuSFKuLnGL18XqWi5-q8Mo1zDzAphKabCvK1Xji6IgdToQ7aJGX6PGnNRUKqJSh2y_Hmd57YYN5OMmGOZ-vVEeZTpruioioElsJ5YJ3NXXwnJhGHHFMcEJf2s9by5gP3KpAeQ7NSZ49tuldvgkk1qU6U70ybiEo-9rRVdykTnpIcD-sgQWyYCHU6h0UPGZTwpUqpQILsfYqi4XJBGuHc1c-BwZ-UF3K2UA3WpB74YvF_w1P9UINNrhZGQHHq3nbm-hk"
              />
              <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="font-display-lg text-headline-sm text-white mb-4">
                    Cardiology & Heart Care
                  </h3>
                  <Link
                    to="/services"
                    className="text-[#D4AF37] font-label-caps text-label-caps border-b border-[#D4AF37] hover:text-white hover:border-white transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-40 bg-surface-container relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img
            alt="Stone masonry texture"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFvowjBL16J3UWISJpyNPeFF4m2YIWEvksOOBc0DVR7FrLHZ4VPMJnxQAt8EVUcoawNsfAe_33LbcBkzG2u9__iQ8OoqUl5mvkk5tvQJKxtIGyuyOZj8-ECG0p_VMOmW0AeEM74he-B-pX0A1U7Y332EvDfyt5CN0mQFmF4zWkouuGwZA8gyiFXrOG8_06aTXDAF0bUG-zknYV9X2fTfbF58WyV9SalZUkBuPpgC597rOQvtf7Z5PPi2BWrTI0sv5USjpkVS4Zkeg"
          />
        </div>
        <div className="max-w-container-max mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
              The MediCore Standard
            </span>
            <h2 className="font-display-lg text-display-lg text-primary">
              Where Compassion Meets Precision.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Our clinical teams are trained at leading institutions and held to the highest
              patient-safety standards. Every care plan is built around the patient, not the
              procedure.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  medical_services
                </span>
                <h4 className="font-display-lg text-headline-sm">Specialist Physicians</h4>
                <p className="text-on-surface-variant text-sm">
                  200+ board-certified doctors across 30+ clinical specialties.
                </p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary text-4xl">biotech</span>
                <h4 className="font-display-lg text-headline-sm">Modern Diagnostics</h4>
                <p className="text-on-surface-variant text-sm">
                  In-house MRI, CT, pathology labs, and digital X-ray with same-day results.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] gold-border overflow-hidden rounded-sm">
              <img
                alt="Clinic interior"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa2Un4mB7IuVnTNRT23u6uxMwDG9Cs74bLO4GhkNC5DswSeDFc3iHazSfvu3ZwfvwjY7d9bFVa1c3eKxh0pq2Gi9iIdGWLk31Pi0q3kcJSUGkoUadTEk3CvcW046UtAqCG03uAEKQVdLDi1PXCG6BhLTUY8GTXJzGiyW58DC7AuXMsPEjB2tIQBLDcRD2vrMeaUcEyPWveKr0e6ctK8PyOc4zAW_-tiz3QmQP6IK2Rgmp1ZV50Pyz6TjlW8Ho_9Vdluy7YN5fOvkU"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-effect gold-border p-12 bg-background/60 max-w-[280px]">
              <p className="font-display-lg text-headline-sm text-primary italic">
                "Clinical excellence and compassionate care are the heart of our practice."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-40 px-6 md:px-20 bg-primary text-white reveal">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl space-y-6">
              <h2 className="font-display-lg text-display-lg">
                State-of-the-Art Medical Infrastructure
              </h2>
              <p className="font-body-lg text-white/70">
                We invest in the latest diagnostic and surgical technology to ensure every procedure
                meets international safety and efficacy standards.
              </p>
            </div>
            <Link
              to="/services"
              className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-label-caps text-label-caps hover:bg-[#D4AF37]/10 hover:scale-105 transition-all duration-300"
            >
              View All Equipment
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Tech Card 1 */}
            <div className="p-10 bg-primary-container border border-white/10 space-y-6 hover:border-secondary transition-all group">
              <div className="h-48 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-secondary">blur_on</span>
              </div>
              <h3 className="font-display-lg text-headline-sm">3T MRI Suite</h3>
              <p className="text-white/60 text-sm">
                High-resolution imaging for neurological, musculoskeletal, and abdominal diagnostics
                with 45-minute scan-to-report turnaround.
              </p>
            </div>
            {/* Tech Card 2 */}
            <div className="p-10 bg-primary-container border border-white/10 space-y-6 hover:border-secondary transition-all group">
              <div className="h-48 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-secondary">
                  monitor_heart
                </span>
              </div>
              <h3 className="font-display-lg text-headline-sm">Cardiac Cath Lab</h3>
              <p className="text-white/60 text-sm">
                Fully equipped catheterisation laboratory for coronary angiography, stenting, and
                electrophysiology procedures.
              </p>
            </div>
            {/* Tech Card 3 */}
            <div className="p-10 bg-primary-container border border-white/10 space-y-6 hover:border-secondary transition-all group">
              <div className="h-48 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-secondary">biotech</span>
              </div>
              <h3 className="font-display-lg text-headline-sm">Robotic Surgery</h3>
              <p className="text-white/60 text-sm">
                Da Vinci robotic-assisted laparoscopic surgery for minimal invasive procedures with
                faster recovery times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Program */}
      <section className="py-40 bg-background relative reveal">
        <div className="max-w-4xl mx-auto px-6 text-center glass-effect gold-border p-20 bg-surface-container-low/40">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">
            Preventive Care
          </span>
          <h2 className="font-display-lg text-headline-md text-primary mb-8">
            MediCore Annual Health Packages
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            Comprehensive annual health checkup packages tailored for individuals, couples, and
            seniors — including full blood panel, ECG, ultrasound, and specialist consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/auth"
              search={{ mode: "signup" }}
              className="px-12 py-5 bg-primary text-[#D4AF37] font-display-lg text-headline-sm hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center shadow-lg"
            >
              View Packages
            </Link>
            <Link
              to="/about"
              className="px-12 py-5 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary/5 hover:scale-105 transition-all flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-64 h-64 blur-3xl bg-secondary/10 rounded-full"></div>
        <div className="absolute bottom-0 right-10 -z-10 w-96 h-96 blur-3xl bg-primary/5 rounded-full"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 px-6 max-w-3xl mx-auto reveal">
        <h2 className="font-display-lg text-headline-md text-primary text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="border-b border-secondary/20 pb-6 group cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-display-lg text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                What should I bring for my first outpatient appointment?
              </h4>
              <span className="material-symbols-outlined text-secondary">add</span>
            </div>
            <p className="text-on-surface-variant text-sm mt-2 transition-all max-h-0 overflow-hidden group-hover:max-h-24 duration-300">
              A valid photo ID, any previous medical records or prescriptions, your insurance card
              if applicable, and a completed registration form (available at our reception or
              online).
            </p>
          </div>
          <div className="border-b border-secondary/20 py-6 group cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-display-lg text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                How do I access emergency care at MediCore?
              </h4>
              <span className="material-symbols-outlined text-secondary">add</span>
            </div>
            <p className="text-on-surface-variant text-sm mt-2 transition-all max-h-0 overflow-hidden group-hover:max-h-24 duration-300">
              Our Emergency Department is open 24 hours a day, 7 days a week. Walk-ins are triaged
              on arrival. For life-threatening emergencies, call 108 or have someone drive you
              directly to our A&E entrance.
            </p>
          </div>
          <div className="border-b border-secondary/20 py-6 group cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-display-lg text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                Are cashless insurance claims available?
              </h4>
              <span className="material-symbols-outlined text-secondary">add</span>
            </div>
            <p className="text-on-surface-variant text-sm mt-2 transition-all max-h-0 overflow-hidden group-hover:max-h-24 duration-300">
              Yes, MediCore is empanelled with over 50 insurance providers. Our insurance desk
              handles pre-authorisation, claim submission, and discharge billing directly with your
              insurer.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
