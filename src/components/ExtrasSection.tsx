import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, MessageCircle, X } from "lucide-react";

// Countdown Timer
export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-03-11T08:00:00+05:30").getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 gradient-section">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-bold font-serif mb-6 text-muted-foreground">Conference Begins In</h3>
        <div className="flex justify-center gap-4 md:gap-8">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div key={unit} className="glass-card rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px]">
              <div className="text-3xl md:text-4xl font-bold text-primary font-serif">
                {String(timeLeft[unit]).padStart(2, "0")}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ
const faqs = [
  { q: "Is DOI included?", a: "Yes, every accepted abstract receives a Crossref DOI (10.65838), making it permanently citable and discoverable." },
  { q: "Is CPD certificate provided?", a: "Yes, all participants receive an accredited CPD certificate upon successful completion." },
  { q: "Is this fully online?", a: "Yes, the conference is entirely virtual, accessible from anywhere in the world." },
  { q: "Will abstracts be indexed?", a: "Yes, abstracts are indexed in Google Scholar and 10+ indexing directories including MetaSpectra (170M+ records)." },
  { q: "Who can participate?", a: "Engineers, researchers, academics, industry professionals, students, policy makers — anyone passionate about sustainable engineering and technology." },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding gradient-section" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground/90 hover:text-foreground transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Placeholder
export const TestimonialsPlaceholder = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 gradient-section-alt" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-2xl font-bold font-serif mb-8"
        >
          What <span className="text-gradient-emerald">Participants</span> Say
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Dr. A. Sharma", role: "Researcher, IIT Delhi", quote: "An exceptional platform for academic exchange and DOI-backed research publication." },
            { name: "Prof. M. Chen", role: "University of Melbourne", quote: "The indexing and CPD accreditation set this conference apart from others." },
            { name: "Eng. R. Okafor", role: "Sustainability Lead, Lagos", quote: "Outstanding networking and professional recognition opportunities." },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
              className="glass-card rounded-xl p-6 text-left"
            >
              <p className="text-muted-foreground text-sm italic mb-4">"{t.quote}"</p>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// WhatsApp Floating Button
export const WhatsAppButton = () => (
  <a
    href="https://wa.me/918977760441"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-emerald flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow-emerald"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </a>
);

// Exit Intent Popup
export const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 5) setShow(true);
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-8 max-w-md mx-4 relative glow-emerald"
      >
        <button onClick={() => { setShow(false); setDismissed(true); }} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold font-serif mb-3">Before You Leave!</h3>
        <p className="text-muted-foreground mb-6">Download the conference brochure and stay updated on submission deadlines.</p>
        <a
          href="#registration"
          onClick={() => { setShow(false); setDismissed(true); }}
          className="inline-block gradient-emerald px-6 py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get Conference Details
        </a>
      </motion.div>
    </div>
  );
};
