import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const advantages = [
  "Permanent DOI Assignment",
  "Increased Research Visibility",
  "Academic Recognition",
  "Indexed Discoverability",
  "Networking with Global Experts",
  "Publication & Citation Support",
  "Professional Certification",
];

const AbstractSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Why <span className="text-gradient-emerald">Submit</span> Your Abstract?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
        >
          Your research deserves global recognition. Abstract submission opens doors to indexing, citation, and worldwide academic exposure.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="flex items-center gap-3 text-left"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/90 font-medium">{a}</span>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#registration"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="inline-block gradient-emerald px-8 py-4 rounded-lg font-semibold text-primary-foreground text-lg hover:opacity-90 transition-opacity glow-emerald"
        >
          Submit Your Abstract
        </motion.a>
      </div>
    </section>
  );
};

export default AbstractSection;
