import * as React from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { hospitalDb } from "@/data/hospitalDb";

export const Route = createFileRoute("/services/$deptId/$serviceId")({
  head: ({ params }) => {
    // Make head dynamic
    const deptId = params.deptId;
    const serviceId = params.serviceId;
    const depts = hospitalDb.getDepartments();
    const dept = depts.find(d => d.id === deptId);
    const service = dept?.services.find(s => s.id === serviceId);
    return {
      meta: [{ title: `${service?.name || "Medical Service"} · MediCore` }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { deptId, serviceId } = Route.useParams();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const departments = React.useMemo(() => hospitalDb.getDepartments(), []);
  const allDoctors = React.useMemo(() => hospitalDb.getDoctors(), []);

  // Find department and service
  const dept = React.useMemo(() => departments.find(d => d.id === deptId), [departments, deptId]);
  const service = React.useMemo(() => dept?.services.find(s => s.id === serviceId), [dept, serviceId]);

  // Find assigned doctors
  const assignedDoctors = React.useMemo(() => {
    if (!deptId || !serviceId) return [];
    return allDoctors.filter(d => d.departmentId === deptId && d.supportedServices.includes(serviceId));
  }, [allDoctors, deptId, serviceId]);

  // Related services
  const relatedServices = React.useMemo(() => {
    if (!dept) return [];
    return dept.services.filter(s => s.id !== serviceId).slice(0, 3);
  }, [dept, serviceId]);

  if (!dept || !service) {
    return (
      <div className="font-body-md text-on-surface min-h-screen flex flex-col justify-between bg-background">
        <Header variant="light" />
        <main className="pt-32 pb-20 px-6 text-center max-w-md mx-auto">
          <span className="material-symbols-outlined text-red-500 text-6xl mb-4">error</span>
          <h1 className="font-display-lg text-headline-md mb-2">Service Not Found</h1>
          <p className="text-on-surface-variant mb-8">The requested service details could not be found or has been modified.</p>
          <Link to="/services" className="px-6 py-3 bg-primary text-on-primary rounded-full font-label-caps text-label-caps">
            BACK TO SERVICES
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-body-md text-on-surface min-h-screen bg-background">
      <Header variant="light" />

      <main className="pt-24">
        {/* Banner / Header */}
        <section className="relative bg-primary-container text-on-primary py-20 px-6 md:px-20 border-b border-[#cda052]/20">
          <div className="max-w-container-max mx-auto space-y-4">
            <div className="flex items-center gap-2">
              <Link to="/services" className="text-secondary hover:underline text-xs font-label-caps tracking-wider">
                Services
              </Link>
              <span className="text-secondary/50 text-xs">/</span>
              <span className="text-white/60 text-xs font-label-caps tracking-wider">{dept.name}</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md font-bold text-white max-w-4xl">
              {service.name}
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-2xl">
              Provided by the department of <span className="font-semibold text-[#cda052]">{dept.name}</span>
            </p>
            <div className="flex flex-wrap gap-6 pt-4 text-xs font-label-caps tracking-widest text-[#cda052]">
              <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 border border-secondary/20 rounded-full">
                <span className="material-symbols-outlined text-sm">payments</span>
                FEE: ${service.fee}
              </div>
              <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 border border-secondary/20 rounded-full">
                <span className="material-symbols-outlined text-sm">schedule</span>
                DURATION: {service.duration}
              </div>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-16 px-6 md:px-20 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Description */}
              <div className="space-y-4">
                <h2 className="font-display-lg text-headline-sm text-primary border-b border-secondary/20 pb-2">
                  Service Overview
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Symptoms Treated */}
              {service.symptoms && service.symptoms.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-display-lg text-headline-sm text-primary">Symptoms Treated</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-secondary/5 border border-secondary/10 p-4 rounded-lg">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        <span className="font-body-md text-body-md text-primary font-medium">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Procedure Overview */}
              {service.procedures && service.procedures.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-display-lg text-headline-sm text-primary">Procedure & Care Steps</h3>
                  <ol className="space-y-3">
                    {service.procedures.map((proc, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="w-6 h-6 rounded-full bg-primary text-[#cda052] flex items-center justify-center text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-body-md text-body-md text-on-surface-variant pt-0.5">{proc}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Preparation Instructions */}
              {service.preparation && (
                <div className="bg-[#cda052]/5 border border-[#cda052]/30 rounded-xl p-6 space-y-2">
                  <h4 className="font-label-caps text-label-caps text-[#cda052] font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">warning</span>
                    Preparation Instructions
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {service.preparation}
                  </p>
                </div>
              )}

              {/* Required Documents */}
              {service.documents && service.documents.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-display-lg text-headline-sm text-primary">Required Documents</h3>
                  <ul className="space-y-2">
                    {service.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-on-surface-variant font-body-md text-body-md">
                        <span className="material-symbols-outlined text-secondary text-sm">description</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-display-lg text-headline-sm text-primary">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-secondary/20 rounded-lg overflow-hidden">
                        <button
                          className="w-full text-left p-4 bg-white/20 hover:bg-white/40 flex justify-between items-center font-body-md text-primary font-semibold transition-colors cursor-pointer"
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        >
                          <span>{faq.question}</span>
                          <span className="material-symbols-outlined text-secondary">
                            {activeFaq === idx ? "remove" : "add"}
                          </span>
                        </button>
                        {activeFaq === idx && (
                          <div className="p-4 bg-white/10 font-body-md text-on-surface-variant border-t border-secondary/15 animate-fade-in">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Action Card */}
              <div className="glass-panel p-8 rounded-2xl border border-[#cda052]/30 space-y-6">
                <div className="text-center space-y-2">
                  <span className="font-label-caps text-[10px] tracking-wider text-secondary block">CONSULTATION</span>
                  <div className="text-headline-md font-bold text-primary">${service.fee}</div>
                  <span className="text-xs text-on-surface-variant block">Duration: {service.duration}</span>
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-primary text-[#cda052] font-semibold py-4 rounded-lg flex items-center justify-center font-label-caps text-label-caps hover:bg-primary-container transition-all hover:scale-[1.02] shadow-md border border-[#cda052]/20"
                >
                  Book Appointment Now
                </Link>
                <div className="text-center text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Guaranteed VIP Fast-track Access
                </div>
              </div>

              {/* Assigned Doctors */}
              <div className="space-y-4">
                <h3 className="font-display-lg text-headline-sm text-primary">Assigned Specialists</h3>
                <div className="space-y-4">
                  {assignedDoctors.length > 0 ? (
                    assignedDoctors.map((doc) => (
                      <div key={doc.id} className="flex items-center gap-4 bg-white/20 p-4 rounded-xl border border-secondary/10">
                        <img
                          className="w-16 h-16 rounded-full object-cover border border-[#cda052]/30"
                          alt={doc.name}
                          src={doc.image}
                        />
                        <div>
                          <h4 className="font-body-md font-semibold text-primary">{doc.name}</h4>
                          <p className="text-[11px] text-secondary font-label-caps tracking-widest">{doc.title}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-on-surface-variant">No specialists assigned yet.</div>
                  )}
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="space-y-4 pt-4">
                  <h3 className="font-display-lg text-headline-sm text-primary">Related Services</h3>
                  <div className="space-y-2">
                    {relatedServices.map((rs) => (
                      <Link
                        key={rs.id}
                        to={`/services/${deptId}/${rs.id}`}
                        className="block p-4 border border-secondary/10 hover:border-secondary/40 hover:bg-white/40 rounded-xl transition-all font-body-md text-primary font-medium flex justify-between items-center group"
                      >
                        <span>{rs.name}</span>
                        <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
