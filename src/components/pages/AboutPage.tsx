import { Link } from "@tanstack/react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function AboutPage() {
  useScrollReveal();

  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* Top Navigation */}
      <Header variant="dark" />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative h-[921px] flex items-center justify-center overflow-hidden bg-primary">
          <div className="relative z-10 text-center max-w-4xl px-6 animate-rise">
            <span className="font-label-caps text-label-caps text-secondary-fixed uppercase mb-4 block tracking-[0.3em]">
              Our Philosophy
            </span>
            <h1 className="font-display-lg text-display-lg text-background mb-8 leading-tight">
              Healing is Both a Science and a Calling
            </h1>
            <div className="w-24 h-px bg-secondary-fixed mx-auto"></div>
          </div>
        </section>

        {/* The MediCore Narrative */}
        <section className="py-[160px] px-6 md:px-20 max-w-container-max mx-auto reveal">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5 relative">
              <img
                className="w-full aspect-[3/4] object-cover shadow-2xl rounded-sm"
                alt="White Carrara marble"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQwHEUzzPBYV3LJ_VAqycNaS3laJvG6iFMwSopPdn5ewYQy1kFNGhDOc7klD7Vz_3uHUnVU5PA-XOSKGMkFsK6is3EErFaTj6TlzlFVrBNliePeb0VbaE4AXqPicdQrXjl7LaUsRLxip9aMMrKdiU2Y8waBoCXChmRbbcfVjYy7YBBveP-E3bz15d79ryszjxXAYhSVfh1iD0ojmLYv8WNftglluQieOx2gd6Z5dMdhdU3XM6DGx6-L68HCSUPkgxZQROcc68h4Y"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card p-8 hidden md:flex flex-col justify-end">
                <span className="font-display-lg text-headline-md text-primary mb-2 italic">
                  Est. 1987
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Four decades of community healthcare in the heart of the city.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-8">
              <h2 className="font-display-lg text-headline-md text-primary">The MediCore Story</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Founded in 1987 by a group of physicians committed to bringing specialist-grade
                healthcare to underserved communities, MediCore began as a 40-bed district hospital.
                Today, it is a 450-bed multi-specialty hospital with over 200 consultants and 1,200
                supporting staff.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant/80">
                Our founding belief has never changed: that every person, regardless of background,
                deserves access to the kind of care previously reserved for major metropolitan
                centres. We built MediCore to bridge that gap.
              </p>
              <div className="pt-8">
                <Link to="/experience" className="inline-flex items-center space-x-4 group">
                  <span className="font-label-caps text-label-caps text-secondary group-hover:tracking-widest transition-all">
                    READ OUR CHARTER
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-[120px] bg-primary text-background overflow-hidden relative reveal">
          <div className="px-6 md:px-20 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
            <div className="space-y-12">
              <div className="space-y-4">
                <span
                  className="material-symbols-outlined text-secondary-fixed text-[48px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  health_and_safety
                </span>
                <h3 className="font-display-lg text-headline-md">Our Mission</h3>
                <p className="font-body-lg text-on-primary-container leading-relaxed opacity-80">
                  To deliver equitable, evidence-based healthcare that restores health, extends
                  life, and supports well-being at every stage.
                </p>
              </div>
              <div className="space-y-4">
                <span
                  className="material-symbols-outlined text-secondary-fixed text-[48px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  visibility
                </span>
                <h3 className="font-display-lg text-headline-md">Our Vision</h3>
                <p className="font-body-lg text-on-primary-container leading-relaxed opacity-80">
                  To be the region's most trusted hospital — where clinical outcomes, patient
                  experience, and operational excellence are held to the same standard.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square border border-secondary-fixed/20 p-8 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
                <div className="absolute inset-0 border border-secondary-fixed/10 m-8 rounded-full"></div>
                <div className="w-12 h-12 bg-secondary-fixed rounded-full absolute -top-6 left-1/2 -translate-x-1/2"></div>
              </div>
              <div className="absolute text-center px-4">
                <p className="font-display-lg text-headline-md italic text-secondary-fixed">
                  Safe. Skilled. Compassionate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A Temple of Wellness */}
        <section className="py-[160px] px-6 md:px-20 max-w-container-max mx-auto reveal">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">
                THE MEDICORE CAMPUS
              </span>
              <h2 className="font-display-lg text-display-lg text-primary">Built for Healing</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              Our campus is designed around patient dignity and clinical efficiency — private
              recovery rooms, family waiting lounges, accessible corridors, and quiet healing
              gardens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
            <div className="md:col-span-8 h-[300px] md:h-full">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Clinic reception area"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSHlxBCdeHVX4J7cg77-g8JQOcvJPiZ-gYfxRGFg9zbYMUvIB6otGdRcI_6Iz-JUSBgODZ9Omip7Vu5flE6I6ct2rVfCUaiUFEYBg12o6YWJywVm9wRTaNHNMndravxWF6jTfhSFYbj6xKdo7aKhyS9o8o8VhKTZEWsGoIzjSKtc8zrPEGym_RZzu4NTo87CHRG4QSNYRw0t6dmmP-UzComApeZboCDshdtWfhVcL5LzjSuOYt3IGQYWueldQuAmDfqVAC7aMKJ6k"
              />
            </div>
            <div className="md:col-span-4 flex flex-col gap-8 h-auto md:h-full">
              <div className="h-[250px] md:h-1/2">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Minimalist treatment room"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZukYvEsCNbK8MIkUt9qZQ8WyvPctqoZny6U0--v86BI5Wncly1HitlTwjxzDSWbABLtcg3y4BHwHKCeR0ah9fWioj1MJw-QhWgUN_T2ydTW8aJZDyM3Im8aGZQ3zkPOcyd8ziU8lnD_QsPjIq3z0KBwbvhJQmYKvxmJHu9dijknabNA1iBny4MLCuIuWvk8v_U-7dpSiSoqldGH7pqm9EfzmdlJtSAknFz-ZKk9yP2WiQKB0pU1N1LUfPE7OVs3zc5vR7qOFSabI"
                />
              </div>
              <div className="h-[250px] md:h-1/2 bg-surface-container p-12 flex flex-col justify-between border-l-4 border-secondary">
                <h4 className="font-display-lg text-headline-sm text-primary italic">
                  "The environment of care is itself a form of treatment."
                </h4>
                <p className="font-label-caps text-label-caps text-secondary tracking-widest">
                  — MediCore DESIGN PHILOSOPHY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Curation */}
        <section className="py-[160px] bg-surface-container-low reveal">
          <div className="px-6 md:px-20 max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="font-display-lg text-display-lg text-primary">
                  Evidence-Based <br />
                  Clinical Protocols
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <span className="font-display-lg text-headline-md text-secondary/30 italic">
                      01
                    </span>
                    <div>
                      <h5 className="font-headline-sm text-headline-sm text-primary mb-2">
                        NABH Accreditation
                      </h5>
                      <p className="font-body-md text-on-surface-variant">
                        All clinical pathways follow National Accreditation Board for Hospitals
                        standards, reviewed annually by an internal quality committee.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="font-display-lg text-headline-md text-secondary/30 italic">
                      02
                    </span>
                    <div>
                      <h5 className="font-headline-sm text-headline-sm text-primary mb-2">
                        Infection Control
                      </h5>
                      <p className="font-body-md text-on-surface-variant">
                        Hospital-acquired infection rates 60% below national average, achieved
                        through strict hand hygiene audits and antimicrobial stewardship.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="font-display-lg text-headline-md text-secondary/30 italic">
                      03
                    </span>
                    <div>
                      <h5 className="font-headline-sm text-headline-sm text-primary mb-2">
                        Outcome Reporting
                      </h5>
                      <p className="font-body-md text-on-surface-variant">
                        We publish annual clinical outcome data — complication rates, readmission
                        rates, surgical mortality — in the interest of full transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 border border-secondary/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                <img
                  className="w-full aspect-square object-cover relative z-10"
                  alt="Clinical Protocol Audit"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbNVRK1lpUmMQH3LcF21EYZjgDXGkYuh0O7mEbJ5nzU8B7jP6xYhH6Faz5gnBV20kppTT0js23fvllz5ThQWSDz6DOb8jLzTfQE6sAXbkNI5nr6QjLSskXoMRtesBFZyk25S2E015OtnqC31Kq7oUXOuOL1qrjidOl6g_r5TyMzD9S7k8GahLiNtnvucbIcjomCn2IRM9baHYH6jf-63Ih4UtiEhBvKkGjIeJClixdT8ZW--jbQRifQa0eL3p6nExxiZKJnRLijzs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Masters of the Craft */}
        <section className="py-[160px] px-6 md:px-20 max-w-container-max mx-auto reveal">
          <div className="text-center mb-24">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">
              THE MEDICAL TEAM
            </span>
            <h2 className="font-display-lg text-display-lg text-primary">
              Our Clinical Leadership
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="aspect-[4/5] bg-primary relative overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-background/20 text-[200px]"
                    style={{ fontVariationSettings: "'wght' 100" }}
                  >
                    person_outline
                  </span>
                </div>
              </div>
              <h3 className="font-display-lg text-headline-sm text-primary">Dr. Priya Nair</h3>
              <p className="font-label-caps text-label-caps text-secondary mt-2">
                MEDICAL DIRECTOR
              </p>
            </div>

            <div className="text-center group">
              <div className="aspect-[4/5] bg-primary relative overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-background/20 text-[200px]"
                    style={{ fontVariationSettings: "'wght' 100" }}
                  >
                    face_6
                  </span>
                </div>
              </div>
              <h3 className="font-display-lg text-headline-sm text-primary">Dr. Arjun Mehta</h3>
              <p className="font-label-caps text-label-caps text-secondary mt-2">
                CHIEF OF SURGERY
              </p>
            </div>

            <div className="text-center group">
              <div className="aspect-[4/5] bg-primary relative overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-background/20 text-[200px]"
                    style={{ fontVariationSettings: "'wght' 100" }}
                  >
                    health_and_safety
                  </span>
                </div>
              </div>
              <h3 className="font-display-lg text-headline-sm text-primary">Ms. Sunita Rao</h3>
              <p className="font-label-caps text-label-caps text-secondary mt-2">
                DIRECTOR OF NURSING
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Certificates */}
        <section className="py-[120px] bg-primary text-background border-y border-secondary/20 reveal">
          <div className="px-6 md:px-20 max-w-container-max mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary-fixed text-[32px]">
                  verified
                </span>
                <p className="font-label-caps text-label-caps tracking-widest opacity-60">
                  NABH ACCREDITED
                </p>
                <p className="font-body-md italic">National Patient Safety</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary-fixed text-[32px]">
                  military_tech
                </span>
                <p className="font-label-caps text-label-caps tracking-widest opacity-60">
                  ISO 9001:2015
                </p>
                <p className="font-body-md italic">Quality Management</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary-fixed text-[32px]">
                  workspace_premium
                </span>
                <p className="font-label-caps text-label-caps tracking-widest opacity-60">
                  BEST HOSPITAL
                </p>
                <p className="font-body-md italic">State Health Awards 2023</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary-fixed text-[32px]">
                  star
                </span>
                <p className="font-label-caps text-label-caps tracking-widest opacity-60">
                  4.8 PATIENT RATING
                </p>
                <p className="font-body-md italic">Google · 3,200 Reviews</p>
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
