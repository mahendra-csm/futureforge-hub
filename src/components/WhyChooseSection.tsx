import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const features = [
  "Indexed research ecosystem",
  "DOI-backed documentation",
  "CPD accreditation",
  "Metadata exposure (170M+ records)",
  "Global academic collaboration network",
  "Transparent professional recognition",
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-14"
        >
          Why Choose <span className="text-gradient-emerald">This Conference</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 text-center font-semibold text-sm uppercase tracking-wider border-b border-border">
            <div className="p-5 text-muted-foreground">Feature</div>
            <div className="p-5 text-muted-foreground">Generic Conferences</div>
            <div className="p-5 text-primary">This Conference</div>
          </div>
          {features.map((f, i) => (
            <div key={i} className="grid grid-cols-3 text-center border-b border-border/50 last:border-0">
              <div className="p-4 text-left text-foreground/90 font-medium text-sm">{f}</div>
              <div className="p-4 flex justify-center items-center">
                <X className="w-5 h-5 text-destructive/60" />
              </div>
              <div className="p-4 flex justify-center items-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
