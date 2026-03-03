import { useState, useEffect, useCallback } from "react";
import { MessageCircle, X, Clock, AlertTriangle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Countdown hook (midnight-based, same as hero) ── */
function useCountdown() {
  const calc = useCallback(() => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = Math.max(0, midnight.getTime() - now.getTime());
    return {
      hours: Math.floor(diff / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      total: diff,
    };
  }, []);
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return time;
}

/* ── Seats Closing Countdown Alert (section) ── */
export const UrgencyBar = () => {
  const { hours, minutes, seconds } = useCountdown();

  const boxes: { value: number; label: string }[] = [
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  return (
    <section className="py-10 px-4 relative overflow-hidden bg-gradient-to-r from-[#1A56DB] via-[#2563EB] to-[#0891B2]">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Alert badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-5">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Limited Online Seats — Registration Closing Soon</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Today's Offer Ends In
        </h3>
        <p className="text-white/70 text-sm mb-6">11th & 12th March 2026 · Online</p>

        {/* Countdown boxes */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
          {boxes.map((b, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                  {String(b.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[10px] md:text-xs text-white/60 mt-1.5 font-medium uppercase tracking-wider">{b.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#registration"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#1A56DB] font-semibold text-sm hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl">
          <Calendar className="w-4 h-4" />
          Reserve Your Seat Now →
        </a>
      </div>
    </section>
  );
};

/* ── Sticky Top Countdown Banner (appears on scroll) ── */
export const StickyCountdownBanner = () => {
  const { hours, minutes, seconds, total } = useCountdown();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (total <= 0) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#1A56DB] text-white shadow-lg"
        >
          <div className="max-w-6xl mx-auto px-3 md:px-4 py-2 md:py-2.5 flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-1.5 md:gap-3 text-[10px] md:text-sm shrink-0" style={{ maxWidth: "30%" }}>
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/80 flex-shrink-0 hidden sm:block" />
              <span className="font-medium hidden sm:inline">Offer ends in:</span>
              <div className="flex items-center gap-1 md:gap-1.5 font-mono font-bold">
                <span className="bg-white/20 px-1 md:px-1.5 py-0.5 rounded text-[10px] md:text-xs">{String(hours).padStart(2, "0")}h</span>
                <span className="text-white/50">:</span>
                <span className="bg-white/20 px-1 md:px-1.5 py-0.5 rounded text-[10px] md:text-xs">{String(minutes).padStart(2, "0")}m</span>
                <span className="text-white/50">:</span>
                <span className="bg-white/20 px-1 md:px-1.5 py-0.5 rounded text-[10px] md:text-xs">{String(seconds).padStart(2, "0")}s</span>
              </div>
            </div>
            <a href="#registration" className="flex-1 md:flex-none text-center px-4 py-2 md:py-1.5 rounded-lg bg-white text-[#1A56DB] text-xs font-bold hover:bg-gray-50 transition-all whitespace-nowrap shadow-sm">
              Register Now →
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ── WhatsApp Floating Button ── */
export const WhatsAppButton = () => (
  <a href="https://wa.me/918977760443" target="_blank" rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-xl hover:scale-105 transition-transform animate-bounce-gentle"
    style={{ boxShadow: "0 6px 28px rgba(37,211,102,0.5)" }}
    aria-label="Chat on WhatsApp">
    <MessageCircle className="w-6 h-6" />
    <span className="hidden sm:inline">Chat with us</span>
  </a>
);

/* ── Exit-Intent Popup ── */
export const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Desktop: mouse leaves viewport
    const mouseHandler = (e: MouseEvent) => { if (e.clientY < 5) setShow(true); };
    document.addEventListener("mouseleave", mouseHandler);

    // Mobile: 60 second timer
    const timer = setTimeout(() => {
      if (!dismissed) setShow(true);
    }, 60000);

    return () => {
      document.removeEventListener("mouseleave", mouseHandler);
      clearTimeout(timer);
    };
  }, [dismissed]);

  const close = () => { setShow(false); setDismissed(true); };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={close}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-md mx-4 relative shadow-2xl border border-gray-200"
          >
            <button onClick={close} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Wait — Don't Miss IC-ETSS 2026!</h3>
            <p className="text-sm text-gray-500 mb-6">Register your interest in 30 seconds and we'll send you full details.</p>
            <form onSubmit={(e) => { e.preventDefault(); close(); document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" }); }}
              className="space-y-3">
              <input placeholder="Your Name" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
              <input type="email" placeholder="Your Email" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
              <button type="submit" className="w-full py-3 rounded-xl bg-[#1A56DB] text-white font-semibold text-sm hover:bg-[#1646B8] transition-all shadow-lg">
                Notify Me
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/* ── 15-Second Slide-In Notification ── */
export const SlideInNotification = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const showTimer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(showTimer);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;
    const hideTimer = setTimeout(() => { setVisible(false); setDismissed(true); }, 8000);
    return () => clearTimeout(hideTimer);
  }, [visible, dismissed]);

  const close = () => { setVisible(false); setDismissed(true); };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-120%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-20 left-4 z-50 bg-white rounded-xl p-4 max-w-xs flex items-start gap-3 shadow-xl border border-gray-200"
        >
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900 mb-1">🔔 Early registrations are now open!</p>
            <a href="#registration" onClick={close} className="text-xs text-[#1A56DB] font-medium hover:underline">
              Secure your spot → Register Now
            </a>
          </div>
          <button onClick={close} className="text-gray-400 hover:text-gray-700 flex-shrink-0">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ── Sticky Bottom Mobile Bar ── */
export const StickyMobileBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
    <div className="px-4 py-3">
      <a href="#registration" className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#1A56DB] to-[#2563EB] text-white text-sm font-bold text-center hover:from-[#1648B5] hover:to-[#1A56DB] transition-all shadow-lg">
        Register Now →
      </a>
    </div>
  </div>
);
