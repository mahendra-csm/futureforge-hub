import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Award, BookOpen, BadgeCheck, Mic, Database, Search, Gift } from "lucide-react";
import certificateImg from "@/assets/blur.png";

const benefits = [
  {
    icon: Award,
    title: "Certificate of Participation / Presentation",
    subtitle: "Awarded after submitting post-conference feedback",
    detail: "Receive an internationally recognized, premium Certificate of Participation or Presentation issued by OneGrasp Scientific Conferences. The certificate bears your full name, role (Speaker / Presenter / Attendee), the conference name, date, and Certificate ID. It is accredited and suitable for academic CVs, LinkedIn profiles, and professional portfolios. Active contributors (speakers and presenters) receive a premium physical Commemorative Memento in addition to the digital certificate.",
  },
  {
    icon: BookOpen,
    title: "DOI via Crossref — Make Your Research Permanent",
    subtitle: "Get a globally recognized Digital Object Identifier for your abstract",
    detail: "Every abstract accepted for presentation receives a unique DOI (Digital Object Identifier) issued through Crossref — the world's leading DOI registration agency trusted by 50,000+ publishers. Your DOI makes your research permanently citable, discoverable, and accessible across the global scholarly web. DOI prefix: 10.65838. This means your work enters the permanent scientific record and can be referenced in future publications, grant applications, and institutional reports.",
  },
  {
    icon: BadgeCheck,
    title: "CPD Accredited Certificate",
    subtitle: "Recognized for Continuing Professional Development",
    detail: "Participating in this conference counts toward your CPD (Continuing Professional Development) hours, accredited by TheCPD.Group — a globally recognized CPD accreditation body. The CPD certificate demonstrates your commitment to ongoing professional growth and is recognized by employers, professional bodies, and licensing authorities worldwide.",
  },
  {
    icon: Search,
    title: "Abstract Indexed in Google Scholar & 10+ Directories",
    subtitle: "Your research, discoverable globally",
    detail: "Submitted abstracts are indexed in Google Scholar and 10+ additional international indexing directories and databases, dramatically increasing the visibility and reach of your research. Indexing partners include Journal Citation Index, MetaSpectra (170M+ metadata records), RMetaHub, IntelliMindEd, and more.",
  },
  {
    icon: Database,
    title: "Free Access to 170+ Million Metadata Records",
    subtitle: "Via MetaSpectra — an interdisciplinary knowledge ecosystem",
    detail: "All registered participants gain complimentary access to MetaSpectra's repository of over 170 million scholarly metadata records — spanning engineering, technology, environmental sciences, materials science, AI, and sustainability research.",
  },
  {
    icon: Mic,
    title: "Opportunity to Become a Keynote Speaker",
    subtitle: "Your expertise on the international stage",
    detail: "Outstanding presenters and contributors identified during the conference may be personally invited to serve as a Keynote Speaker at future OneGrasp international conferences. This is a rare career-defining opportunity to establish yourself as a global thought leader.",
  },
  {
    icon: Gift,
    title: "Commemorative Memento for Active Contributors",
    subtitle: "A tangible token of your international contribution",
    detail: "Speakers, presenters, and active contributors receive a premium Commemorative Memento — a physical keepsake recognizing your outstanding contribution to the conference.",
  },
];

const BenefitCard = ({ b, index }: { b: typeof benefits[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="light-card rounded-xl overflow-hidden transition-all cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start gap-4 p-5">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
          <b.icon className="w-5 h-5 text-[#1A56DB]" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm md:text-base leading-snug">{b.title}</h4>
          <p className="text-xs text-gray-500 mt-1">{b.subtitle}</p>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#1A56DB] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden">
            <div className="px-5 pb-5 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-100 mt-0 pt-4">
              {b.detail}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ── Certificate Preview Card ── */
const CertificatePreview = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="relative"
  >
    <p className="text-xs text-[#D97706] font-medium mb-3 text-center">✨ This is what you'll receive →</p>

    {/* Outer gold border */}
    <div className="relative rounded-2xl p-1 animate-border-shimmer" style={{ border: "2px solid rgba(217,119,6,0.3)", background: "rgba(217,119,6,0.02)" }}>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img src={certificateImg} alt="Certificate Preview" className="w-full h-auto" />
      </div>
    </div>

    {/* Badge */}
    <div className="absolute -bottom-3 right-4 px-3 py-1.5 rounded-full text-[10px] font-medium bg-white border border-amber-200 text-[#D97706] shadow-sm">
      Accredited · DOI: 10.65838
    </div>
  </motion.div>
);

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section-alt relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            What You Gain By <span className="text-gradient-gold">Joining</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Every participant walks away with tangible, career-enhancing, globally recognized credentials and opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Benefits */}
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <BenefitCard key={i} b={b} index={i} />
            ))}
          </div>

          {/* Right — Certificate */}
          <div className="lg:sticky lg:top-24">
            <CertificatePreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
