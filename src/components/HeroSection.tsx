import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Flame, Award, BookOpen, Users } from "lucide-react";
import logo from "@/assets/logo.png";

/* Healthcare/Medical professionals - Clear high-quality image */
const HERO_BG = "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=3840&q=100";

/* ── Countdown Timer (counts to midnight today) ── */
const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      if (diff <= 0) return;
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center gap-2.5 md:gap-4">
      {(["hours", "minutes", "seconds"] as const).map((unit) => (
        <div key={unit} className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 sm:p-3 md:p-4 min-w-[56px] sm:min-w-[64px] md:min-w-[80px] text-center border border-white/20">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums">
            {String(time[unit]).padStart(2, "0")}
          </div>
          <div className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-widest mt-0.5 font-medium">{unit}</div>
        </div>
      ))}
    </div>
  );
};

/* ── Hero Section ── */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/75 to-[#0F172A]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-16 md:py-24">
        {/* Urgency banner — top highlight */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-red-500/20 border border-red-400/30 backdrop-blur-sm">
            <Flame className="w-4 h-4 text-red-400 animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-red-300 tracking-wide">SEATS FILLING FAST — REGISTER NOW!</span>
          </div>
        </motion.div>

        {/* Logo — prominent with white frosted container */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white rounded-2xl px-10 py-5 md:px-16 md:py-6 shadow-xl">
            <img src={logo} alt="OneGrasp" className="h-20 sm:h-28 md:h-36 object-contain" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-[11px] md:text-xs font-medium tracking-wide text-white/80">
            🌍 ONLINE INTERNATIONAL CONFERENCE · ACCREDITED · PEER-REVIEWED
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-4 text-white"
        >
          <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white/80">International Conference on</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300">Healthcare Medicine&</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300">Public Health</span>
        </motion.h1>

        {/* Subtitle with value prop */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          Get your research a <span className="text-white font-semibold">Crossref DOI</span>, <span className="text-white font-semibold">CPD accreditation</span>, indexed in <span className="text-white font-semibold">10+ global directories</span>, <span className="text-white font-semibold">170+ million metadata record access</span>, and an accredited certificate — all in one conference, all at <span className="text-white font-semibold">affordable prices</span>.
        </motion.p>

        {/* Event meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 text-sm text-white/80 font-mono"
        >
          <span className="font-bold text-white">📅 11–12 March 2026</span>
          <span className="text-white/30">·</span>
          <span className="font-bold text-white">🕗 08:00 AM – 12:00 PM IST</span>
          <span className="text-white/30">·</span>
          <span className="font-bold text-white">🌐 Online</span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-white/70 text-xs uppercase tracking-widest mb-2 font-medium">Today's offer ends in</p>
          <CountdownTimer />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <a href="#registration"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-gradient-to-r from-[#1A56DB] to-[#2563EB] text-white hover:from-[#1648B5] hover:to-[#1A56DB] transition-all animate-cta-pulse shadow-[0_4px_20px_rgba(26,86,219,0.4)]">
            Register & Grab Your Benefits →
          </a>
        </motion.div>

        {/* No visa quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="mb-5"
        >
          <div className="inline-block px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
            <p className="text-white/90 text-xs sm:text-sm italic">"No visa needed · No flights · No cancellations — <span className="text-sky-300 font-semibold not-italic">attend from anywhere, 100% online</span>"</p>
          </div>
        </motion.div>

        {/* Benefit pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
        >
          {[
            { icon: Award, text: "Accredited Certificate" },
            { icon: BookOpen, text: "Crossref DOI" },
            { icon: Users, text: "Global Networking" },
          ].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/90 text-[11px] font-medium">
              <b.icon className="w-3 h-3" /> {b.text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce-arrow">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default HeroSection;
