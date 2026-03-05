import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, Globe2, Mic, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import logoCrossref from "@/assets/logo-rmetahub.png";
import logoCpdImg from "@/assets/logo-doi.png";
import logoMetaspectra from "@/assets/logo-metaspectra.png";

/* Google Scholar SVG icon */
const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

/* ── Animated counter ── */
const AnimCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const pillars = [
  { img: logoCrossref, title: "Crossref DOI", desc: "Permanent citation for every accepted abstract", color: "#1A56DB", bg: "bg-blue-50", border: "border-blue-100" },
  { img: logoCpdImg, title: "CPD Accredited", desc: "Globally recognized professional certification", color: "#059669", bg: "bg-emerald-50", border: "border-emerald-100" },
  { isGoogleScholar: true, title: "10+ Directories", desc: "Indexed on Google Scholar & major databases", color: "#D97706", bg: "bg-amber-50", border: "border-amber-100" },
  { img: logoMetaspectra, title: "170M+ Records", desc: "Free MetaSpectra scholarly access for all participants", color: "#7C3AED", bg: "bg-violet-50", border: "border-violet-100" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />
      {/* Subtle decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
            About <span className="text-gradient-blue">ICHMP 2026</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Advancing Healthcare, Medicine & Public Health for a Healthier Tomorrow
          </p>
        </motion.div>

        {/* Main content — 2-column layout */}
        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          {/* Left — Narrative card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A56DB] to-[#2563EB] flex items-center justify-center shadow-md">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">The Conference</h3>
                <p className="text-xs text-gray-400">2-Day International Online Event</p>
              </div>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              This conference addresses urgent challenges at the intersection of <span className="text-[#1A56DB] font-semibold">Healthcare Innovation</span> and <span className="text-[#059669] font-semibold">Public Health</span> — from medical breakthroughs and clinical research to AI-powered diagnostics, telemedicine, and global health policies.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              This brings together a global community of Healthcare Professionals, Medical Researchers, Clinicians, Public Health Experts, and Students in a dynamic online format — featuring presentations, panel discussions, and live Q&A sessions.
            </p>

            {/* Inline stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: 170, suffix: "M+", label: "Metadata Records", color: "text-[#7C3AED]", bg: "bg-violet-50" },
                { value: 7, suffix: "", label: "International Collaborations", color: "text-[#1A56DB]", bg: "bg-blue-50" },
                { value: 100, suffix: "+", label: "Countries", color: "text-[#059669]", bg: "bg-emerald-50" },
                { value: 2, suffix: "", label: "Days", color: "text-[#D97706]", bg: "bg-amber-50" },
              ].map((s, i) => (
                <div key={i} className={`${s.bg} rounded-xl p-3 text-center border border-gray-100`}>
                  <div className={`text-2xl md:text-3xl font-extrabold ${s.color}`}>
                    <AnimCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl border border-blue-100 p-6">
              <h4 className="text-sm font-bold text-[#1A56DB] uppercase tracking-wider mb-3">Your Research Gets</h4>
              <ul className="space-y-3">
                {[
                  "A permanent DOI via Crossref (10.65838)",
                  "Indexed in Google Scholar & 10+ directories",
                  "CPD-accredited certificate of participation",
                  "Access to 170M+ scholarly metadata records",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1A56DB] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h4 className="text-sm font-bold text-[#D97706] uppercase tracking-wider mb-3">Event Details</h4>
              <div className="space-y-3">
                {[
                  { icon: Calendar, text: "11–12 March 2026", sub: "08:00 AM – 12:00 PM IST", color: "#1A56DB" },
                  { icon: Globe2, text: "100% Online", sub: "Join from anywhere", color: "#059669" },
                  { icon: Users, text: "Open to All", sub: "Students to experts", color: "#D97706" },
                ].map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${d.color}12` }}>
                      <d.icon className="w-4 h-4" style={{ color: d.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{d.text}</p>
                      <p className="text-[11px] text-gray-400">{d.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
              className={`group ${p.bg} rounded-2xl border ${p.border} p-5 hover:shadow-md transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 bg-white shadow-sm overflow-hidden">
                {p.img ? (
                  <img src={p.img} alt="" className="w-7 h-7 object-contain" />
                ) : p.isGoogleScholar ? (
                  <GoogleScholarIcon className="w-6 h-6 text-[#D97706]" />
                ) : null}
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{p.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
