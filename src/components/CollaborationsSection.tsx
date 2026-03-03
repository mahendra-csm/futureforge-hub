import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoIntelliminded from "@/assets/logo-crossref.png";
import logoCpd from "@/assets/logo-doi.png";
import logoCpdReal from "@/assets/logo-cpd-real.png";
import logoJci from "@/assets/logo-jci.png";
import logoMetaspectra from "@/assets/logo-metaspectra.png";
import logoCrossref from "@/assets/logo-rmetahub.png";
import logoDoi from "@/assets/logo-intelliminded.png";

const collaborators = [
  { logo: logoCrossref, name: "Crossref", desc: "Global DOI registration agency ensuring research discoverability." },
  { logo: logoDoi, name: "DOI", desc: "Making research citable, discoverable, and permanently accessible." },
  { logo: logoCpdReal, name: "CPD", desc: "Continuing Professional Development accreditation body." },
  { logo: logoJci, name: "Journal Citation Index", desc: "Global reference platform for journal visibility and academic standards." },
  { logo: logoMetaspectra, name: "MetaSpectra", desc: "170M+ metadata records — interdisciplinary knowledge ecosystem." },
  { logo: logoIntelliminded, name: "RMetaHub", desc: "Unified hub for research intelligence and collaboration." },
  { logo: logoIntelliminded, name: "IntelliMindEd", desc: "Digital learning, research excellence, and academic transformation." },
];

const CollaborationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section-alt" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Global <span className="text-gradient-gold">Collaborations</span> & Accreditation
          </h2>
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/15 text-primary">Accredited</span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-accent/15 text-accent">Recognized</span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/15 text-primary">Globally Indexed</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collaborators.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="glass-card glass-card-hover rounded-xl p-6 text-center transition-all duration-300"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img src={c.logo} alt={c.name} className="max-h-14 max-w-[140px] object-contain" />
              </div>
              <h4 className="font-bold text-foreground mb-2 font-serif">{c.name}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
