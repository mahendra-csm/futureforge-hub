import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, ExternalLink, ScrollText, Globe, Send, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahrain","Bangladesh","Belarus","Belgium","Bhutan","Bolivia","Bosnia","Botswana","Brazil","Brunei","Bulgaria",
  "Cambodia","Cameroon","Canada","Chile","China","Colombia","Congo","Costa Rica","Croatia","Cuba","Cyprus",
  "Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia",
  "Finland","France","Georgia","Germany","Ghana","Greece","Guatemala","Honduras","Hong Kong","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan",
  "Kazakhstan","Kenya","Kuwait","Laos","Latvia","Lebanon","Libya","Lithuania","Luxembourg","Madagascar",
  "Malaysia","Maldives","Mali","Malta","Mexico","Moldova","Mongolia","Morocco","Mozambique","Myanmar",
  "Nepal","Netherlands","New Zealand","Nicaragua","Nigeria","North Korea","Norway","Oman",
  "Pakistan","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Qatar",
  "Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Singapore","Slovakia","Slovenia",
  "Somalia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland","Syria",
  "Taiwan","Tanzania","Thailand","Tunisia","Turkey","UAE","Uganda","UK","Ukraine","Uruguay","USA",
  "Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const roles = ["Student","Researcher","Academic Faculty","Industry Professional","Government / Policy Maker","Entrepreneur / Innovator","Other"];
const referralSources = ["Google Search","LinkedIn","Email","Colleague","Social Media","Other"];

const RegistrationForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    setFormData({ fullName: data.get("fullName") as string, email: data.get("email") as string });
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputClass = "w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm font-medium transition-all duration-200 focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-gray-400";
  const selectClass = "w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-700 text-sm font-medium transition-all duration-200 appearance-none focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-100 outline-none";

  if (submitted) {
    return (
      <section id="registration" className="section-padding gradient-section-alt relative" ref={ref}>
        <div className="relative z-10 max-w-lg mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-10 border border-gray-100 shadow-lg">
            <div className="w-16 h-16 rounded-full border-2 border-[#059669] flex items-center justify-center mx-auto mb-5">
              <svg width="32" height="32" viewBox="0 0 40 40">
                <path d="M10 20 L17 27 L30 13" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  style={{ strokeDasharray: 100, animation: "drawCheck 0.8s ease-out forwards" }} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Thank You, {formData.fullName?.split(" ")[0] || "there"}!</h3>
            <p className="text-gray-500 mb-2 text-sm">You're officially on the list for <span className="text-[#1A56DB] font-semibold">IC-ETSS 2026</span>.</p>
            <p className="text-gray-500 mb-6 text-sm">We'll reach out at <span className="text-gray-900">{formData.email}</span> within 24 hours.</p>
            <div className="space-y-2.5">
              <a href="https://wa.me/918977760443" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1FB855] transition-all">
                <MessageCircle className="w-4 h-4" /> Join WhatsApp Community
              </a>
              <a href="https://onegrasp.com/conference-events/international-conference-on-engineering-technology-sustainable-solutions/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all">
                <ExternalLink className="w-4 h-4" /> Visit Conference Page
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="section-padding relative overflow-hidden bg-gradient-to-br from-[#F0F4FF] via-white to-[#F5F7FA] scroll-mt-20" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">

          {/* Left sidebar — info panel (desktop only) */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
            className="hidden lg:block lg:sticky lg:top-24">
            {/* Company logo */}
            <div className="mb-5">
              <img src={logo} alt="OneGrasp" className="h-10 sm:h-12 object-contain" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 text-gray-900 leading-tight">
              Secure Your Spot at <span className="text-gradient-blue">IC-ETSS 2026</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Fill in your details and our team will reach out within 24 hours with full conference details.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: ScrollText, text: "Accredited Certificates", desc: "CPD + Presentation certificates" },
                { icon: Globe, text: "Open to All Countries", desc: "50+ nations participating" },
                { icon: ShieldCheck, text: "Verified & Indexed", desc: "Crossref DOI · 10+ directories" },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100/50">
                  <div className="w-8 h-8 rounded-lg bg-[#1A56DB] flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{b.text}</p>
                    <p className="text-[11px] text-gray-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-1">
              <a href="mailto:support@onegrasp.com" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1A56DB] text-xs font-semibold hover:bg-blue-100 transition-colors">
                📧 support@onegrasp.com
              </a>
              <a href="tel:+918977760443" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-semibold hover:bg-emerald-100 transition-colors">
                📞 +91 89777 60443
              </a>
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.form
            id="registration-form"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-gray-200 scroll-mt-16"
          >
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Full Name *</label>
                  <input name="fullName" required className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Email Address *</label>
                  <input name="email" type="email" required className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Phone Number *</label>
                  <input name="phone" type="tel" required className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Profession / Designation</label>
                  <input name="profession" className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Country *</label>
                  <select name="country" required className={selectClass} defaultValue="">
                    <option value="" disabled>Select country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Current Role</label>
                  <select name="role" className={selectClass} defaultValue="">
                    <option value="" disabled>Select role</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1 block">How did you hear about us?</label>
                <select name="referral" className={selectClass} defaultValue="">
                  <option value="" disabled>Select source</option>
                  {referralSources.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1 block">Questions or Comments</label>
                <textarea name="comments" rows={2} className={inputClass} />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-gray-500 leading-relaxed">
                <input type="checkbox" required className="mt-0.5 accent-[#1A56DB]" />
                <span>I agree to be contacted by OneGrasp regarding this event and future conferences.</span>
              </label>

              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-base bg-gradient-to-r from-[#1A56DB] to-[#2563EB] text-white hover:from-[#1648B5] hover:to-[#1A56DB] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <><Send className="w-4 h-4" /> Submit & Reserve My Spot</>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
