import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, BadgeCheck, Mic, Database, Search } from "lucide-react";

const benefits = [
  { icon: Award, title: "Certificate of Participation / Presentation" },
  { icon: BookOpen, title: "DOI (Crossref) for Your Abstract" },
  { icon: BadgeCheck, title: "Accredited CPD Certificate" },
  { icon: Mic, title: "Opportunity to Become Keynote Speaker" },
  { icon: Database, title: "Free Access to 170+ Million Metadata Records" },
  { icon: Search, title: "Abstract Indexed in Google Scholar & 10+ Directories" },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Key <span className="text-gradient-emerald">Benefits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every participant receives tangible academic and professional value.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-xl p-6 flex items-start gap-4 group hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg gradient-emerald flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground/90 leading-snug">{b.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-xl p-6 border-l-4 border-l-primary"
        >
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">DOI</span> ensures your research is citable,
            permanently accessible, and globally discoverable — making your contribution part of the
            world's scholarly record.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
