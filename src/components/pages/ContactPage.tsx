import * as React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function ContactPage() {
  useScrollReveal();
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* Top Navigation */}
      <Header variant="light" />

      {/* Header Section */}
      <header className="pt-40 pb-20 px-6 max-w-container-max mx-auto text-center animate-rise">
        <span className="font-label-caps text-label-caps text-secondary uppercase mb-4 block">
          Get in Touch
        </span>
        <h1 className="font-display-lg text-display-lg text-primary mb-6 animate-fade-in">
          Connect with MediCore Hospital
        </h1>
        <div className="w-32 h-px bg-secondary/30 mx-auto"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pb-32">
        {/* Left Side: Contact Form / Confirmation */}
        <section className="space-y-12 reveal">
          <div className="glass-card p-10 space-y-8 relative overflow-hidden min-h-[480px] flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-1 progress-shimmer"></div>

            {!submitted ? (
              <>
                <div className="space-y-2">
                  <h2 className="font-headline-md text-headline-md text-primary">
                    Patient Desk &amp; Enquiries
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Our patient support team is available 24/7 for appointments, queries, and
                    emergency guidance.
                  </p>
                </div>
                <form className="space-y-8" onSubmit={handleSubmit} id="contactForm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-secondary transition-colors">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-secondary/20 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-body-lg placeholder:text-on-surface-variant/30"
                        placeholder="Ravi Kumar"
                        required
                        type="text"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-secondary transition-colors">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-secondary/20 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-body-lg placeholder:text-on-surface-variant/30"
                        placeholder="ravi.kumar@domain.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-secondary transition-colors">
                      Enquiry Type
                    </label>
                    <select className="w-full bg-transparent border-0 border-b border-secondary/20 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-body-lg text-primary">
                      <option className="text-primary">General Consultation</option>
                      <option className="text-primary">Surgery Enquiry</option>
                      <option className="text-primary">Diagnostics &amp; Reports</option>
                      <option className="text-primary">Insurance &amp; Billing</option>
                      <option className="text-primary">Feedback / Complaint</option>
                    </select>
                  </div>

                  <div className="space-y-2 group">
                    <label className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-secondary transition-colors">
                      Message
                    </label>
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-secondary/20 focus:ring-0 focus:border-secondary transition-all py-2 px-0 text-body-lg placeholder:text-on-surface-variant/30 resize-none"
                      placeholder="How may we assist you with your health and medical queries?"
                      required
                      rows={4}
                    ></textarea>
                  </div>

                  <button
                    className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    type="submit"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-6 fade-in">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary/30">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    verified_user
                  </span>
                </div>
                <h3 className="font-display-lg text-headline-md text-primary">Inquiry Received</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                  Our patient relations coordinator will review your request and get in touch within
                  2 hours.
                </p>
                <div className="pt-8">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 border border-secondary text-secondary font-label-caps text-[11px] hover:bg-secondary/5 transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Clinic Timings Table */}
          <div className="space-y-6 pt-12">
            <h3 className="font-headline-sm text-headline-sm text-primary">Clinical Hours</h3>
            <div className="overflow-hidden gold-thread-border">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-secondary/10">
                  <tr>
                    <td className="py-4 px-6 font-label-caps text-label-caps text-secondary bg-surface-container-low/50">
                      Monday — Saturday
                    </td>
                    <td className="py-4 px-6 font-body-md text-on-surface-variant text-right">
                      08:00 — 20:00
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-label-caps text-label-caps text-secondary bg-surface-container-low/50">
                      Sunday
                    </td>
                    <td className="py-4 px-6 font-body-md text-on-surface-variant text-right">
                      09:00 — 14:00
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-label-caps text-label-caps text-secondary bg-surface-container-low/50">
                      Emergency Services
                    </td>
                    <td className="py-4 px-6 font-body-md text-error text-right font-bold">
                      24 Hours / 7 Days
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Right Side: Map and Details */}
        <section className="space-y-12 reveal">
          <div className="relative w-full aspect-[4/5] overflow-hidden gold-thread-border">
            <img
              alt="MediCore Hospital Location Map"
              className="w-full h-full object-cover grayscale brightness-110 opacity-80 transition-all duration-1000 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGbJcsvSBVwrWCiid7fuNIkK7rpIXOLBejuDBj0eGCSSIDARiGrHfXQDS9suKxQaXPTsPZb36lx5qHMxI0WBRYyDS-4-1lPgMCY_Wd5D0AwFbgWb6jHnOuxuIkGYXhIkZFJbtwsPmR9DLuXYhTQV4Hfq1N7mRBhI4Wgo_zKtTD-BnGjlLDhtuomk_WQVH22ejRNI_54_rX4o7WNlmvpm_BIqnkMUag3gificBk-PpSrBb0293Jmq-k7WYEgbcBRb36RDjyfr3Fu-g"
            />
            {/* Gold Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary blur-xl opacity-30 animate-pulse"></div>
                <span
                  className="material-symbols-outlined text-secondary text-5xl relative z-10"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              </div>
              <div className="mt-4 glass-card px-4 py-2 border border-secondary/40 whitespace-nowrap">
                <p className="font-label-caps text-label-caps text-primary">MediCore Hospital</p>
              </div>
            </div>
            {/* Map Action Overlays */}
            <div className="absolute bottom-6 right-6 space-y-4">
              <button className="w-12 h-12 glass-card flex items-center justify-center hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-secondary">add</span>
              </button>
              <button className="w-12 h-12 glass-card flex items-center justify-center hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-secondary">remove</span>
              </button>
            </div>
            <div className="absolute top-6 right-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 glass-card font-label-caps text-[10px] tracking-widest text-secondary hover:bg-secondary/10 transition-all block"
              >
                OPEN IN MAPS
              </a>
            </div>
          </div>

          {/* Contact & Social Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-headline-sm text-headline-sm text-primary">Main Campus</h3>
              <div className="space-y-4 text-on-surface-variant">
                <p className="flex items-start space-x-3">
                  <span className="material-symbols-outlined text-secondary shrink-0">
                    location_city
                  </span>
                  <span>
                    100 Rajiv Gandhi Salai, OMR
                    <br />
                    Chennai 600096, Tamil Nadu, India
                  </span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary shrink-0">call</span>
                  <span>+91 44 4900 0123</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary shrink-0">mail</span>
                  <span>contact@medicorehospital.com</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Emergency &amp; Helpline
              </h3>
              <div className="space-y-4">
                <div className="p-4 border-l-2 border-error/40 bg-error-container/10">
                  <p className="font-label-caps text-[10px] text-error mb-1">
                    EMERGENCY &amp; AMBULANCE
                  </p>
                  <p className="font-body-lg text-primary">108 / +91 44 4900 0911</p>
                  <p className="text-[12px] text-on-surface-variant mt-1">
                    24/7 emergency response and trauma care
                  </p>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a className="w-10 h-10 glass-card flex items-center justify-center text-secondary hover:text-primary transition-all cursor-pointer">
                    <span className="material-symbols-outlined">brand_awareness</span>
                  </a>
                  <a className="w-10 h-10 glass-card flex items-center justify-center text-secondary hover:text-primary transition-all cursor-pointer">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </a>
                  <a className="w-10 h-10 glass-card flex items-center justify-center text-secondary hover:text-primary transition-all cursor-pointer">
                    <span className="material-symbols-outlined">play_circle</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
