import { motion } from "framer-motion";
import { Globe, BookOpen, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Globe, text: "International Virtual Conference" },
  { icon: BookOpen, text: "Abstract Publication & DOI Assignment" },
  { icon: Award, text: "Indexed & Recognized" },
  { icon: Users, text: "Global Academic & Industry Participation" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Sustainable engineering smart city with renewable energy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-5 py-2 rounded-full border border-accent/40 bg-accent/10"
        >
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">
            11–12 March 2026 · Online · 8:00 AM – 12:00 PM IST
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Engineering the Future with{" "}
          <span className="text-gradient-emerald">Sustainable Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Join global researchers, engineers, industry leaders, and policy experts
          to shape the future of technology and sustainability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-card rounded-lg p-4 flex flex-col items-center gap-2"
            >
              <h.icon className="w-6 h-6 text-primary" />
              <span className="text-sm text-foreground/80 text-center leading-snug">
                {h.text}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href="#registration"
            className="gradient-emerald px-8 py-4 rounded-lg font-semibold text-primary-foreground text-lg hover:opacity-90 transition-opacity glow-emerald"
          >
            Submit Abstract Now
          </a>
          <a
            href="#registration"
            className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary/50 text-primary hover:bg-primary/10 transition-colors"
          >
            Register as Participant
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-accent text-sm font-medium animate-pulse-glow"
        >
          ⚡ Early Submission Recommended | Limited Presentation Slots
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
