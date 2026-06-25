import { Link } from "@tanstack/react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function TreatmentsPage() {
  useScrollReveal();

  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* Navigation */}
      <Header variant="light" />

      {/* Hero Section */}
      <header className="relative h-[716px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20 animate-[ambientSlow_20s_ease-in-out_infinite_alternate]"></div>
        <div className="relative z-10 text-center px-6 animate-rise">
          <span className="font-label-caps text-label-caps text-secondary block mb-4 uppercase tracking-[0.2em]">
            Clinical Departments
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 max-w-4xl mx-auto">
            Specialist Care Across Every Discipline
          </h1>
          <div className="shimmer-line max-w-md mx-auto opacity-50"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 hero-gradient"></div>
      </header>

      {/* Treatments Directory */}
      <main className="max-w-container-max mx-auto px-6 md:px-20 py-20 md:py-40">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Department Directory
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              From routine checkups to complex surgeries, our departments bring together expert
              physicians, advanced diagnostics, and compassionate nursing across every field of
              medicine.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="p-3 border border-secondary/30 rounded-full hover:bg-secondary/5 transition-all">
              <span className="material-symbols-outlined text-secondary">filter_list</span>
            </button>
            <button className="p-3 border border-secondary/30 rounded-full hover:bg-secondary/5 transition-all">
              <span className="material-symbols-outlined text-secondary">search</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 reveal">
          {/* Card 1: Outpatient Clinic */}
          <div className="treatment-card-hover group flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative border-[0.5px] border-[#D4AF37]/30">
              <img
                className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Outpatient Clinic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR6H6SKJo--dfEnp85Ctfr488Ti3xgHn8KgP74AVFGnWDX_5LLG4ucvzA0nlngMKIxiae8D_ViTgy3B1-TOYm5nAP6JyrZ1gPiQwp5HRIaMbl_ybh5ZMqMDFKycy44w8jccQE-36sIivXjWom0WZsM7TPqYiwDWmmM9pfZvJbJq-WELOybzsQ-Wwb4IkzXJOHDWUEhj0WjDX6Nh2dj5O30JtVoEBaZ2FbktKz-Z60z-j2KvB3d51nBZ1lQiOAFXEzFR_VG8C2C7Z8"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            <div className="px-2">
              <span className="font-label-caps text-label-caps text-secondary/60 mb-2 block">
                General Medicine
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Outpatient Clinic
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                Diagnosis and management of common illnesses, fever, infections, diabetes,
                hypertension, and chronic disease follow-ups.
              </p>
              <Link
                to="/booking"
                className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all"
              >
                Explore Department &amp; Book
              </Link>
            </div>
          </div>

          {/* Card 2: General Surgery */}
          <div className="treatment-card-hover group flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative border-[0.5px] border-[#D4AF37]/30">
              <img
                className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="General Surgery"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYpOBoTuKRa5d-sabQvxDzJD5SuUCIq6nFv9cNNFjc8p9e9KFa10xillierg5vMyOx-zYSlaNqF0GNubEToCJkp8MXCaj2HGQvWucsZba3K5GrVv_tVFG7cNC4bYdSCpOypGZ8XJNzNbFme-8fnBLThi8ZbmRzPPg-OrERnmp0-oGebuA1CmJDa5Hsy1dLP88anEFL2NLmkCJDui5RZIlCFyCVxzoGW4ofKN6rYyPE0yHs3voMfHn5lIHpFSyGagglI9gzMsbD5Pg"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            <div className="px-2">
              <span className="font-label-caps text-label-caps text-secondary/60 mb-2 block">
                Surgery
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                General Surgery
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                Appendectomy, hernia repair, gallbladder removal, and abdominal procedures performed
                by board-certified surgeons.
              </p>
              <Link
                to="/booking"
                className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all"
              >
                Explore Department &amp; Book
              </Link>
            </div>
          </div>

          {/* Card 3: Heart & Vascular */}
          <div className="treatment-card-hover group flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative border-[0.5px] border-[#D4AF37]/30">
              <img
                className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Heart & Vascular"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQz_1IT1cbjcvP7H9PkaxnAmnEG7JGuALNr_k9pnCCRRpC2NrHckFdCGDIwVCAW2DiCCMhAme_qQLGCihuZcnMHGsi0HZiWAUqLUuTuofKl9F-o34Kugq7GbGbHGh2gD_yI9J285Br1c2LzM9ck-EiZu2D9exJ3Cz7hRd6lSs--pYVSB1VAwvo_Nsvif5ZlVOdX5ETZ_MLW4HRFi6k386EwLqrIm0w5jt55AMkafetNOm-F3ectaCaZUHjOjwjOAHbq7bqk6uDB8"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            <div className="px-2">
              <span className="font-label-caps text-label-caps text-secondary/60 mb-2 block">
                Cardiology
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Heart & Vascular
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                ECG, echocardiography, angiography, and interventional cardiology for all heart
                conditions.
              </p>
              <Link
                to="/booking"
                className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all"
              >
                Explore Department &amp; Book
              </Link>
            </div>
          </div>

          {/* Card 4: Bone & Joint Care */}
          <div className="treatment-card-hover group flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative border-[0.5px] border-[#D4AF37]/30">
              <img
                className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Bone & Joint Care"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJeJv7oa16UPPGrX3c68E1fw4l00Xenr2qdpRTZCuhsTL-SeDIqB7MGlYsw7EWjiyC2wZhyRQkQ9L-fp-J6VUvmdxivHFyT3CQhXKDWdsIjRkuh8aWVjJdI5ZmpoWmOW82IGljN4T2CbMCMoJyGdMbAYB_9LxnTdzkkdkJxpVTg8PcA8HQ7elgHWB0zx1US3PpS-brVkrGGhZ8Pf7JrtDKmskNuXqXM2TvOndxFV4hZYg3apzVSkFR2z7PpOFD0OCBLQhxLc_bYeg"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            <div className="px-2">
              <span className="font-label-caps text-label-caps text-secondary/60 mb-2 block">
                Orthopaedics
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Bone & Joint Care
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                Fracture management, joint replacement, arthroscopy, and spine surgery for
                musculoskeletal conditions.
              </p>
              <Link
                to="/booking"
                className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all"
              >
                Explore Department &amp; Book
              </Link>
            </div>
          </div>

          {/* Card 5: Child Health */}
          <div className="treatment-card-hover group flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative border-[0.5px] border-[#D4AF37]/30">
              <img
                className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Child Health"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcOywFZhyo_XWQzNSlAZKqGJppHvztJa36KvMZ5Z3y8pwgcc3HyzF9qmgbreBfR9Pe0HbnZm2lhEBYzO70neamSs7kDayK0Xhe00TmpkZ9lhwRWAGG2F0lhP1BKRINtwgq80vA1aGH1V7qztENXa6EkIfckK-4dZDXmpF9rQ52bSQb0k2ryHDluSWJXVYKHgTQCLtPMXVXuJlIabjQhecJnXJCBoeR-qb_eR-9LFm0LW6GMy3XDwCVl8ljgELm5Wvi-eistLQdWIg"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            <div className="px-2">
              <span className="font-label-caps text-label-caps text-secondary/60 mb-2 block">
                Paediatrics
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Child Health</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                Well-baby visits, vaccinations, growth monitoring, and management of childhood
                illnesses from birth to 18 years.
              </p>
              <Link
                to="/booking"
                className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all"
              >
                Explore Department &amp; Book
              </Link>
            </div>
          </div>

          {/* Card 6: Women's Health */}
          <div className="treatment-card-hover group flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative border-[0.5px] border-[#D4AF37]/30">
              <img
                className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Women's Health"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrem1lNgq8QeT5qyw_usR3XuMjnkV7i-n1DevwJfcBZfUs7y0qM8e0Xo532d25tD8TW_UgWrII3Y9tc3o7Nyw3Q9VFr5rdTN-dlRMWrKm5PUW_MlS2MW3BI7ZM3OKZ4gz3bDFU9HXfs9xp87AZVRwD5KIPzyVgrr7iR1j4S3EDJdKH8a_54ZC2oDhrIlNf3HR3Uxi8lf1Jom1mJgu1nXyVxd_OCRpBwquBKC787OJ3_Vb7ydMz7jJuYMSIY6ze1Icp3QTbDJ692Ao"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            <div className="px-2">
              <span className="font-label-caps text-label-caps text-secondary/60 mb-2 block">
                Obstetrics
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Women's Health
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                Antenatal care, high-risk pregnancy management, normal and Caesarean delivery, and
                gynaecological procedures.
              </p>
              <Link
                to="/booking"
                className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all"
              >
                Explore Department &amp; Book
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Grid (More detailed) */}
        <div className="mt-32 pt-32 border-t border-secondary/10 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="glass-card p-12 flex flex-col justify-center">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-6">
                Preventive Health Checkups
              </h4>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Every checkup begins with a full clinical history, followed by a curated panel of
                investigations tailored to your age, gender, and risk factors — reviewed by a senior
                physician.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-secondary/5 border border-secondary/20 font-label-caps text-label-caps text-secondary">
                  Complete Blood Count
                </span>
                <span className="px-4 py-2 bg-secondary/5 border border-secondary/20 font-label-caps text-label-caps text-secondary">
                  Lipid Profile
                </span>
                <span className="px-4 py-2 bg-secondary/5 border border-secondary/20 font-label-caps text-label-caps text-secondary">
                  ECG
                </span>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden border-[0.5px] border-[#D4AF37]/30">
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
      <section className="bg-primary py-40 px-6 text-center relative overflow-hidden reveal">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary-fixed mb-8">
            Begin Your Healthcare Journey
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-12 opacity-80">
            Speak with our patient coordinators to find the right department and book your first
            appointment.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/booking"
              className="px-12 py-5 bg-secondary text-on-secondary font-body-md text-body-md border border-[#D4AF37] hover:bg-secondary-container hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="px-12 py-5 bg-transparent text-[#D4AF37] font-body-md text-body-md border border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Department Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
