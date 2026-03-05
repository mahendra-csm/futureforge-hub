import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HeartPulse, Brain, Microscope, Pill, Stethoscope, Activity, Monitor, Users, ChevronRight } from "lucide-react";

const tracks = [
  { icon: HeartPulse, title: "Clinical Medicine & Cardiology", desc: "Cardiovascular research, diagnostic innovations, surgical advancements, and patient care protocols.", color: "#DC2626", gradient: "from-red-500 to-rose-500" },
  { icon: Brain, title: "Mental Health & Neuroscience", desc: "Psychiatry, psychology, neurological disorders, cognitive therapies, and brain research.", color: "#7C3AED", gradient: "from-violet-500 to-purple-600" },
  { icon: Microscope, title: "Medical Research & Diagnostics", desc: "Laboratory medicine, biomarkers, genomics, precision diagnostics, and pathology.", color: "#1A56DB", gradient: "from-blue-600 to-indigo-600" },
  { icon: Pill, title: "Pharmaceutical Sciences", desc: "Drug discovery, clinical trials, pharmacology, drug delivery systems, and therapeutics.", color: "#059669", gradient: "from-emerald-500 to-green-600" },
  { icon: Stethoscope, title: "Primary Care & Family Medicine", desc: "Preventive care, chronic disease management, patient-centered approaches, and community health.", color: "#0891B2", gradient: "from-cyan-500 to-teal-500" },
  { icon: Activity, title: "Public Health & Epidemiology", desc: "Disease surveillance, outbreak response, health policy, vaccination strategies, and population health.", color: "#D97706", gradient: "from-amber-500 to-orange-500" },
  { icon: Monitor, title: "Digital Health & Telemedicine", desc: "AI diagnostics, remote patient monitoring, health informatics, and virtual care platforms.", color: "#2563EB", gradient: "from-blue-500 to-sky-500" },
  { icon: Users, title: "Nursing & Allied Health", desc: "Nursing research, rehabilitation sciences, physiotherapy, and healthcare workforce development.", color: "#DB2777", gradient: "from-pink-500 to-fuchsia-500" },
];

const ThemesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="section-padding gradient-section relative" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            Key Themes & <span className="text-gradient-blue">Research Tracks</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Explore cutting-edge research domains shaping the future of healthcare, medicine, and public health.
          </p>
        </motion.div>

        {/* Interactive numbered list with hover expand */}
        <div className="grid md:grid-cols-2 gap-3">
          {tracks.map((t, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 cursor-default group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Number + icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-md transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}>
                  <t.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold text-gray-300">0{i + 1}</span>
                    <h3 className="font-bold text-sm text-gray-900 truncate">{t.title}</h3>
                  </div>
                  <p className={`text-xs text-gray-500 leading-relaxed transition-all duration-300 ${isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0 md:max-h-20 md:opacity-100"}`}>{t.desc}</p>
                </div>

                <ChevronRight className={`w-4 h-4 text-gray-300 flex-shrink-0 mt-1 transition-all duration-300 ${isHovered ? "translate-x-0.5" : ""}`} style={isHovered ? { color: t.color } : {}} />

                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full rounded-l-xl transition-all duration-500" style={{ background: t.color }} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8">
          <p className="text-sm text-gray-400">
            All topics related to healthcare, medicine & public health are welcome.{" "}
            <a href="#registration" className="text-[#1A56DB] font-medium hover:underline">Submit your abstract →</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemesSection;
