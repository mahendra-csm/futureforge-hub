import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, GraduationCap, Factory, Landmark, Briefcase } from "lucide-react";

const participants = [
  {
    icon: Wrench,
    title: "Engineers & Technologists",
    headline: "Pioneer Sustainable Engineering",
    desc: "Discover breakthroughs in green engineering, climate-resilient infrastructure, renewable energy, and smart manufacturing from global experts.",
    color: "#1A56DB",
    gradient: "from-blue-600 to-blue-500",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: GraduationCap,
    title: "Researchers & Academics",
    headline: "Publish, Present & Collaborate",
    desc: "Submit your abstract, receive a permanent Crossref DOI, get indexed on 10+ directories including Google Scholar, and connect globally.",
    color: "#0891B2",
    gradient: "from-cyan-600 to-teal-500",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: Factory,
    title: "Industry Leaders & Innovators",
    headline: "Showcase Your Solutions",
    desc: "Position your organization at the forefront of sustainable innovation. Present digital transformation case studies to a global audience.",
    color: "#059669",
    gradient: "from-emerald-600 to-green-500",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: Landmark,
    title: "Policy Makers & Officials",
    headline: "Shape the Future Framework",
    desc: "Gain insights into global engineering standards, sustainability frameworks, and technology governance from researchers and technologists.",
    color: "#7C3AED",
    gradient: "from-violet-600 to-purple-500",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: Briefcase,
    title: "Students & Early Careers",
    headline: "Launch Your Global Career",
    desc: "Present research internationally, earn accredited certificates, connect with mentors and recruiters, and explore sustainability career paths.",
    color: "#D97706",
    gradient: "from-amber-600 to-orange-500",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=90",
  },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            This Conference Is <span className="text-gradient-blue">Built For You</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Whether you're a seasoned researcher or an aspiring engineer, there's a seat at this table for you.
          </p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {participants.slice(0, 3).map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default h-[280px] sm:h-[320px] md:h-[340px]"
            >
              {/* Background image */}
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                  <p.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 w-fit" style={{ color: "white", background: `${p.color}90` }}>
                  {p.headline}
                </span>
                <p className="text-xs text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 2 cards, wider */}
        <div className="grid md:grid-cols-2 gap-5">
          {participants.slice(3).map((p, i) => (
            <motion.div key={i + 3}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.38 + i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default h-[260px] sm:h-[280px] md:h-[300px]"
            >
              {/* Background image */}
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                  <p.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 w-fit" style={{ color: "white", background: `${p.color}90` }}>
                  {p.headline}
                </span>
                <p className="text-xs text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
