import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle, ExternalLink } from "lucide-react";

const RegistrationForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <section id="registration" className="section-padding gradient-section-alt" ref={ref}>
        <div className="max-w-xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-10">
            <div className="w-16 h-16 rounded-full gradient-emerald flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Thank You for Your Interest!</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">The OneGrasp team will contact you shortly with complete conference details.</p>
            <div className="space-y-3">
              <a href="https://wa.me/918977760441" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-light text-primary font-semibold hover:bg-primary/10 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp: +91 8977760441
              </a>
              <a href="https://onegrasp.com/conference-events/international-conference-on-engineering-technology-sustainable-solutions/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-light text-accent font-semibold hover:bg-accent/10 transition-colors">
                <ExternalLink className="w-5 h-5" /> Visit Conference Page
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputClass = "w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-colors";

  return (
    <section id="registration" className="section-padding gradient-section-alt" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Secure Your <span className="text-gradient-emerald">Participation</span> Today
          </h2>
          <p className="text-muted-foreground">Fill in your details and we'll send you complete conference information.</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input name="fullName" placeholder="Full Name *" required className={inputClass} />
            <input name="email" type="email" placeholder="Email ID *" required className={inputClass} />
            <input name="phone" placeholder="Phone Number *" required className={inputClass} />
            <input name="profession" placeholder="Profession *" required className={inputClass} />
            <input name="country" placeholder="Country *" required className={inputClass} />
            <input name="role" placeholder="Current Role" className={inputClass} />
          </div>
          <textarea name="comments" placeholder="Any Comments" rows={3} className={inputClass} />
          <button type="submit" className="w-full gradient-emerald py-4 rounded-xl font-semibold text-primary-foreground text-lg hover:opacity-90 transition-opacity glow-emerald">
            Submit & Get Conference Details
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationForm;
