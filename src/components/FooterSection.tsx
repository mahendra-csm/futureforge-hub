import { MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #1A56DB, transparent)" }} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="IC-ETSS Logo" className="h-10 w-auto" />
              <div>
                <span className="text-2xl font-bold text-gray-900">One<span className="text-[#1A56DB]">Grasp</span></span>
                <p className="text-xs text-gray-400 mt-0.5 italic">Empowering Global Academic Excellence</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">
              International Conference on Engineering, Technology & Sustainable Solutions
            </p>
            <p className="text-sm text-gray-500">📅 11th & 12th March 2026 · Online</p>
            <p className="text-xs text-gray-400 mt-6">© 2026 OneGrasp Scientific Conferences. All Rights Reserved.</p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-3">Contact</h4>
            <div className="space-y-3 text-sm text-gray-500">
              <a href="tel:+918977760441" className="flex items-center gap-2 text-[#059669] font-semibold hover:text-[#047857] transition-colors">
                <Phone className="w-4 h-4" /> +91 89777 60441 / 42 / 43
              </a>
              <a href="mailto:support@onegrasp.com" className="flex items-center gap-2 text-[#1A56DB] font-semibold hover:text-[#1648B5] transition-colors">
                <Mail className="w-4 h-4" /> support@onegrasp.com
              </a>
              <a href="https://wa.me/918977760441" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat →
              </a>
            </div>

            <h4 className="font-semibold text-gray-900 text-sm mt-6 mb-2">Links</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <a href="#registration" className="flex items-center gap-2 hover:text-[#1A56DB] transition-colors">
                <ExternalLink className="w-4 h-4" /> Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation bar */}
      <div className="py-3 px-4 text-center bg-gray-100 border-t border-gray-200">
        <p className="text-[10px] md:text-xs text-gray-400">
          Accredited by: Crossref · DOI 10.65838 · CPD · Journal Citation Index · MetaSpectra · RMetaHub · IntelliMindEd · Google Scholar
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
