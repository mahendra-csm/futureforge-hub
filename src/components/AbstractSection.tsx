import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Globe2, Award, BookOpen, Users, Sparkles, TrendingUp, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Fingerprint, title: "Permanent DOI", desc: "Crossref DOI (10.65838) — makes your work globally citable forever", num: "01" },
  { icon: Globe2, title: "10+ Index Directories", desc: "Google Scholar, MetaSpectra, JCI, RMetaHub, IntelliMindEd & more", num: "02" },
  { icon: Award, title: "CPD Accredited Certificate", desc: "Recognized by employers and licensing authorities in 50+ countries", num: "03" },
  { icon: BookOpen, title: "Peer-Reviewed Publication", desc: "Your research evaluated and validated by international reviewers", num: "04" },
  { icon: Users, title: "Global Networking", desc: "Connect with researchers, engineers, and innovators from 50+ countries", num: "05" },
  { icon: TrendingUp, title: "Career Advancement", desc: "Strengthen your academic portfolio, CV, and professional recognition", num: "06" },
];

const AbstractSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Light background with subtle accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-white to-blue-50/30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D97706] via-[#1A56DB] to-[#059669]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-10">
          {/* Attention badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            MOST IMPORTANT — DON'T MISS THIS
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            Why You <span className="text-[#D97706]">MUST</span> Submit Your Abstract
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Your research deserves <strong className="text-gray-900">global recognition</strong>. One abstract submission gives you a <strong className="text-gray-900">permanent DOI</strong>, indexing in <strong className="text-gray-900">10+ directories</strong>, and an <strong className="text-gray-900">accredited certificate</strong> — all at once.
          </p>
        </motion.div>

        {/* Benefits — numbered list with icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.08 }}
              className="relative bg-white rounded-2xl p-5 border border-gray-100 group hover:shadow-lg hover:border-gray-200 transition-all duration-300 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-3 right-4 text-4xl font-black text-gray-100 select-none">{b.num}</span>

              <div className="relative z-10 flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1A56DB]/10 to-[#0891B2]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#1A56DB]/20 group-hover:to-[#0891B2]/20 transition-colors">
                  <b.icon className="w-5 h-5 text-[#1A56DB]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5">{b.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10">
          <a href="#registration"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#1A56DB] to-[#2563EB] text-white hover:from-[#1648B5] hover:to-[#1A56DB] transition-all shadow-lg hover:shadow-xl">
            Submit Your Abstract Now <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-gray-400 text-xs mt-3">Limited slots available · Registration closing soon</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AbstractSection;
