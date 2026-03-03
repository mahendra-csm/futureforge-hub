import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award } from "lucide-react";

const positions = [
  { icon: Target, title: "Global Knowledge Exchange", desc: "A platform connecting researchers and engineers across borders." },
  { icon: Eye, title: "Research Visibility Accelerator", desc: "Amplify your work through DOI, indexing, and metadata exposure." },
  { icon: Award, title: "Professional Recognition", desc: "Earn CPD-accredited certificates and academic acknowledgment." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            About the <span className="text-gradient-emerald">Conference</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            This conference focuses on engineering innovation, sustainable technologies, digital transformation,
            climate resilience, AI-driven systems, green infrastructure, and interdisciplinary research collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {positions.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card glass-card-hover rounded-2xl p-8 text-center transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-light flex items-center justify-center mx-auto mb-5">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
