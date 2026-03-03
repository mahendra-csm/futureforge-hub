import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import certificateImg from "@/assets/certificate-preview.png";

const CertificateSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section-alt" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-14"
        >
          Certification <span className="text-gradient-gold">Preview</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden glow-gold border border-accent/20"
          >
            <img
              src={certificateImg}
              alt="Certificate of Appreciation issued by OneGrasp"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-serif">
              Professionally Designed Certificate by <span className="text-accent">OneGrasp</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Recognized & Indexed Event Documentation — each certificate carries the
              conference identity, participant details, and unique Certificate ID.
            </p>
            <div className="space-y-3">
              <div className="glass-card rounded-lg p-4">
                <p className="text-sm text-foreground/80">
                  <span className="text-primary font-semibold">Certificate of Appreciation</span> awarded
                  after feedback submission for speakers and presenters.
                </p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <p className="text-sm text-foreground/80">
                  <span className="text-accent font-semibold">Commemorative Momento</span> for active
                  contributors and keynote participants.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
