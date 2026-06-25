import { Link } from "@tanstack/react-router";
import * as React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";
import { hospitalDb } from "../../data/hospitalDb";

export default function ServicesPage() {
  useScrollReveal();
  const departments = React.useMemo(() => hospitalDb.getDepartments(), []);

  return (
    <div className="font-body-md text-on-surface min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <Header variant="light" />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/30 z-10"></div>
            <img
              className="w-full h-full object-cover animate-[ambientSlow_25s_ease-in-out_infinite_alternate]"
              alt="MediCore Hospital Facilities"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaHlWR_JmViaFVwikIuHxDkGibxmLoI7gYzCMXwZHThrQgFAoIlRlWd_6ddKqMr4DKIBHYPIEL5dSxiBXkIHDgh_YIWAOe6GK7e0zI9ilj6ip3v77o7ULE6gtA1AN0R5JIByHH5wEfCgP0aYvNwsZhypcPRAD8jwpmFZgsr5fQOy3wd7Ju19NoMANduoVbC62LukxrlJKx6Vo6ce9TJ9R1tG49wkqFNItplWc05cJsM64xrP3JoN5XXklP6QlW6TzTPZu_0fGnJ8A"
            />
          </div>
          <div className="relative z-20 text-center px-6 animate-rise">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">
              COMPREHENSIVE DIRECTORY
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 max-w-4xl mx-auto">
              Our Medical Services
            </h1>
            <div className="shimmer-line w-32 mx-auto mb-8"></div>
          </div>
        </section>

        {/* Dynamic Departments & Services */}
        {departments.map((dept, deptIdx) => {
          const isEven = deptIdx % 2 === 0;
          return (
            <section
              key={dept.id}
              className={`py-20 md:py-32 px-6 md:px-20 reveal ${
                isEven ? "bg-background" : "bg-primary text-on-primary"
              }`}
            >
              <div className="max-w-container-max mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                  {/* Department Banner Column */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-3xl">{dept.icon}</span>
                      <span className={`font-label-caps text-label-caps uppercase ${isEven ? "text-secondary" : "text-secondary-fixed"}`}>
                        Division
                      </span>
                    </div>
                    <h2 className={`font-display-lg text-headline-md font-bold ${isEven ? "text-primary" : "text-secondary-fixed"}`}>
                      {dept.name}
                    </h2>
                    <p className={`font-body-lg text-body-lg leading-relaxed ${isEven ? "text-on-surface-variant" : "text-white/80"}`}>
                      {dept.description}
                    </p>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-secondary/20 shadow-md">
                      <img
                        className="w-full h-full object-cover"
                        alt={dept.name}
                        src={dept.image}
                      />
                    </div>
                  </div>

                  {/* Sub-Services List Column */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {dept.services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-6 rounded-xl border flex flex-col justify-between h-[280px] shadow-sm transition-all duration-300 hover:scale-[1.02] ${
                          isEven
                            ? "bg-white/40 border-secondary/20 hover:border-secondary"
                            : "bg-white/5 border-white/10 hover:border-secondary"
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h3 className={`font-headline-sm text-headline-sm font-semibold truncate ${isEven ? "text-primary" : "text-white"}`}>
                              {service.name}
                            </h3>
                          </div>
                          <p className={`font-body-md text-body-md line-clamp-3 mb-4 ${isEven ? "text-on-surface-variant" : "text-white/70"}`}>
                            {service.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between text-xs font-label-caps tracking-wider text-secondary">
                            <span>Fee: ${service.fee}</span>
                            <span>Duration: {service.duration}</span>
                          </div>
                          <div className="flex gap-4 border-t border-secondary/15 pt-4">
                            <Link
                              to={`/services/${dept.id}/${service.id}`}
                              className={`flex-1 text-center py-2.5 rounded text-xs font-label-caps tracking-widest border transition-all ${
                                isEven
                                  ? "border-primary text-primary hover:bg-primary hover:text-on-primary"
                                  : "border-[#cda052] text-[#cda052] hover:bg-[#cda052] hover:text-primary"
                              }`}
                            >
                              Details
                            </Link>
                            <Link
                              to="/booking"
                              className="flex-1 text-center py-2.5 rounded text-xs font-label-caps tracking-widest bg-secondary text-primary hover:brightness-110 transition-all font-semibold"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Diagnostic/Bento Services */}
        <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-20 reveal">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-headline-md text-primary mb-4">
                Clinical Excellence Standards
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
                Fast, precise medical support with dedicated patient coordinators and NABL-accredited laboratory guidelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 flex flex-col justify-between h-[300px]">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">science</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Pathology & Labs</h3>
                  <p className="font-body-md text-on-surface-variant line-clamp-3">
                    Fast turnaround clinical laboratory services matching world-class accreditation.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-secondary/15 pt-4">
                  <span className="font-label-caps text-[10px]">24/7 Available</span>
                  <Link to="/booking" className="text-secondary font-semibold flex items-center gap-1 hover:gap-2 transition-all text-xs">
                    BOOK SERVICE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="glass-card p-8 flex flex-col justify-between h-[300px]">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">image_search</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Radiology & Imaging</h3>
                  <p className="font-body-md text-on-surface-variant line-clamp-3">
                    Premium CT, MRI, digital X-rays, and diagnostics with dedicated consultant radiologists.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-secondary/15 pt-4">
                  <span className="font-label-caps text-[10px]">Same-day Reports</span>
                  <Link to="/booking" className="text-secondary font-semibold flex items-center gap-1 hover:gap-2 transition-all text-xs">
                    BOOK SERVICE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="glass-card p-8 flex flex-col justify-between h-[300px]">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-4 text-4xl">monitor_heart</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Cardiac Screening</h3>
                  <p className="font-body-md text-on-surface-variant line-clamp-3">
                    Holter, stress testing, cardiac calcium score CT reviews, and physical risk evaluations.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-secondary/15 pt-4">
                  <span className="font-label-caps text-[10px]">Walk-ins Supported</span>
                  <Link to="/booking" className="text-secondary font-semibold flex items-center gap-1 hover:gap-2 transition-all text-xs">
                    BOOK SERVICE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
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
