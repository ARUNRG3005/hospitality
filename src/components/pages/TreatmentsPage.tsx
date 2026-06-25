import { Link } from "@tanstack/react-router";
import * as React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";
import { hospitalDb } from "../../data/hospitalDb";

export default function TreatmentsPage() {
  useScrollReveal();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);

  const departments = React.useMemo(() => hospitalDb.getDepartments(), []);

  const filteredDepts = React.useMemo(() => {
    if (!searchQuery) return departments;
    const query = searchQuery.toLowerCase();
    return departments.filter(
      (d) =>
        d.name.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
    );
  }, [departments, searchQuery]);

  return (
    <div className="font-body-md text-on-surface min-h-screen bg-background">
      {/* Navigation */}
      <Header variant="light" />

      {/* Hero Section */}
      <header className="relative h-[480px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20 animate-[ambientSlow_20s_ease-in-out_infinite_alternate]"></div>
        <div className="relative z-10 text-center px-6 animate-rise">
          <span className="font-label-caps text-label-caps text-secondary block mb-4 uppercase tracking-[0.2em]">
            Clinical Departments
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md font-bold text-primary mb-6 max-w-4xl mx-auto">
            Specialist Care Across Every Discipline
          </h1>
          <div className="shimmer-line max-w-md mx-auto opacity-50"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 hero-gradient"></div>
      </header>

      {/* Treatments Directory */}
      <main className="max-w-container-max mx-auto px-6 md:px-20 py-20">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="font-display-lg text-headline-sm text-primary mb-2 font-bold">
              Department Directory
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Explore our clinical divisions staffed by board-certified specialists, equipped with cutting-edge diagnostics.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {showSearch && (
              <input
                type="text"
                placeholder="Search departments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-secondary/35 rounded-full bg-white/40 focus:outline-none focus:border-secondary font-body-md text-sm w-48 sm:w-64 animate-fade-in"
              />
            )}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-3 border border-secondary/30 rounded-full hover:bg-secondary/5 transition-all cursor-pointer"
              title="Search"
            >
              <span className="material-symbols-outlined text-secondary">search</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 reveal">
          {filteredDepts.length > 0 ? (
            filteredDepts.map((dept) => (
              <div
                key={dept.id}
                className="treatment-card-hover group flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative border-[0.5px] border-[#cda052]/30 rounded-xl shadow-sm">
                  <img
                    className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={dept.name}
                    src={dept.image}
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-500"></div>
                </div>
                <div className="px-2 space-y-2">
                  <span className="font-label-caps text-label-caps text-secondary/60 block">
                    Specialist Division
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {dept.name}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                    {dept.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/booking"
                      className="font-label-caps text-label-caps text-primary border-b border-[#cda052] pb-1 inline-block hover:text-secondary hover:border-secondary transition-all"
                    >
                      Book Department Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20 text-on-surface-variant font-body-lg">
              No departments found matching your criteria.
            </div>
          )}
        </div>

        {/* Secondary Grid (Dynamic Preventive Health Highlights) */}
        <div className="mt-32 pt-20 border-t border-secondary/10 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="glass-card p-12 flex flex-col justify-center rounded-2xl border border-secondary/20">
              <h4 className="font-display-lg text-headline-sm text-primary mb-4 font-bold">
                Preventive Health Checkups
              </h4>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Our preventive clinics offer premium medical evaluations combining laboratory assessments, advanced imaging, and senior physical consults.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Full Diagnostics", "Personalized Portals", "Senior Consultant Reviews"].map((label) => (
                  <span
                    key={label}
                    className="px-4 py-2 bg-secondary/5 border border-[#cda052]/20 font-label-caps text-label-caps text-[#cda052] rounded-full text-[10px]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden border-[0.5px] border-[#cda052]/30 rounded-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                alt="Preventive Health Checkups"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPcZGiXNDg8zJ-Uco5TR4b1hlPftlmVyFYpamXJGsH_ofGKBYnPLFX5HhqcpEajwBX_6lkBXIQFKwpNHQZN49SnYvjl6v7WL-tz7GBtfBa2ZBTN1pXgXBlIv0aPvEiPMtWi1HBzDArxNT4Hz1ZD1R23tqsR3OuwoZo428tWsTw22pWEXRgOHKeai2ZHNuPfnCgEEcqpTybI8_7T6lXpjc8ZM4WYee3CwecqTJG6IfJdIqhnmF-32JfmBT_LNemTzKZeeYr66pCE1M"
              />
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-primary py-32 px-6 text-center relative overflow-hidden reveal border-t border-[#cda052]/20">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md font-bold text-white mb-6">
            Begin Your Healthcare Journey
          </h2>
          <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-xl mx-auto">
            Speak with our medical coordinators to select the appropriate clinical division and schedule your priority visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/booking"
              className="px-12 py-5 bg-secondary text-primary font-body-md text-body-md border border-secondary hover:brightness-110 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg font-semibold rounded"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="px-12 py-5 bg-transparent text-[#cda052] font-body-md text-body-md border border-[#cda052]/40 hover:bg-[#cda052]/5 hover:scale-105 transition-all duration-300 flex items-center justify-center rounded"
            >
              Clinical Service Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
