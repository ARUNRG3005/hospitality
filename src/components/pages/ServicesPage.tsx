import { Link } from "@tanstack/react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function ServicesPage() {
  useScrollReveal();

  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* Top Navigation Bar */}
      <Header variant="light" />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/20 z-10"></div>
            <img
              className="w-full h-full object-cover animate-[ambientSlow_25s_ease-in-out_infinite_alternate]"
              alt="MediCore Hospital Facilities"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaHlWR_JmViaFVwikIuHxDkGibxmLoI7gYzCMXwZHThrQgFAoIlRlWd_6ddKqMr4DKIBHYPIEL5dSxiBXkIHDgh_YIWAOe6GK7e0zI9ilj6ip3v77o7ULE6gtA1AN0R5JIByHH5wEfCgP0aYvNwsZhypcPRAD8jwpmFZgsr5fQOy3wd7Ju19NoMANduoVbC62LukxrlJKx6Vo6ce9TJ9R1tG49wkqFNItplWc05cJsM64xrP3JoN5XXklP6QlW6TzTPZu_0fGnJ8A"
            />
          </div>
          <div className="relative z-20 text-center px-6 animate-rise">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">
              COMPREHENSIVE CARE
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-8 max-w-4xl mx-auto">
              The Complete Range of Hospital Services
            </h1>
            <div className="shimmer-line w-32 mx-auto mb-8"></div>
          </div>
        </section>

        {/* Service Category 1: Orchid Stem Cell */}
        <section className="py-24 md:py-40 bg-background px-6 md:px-20 reveal">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <span className="font-label-caps text-label-caps text-secondary uppercase mb-2 block">
                  Critical Care
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mb-6">
                  24/7 Emergency & Trauma Services
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  Our Emergency Department runs around the clock, staffed by emergency medicine
                  specialists, trauma surgeons, and critical care nurses. Patients are triaged on
                  arrival and fast-tracked based on acuity levels.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      health_and_safety
                    </span>
                    <div>
                      <h4 className="font-body-md font-semibold text-primary">Benefits</h4>
                      <p className="font-body-md text-on-surface-variant">
                        Rapid stabilisation, advanced life support, trauma surgery, and ICU
                        admission within minutes of arrival.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      local_hospital
                    </span>
                    <div>
                      <h4 className="font-body-md font-semibold text-primary">Capacity</h4>
                      <p className="font-body-md text-on-surface-variant">
                        120-bed emergency and trauma unit with dedicated resuscitation bays.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/booking"
                  className="inline-block bg-primary text-secondary-fixed px-10 py-4 border border-secondary/40 font-body-md text-body-md hover:bg-primary-container hover:scale-105 transition-all duration-300 tracking-widest uppercase"
                >
                  Learn More
                </Link>
              </div>

              <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden gold-thread border border-secondary/20">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Emergency & Trauma Care"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAa--FqPvDdBP_d2GnhJfKYz8YSfpFx5dHO_BvQSYnpQCY7OpkG13tDaoy5fORj3Igt7d7T5TXCAzBOg7bzKlNucaOYp9FkL0wKA7wJ4lBTEV9rFoqmAJVVZg46zkDUh5M36fKMZdmDmOsFnfKV3dcHEM9pVGL9069kepiNIhWw-zqyVZOcJWmTMCfbU5ZNQtmotVfk7pN1qj9T6J8JmAKyWDcdGMuD_oD9YM7ncagvYxhdtf5LlbIBsYLyzLZPrVNB4tXc6ZOYSo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Category 2: Jade Ionizing (Emerald Theme) */}
        <section className="py-24 md:py-40 bg-primary text-on-primary px-6 md:px-20 reveal">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-[4/5] overflow-hidden border border-secondary/20">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Advanced Surgical Suites"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwvsrBlt9pW7Z9kylVGDI7SQZ8nNfZ7eK1fgqpvGJQq_VgdW3Ee6Ccnp9j4zSiipSPwBWNJABE1Qz1w2UD_RomWswlqa3zK6GQj1p6d5U7WLXiTSgY7TvZtv2VuIa3xUDCq6rAEwDux_Q2-Ga27R8cGpd8AIQxfH3zOqVwetrues1S43ghfcciJ9PfKhGVmUPGhz7-HQgxlIog8ZXeBCeiB7ps7V_Dc7Sa4zAVt2UcdFFcS8Bcc_7ddS0xEU1PeMiwkjDzfChCVvU"
                />
              </div>

              <div>
                <span className="font-label-caps text-label-caps text-secondary-fixed uppercase mb-2 block">
                  Surgical Excellence
                </span>
                <h2 className="font-headline-md text-headline-md text-secondary-fixed mb-6">
                  Advanced Surgical Suites
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary/90 opacity-90 mb-8 leading-relaxed">
                  Our 12 state-of-the-art operating theatres handle over 8,000 surgical procedures
                  annually — from routine day surgeries to complex multi-organ operations — backed
                  by a dedicated anaesthesiology team and sterile processing unit.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-secondary-fixed"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      biotech
                    </span>
                    <div>
                      <h4 className="font-body-md font-semibold text-white">Benefits</h4>
                      <p className="font-body-md text-white/80">
                        Minimally invasive laparoscopic options, robotic surgery, and same-day
                        discharge surgeries available across disciplines.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-secondary-fixed"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      timer
                    </span>
                    <div>
                      <h4 className="font-body-md font-semibold text-white">Duration</h4>
                      <p className="font-body-md text-white/80">
                        12 modular OTs with laminar airflow and full intensive care backup.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/booking"
                  className="inline-block bg-secondary-fixed text-primary px-10 py-4 border border-secondary/20 font-body-md text-body-md hover:brightness-110 hover:scale-105 transition-all duration-300 tracking-widest uppercase"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Bento Grid */}
        <section className="py-24 md:py-40 bg-surface-container-low px-6 md:px-20 reveal">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display-lg text-headline-md md:text-headline-md text-primary mb-4">
                Diagnostic Services
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
                Fast, accurate diagnostics are the foundation of good clinical decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bento Card 1 */}
              <div className="glass-card p-10 flex flex-col justify-between group">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-6 text-4xl">
                    science
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                    Pathology & Labs
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-8">
                    NABL-accredited laboratory processing over 300 test types with 6-hour standard
                    and 2-hour urgent turnaround.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-secondary/10">
                  <span className="font-label-caps text-label-caps">24/7 AVAILABLE</span>
                  <Link
                    to="/booking"
                    className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    DETAILS <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="glass-card p-10 flex flex-col justify-between group">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-6 text-4xl">
                    image_search
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                    Radiology & Imaging
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-8">
                    Digital X-ray, ultrasound, CT scan, and MRI with a dedicated radiologist
                    reporting team.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-secondary/10">
                  <span className="font-label-caps text-label-caps">SAME-DAY REPORTS</span>
                  <Link
                    to="/booking"
                    className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    DETAILS <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="glass-card p-10 flex flex-col justify-between group">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-6 text-4xl">
                    monitor_heart
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                    Cardiac Diagnostics
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-8">
                    Resting and stress ECG, Holter monitoring, 2D echocardiography, and treadmill
                    testing.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-secondary/10">
                  <span className="font-label-caps text-label-caps">WALK-IN ACCEPTED</span>
                  <Link
                    to="/booking"
                    className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    DETAILS <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Experience Banner */}
        <section className="py-20 px-6 md:px-20 bg-background text-center relative overflow-hidden reveal">
          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <span className="font-label-caps text-label-caps text-secondary mb-6 block">
              PERSONALISED CARE
            </span>
            <h2 className="font-display-lg text-headline-md md:text-headline-md text-primary mb-8">
              Your Dedicated Patient Coordinator
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Every admitted patient is assigned a personal coordinator who manages appointments,
              translates medical findings into plain language, liaises with your insurance provider,
              and ensures a smooth discharge process.
            </p>
            <Link
              to="/booking"
              className="inline-block bg-primary text-on-primary px-12 py-5 font-body-md text-body-md hover:bg-primary-container hover:scale-105 transition-all shadow-xl"
            >
              REQUEST COORDINATOR
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
