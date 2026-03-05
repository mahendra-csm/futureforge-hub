import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase } from "lucide-react";

/* ── Image imports ── */
import imgSantosh from "@/assets/images/Dr.-Santosh-Mishra.webp";
import imgDavid from "@/assets/images/1-11.webp";
import imgNilesh from "@/assets/images/1-10.webp";
import imgSaiSuman from "@/assets/images/2-10.webp";
import imgMaria from "@/assets/images/3-10.webp";
import imgManjunath from "@/assets/images/5-11.webp";
import imgHeba from "@/assets/images/6-11.webp";
import imgJuLee from "@/assets/images/Dr.-Ju-Lee-Kim.webp";

interface Member {
  name: string;
  role: string;
  country: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Dr. Santosh Kumar Mishra",
    role: "Independent Researcher (Scholar), Population Education Resource Centre, Department of Lifelong Learning & Extension — S.N.D.T. Women's University",
    country: "India",
    image: imgSantosh,
  },
  {
    name: "Dr. David Wortley",
    role: "Non-Executive Director, WLMES; Vice President, ISDM; Director, IORMA Futures Health & Wellbeing Technology Centre; CEO & Founder, 360in360",
    country: "United Kingdom",
    image: imgDavid,
  },
  {
    name: "Dr. Nilesh Charankar",
    role: "Lead Full-Stack Developer / Researcher / Author — Technology & Software Engineering",
    country: "India",
    image: imgNilesh,
  },
  {
    name: "Dr. Sai Suman Singamsetty",
    role: "Data Management Specialist / Keynote Speaker / Independent Researcher — Electronics & Communication Engineering, Centurion University of Technology and Management",
    country: "India",
    image: imgSaiSuman,
  },
  {
    name: "Dr. Maria Cecilia Colautti",
    role: "Secretary, ICOH Scientific Committee on Nanomaterial Workers' Health, Occupational Health / Nanotechnology — Universidad Nacional de la Patagonia San Juan Bosco",
    country: "Argentina",
    image: imgMaria,
  },
  {
    name: "Dr. Manjunath G N",
    role: "Professor & Head of Department, Pharmacology — Sri Siddhartha Medical College, Sri Siddhartha Academy of Higher Education",
    country: "India",
    image: imgManjunath,
  },
  {
    name: "Prof. Heba Afify",
    role: "Professor / Associate Professor, Biomedical Engineering — Cairo University (PhD); Shorouk Academy / MTI University",
    country: "Egypt",
    image: imgHeba,
  },
  {
    name: "Dr. Ju Lee Kim",
    role: "Senior Researcher, R&D Center, RedGene — Westfälische Wilhelms-Universität Münster",
    country: "Republic of Korea",
    image: imgJuLee,
  },
];

/* ── Member Card ── */
const MemberCard = ({ member, index }: { member: Member; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: 0.04 * (index % 6) }}
    className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300"
  >
    {/* Image */}
    <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Country badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[10px] font-semibold text-gray-700">
        <MapPin className="w-3 h-3 text-[#1A56DB]" />
        {member.country}
      </div>
    </div>

    {/* Info */}
    <div className="p-4 sm:p-5">
      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 leading-snug">{member.name}</h3>
      <div className="flex items-start gap-2">
        <Briefcase className="w-3.5 h-3.5 text-[#1A56DB] flex-shrink-0 mt-0.5" />
        <p className="text-xs text-gray-500 leading-relaxed">{member.role}</p>
      </div>
    </div>

    {/* Bottom accent bar on hover */}
    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#1A56DB] to-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  </motion.div>
);

/* ── Section ── */
const ScientificCommitteeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1A56DB] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1A56DB]">Expert Panel</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Scientific Committee <span className="text-gradient-blue">Members</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Distinguished professors, researchers, and industry leaders from across the globe guiding the scientific direction of ICHMP 2026.
          </p>
        </motion.div>

        {/* Member grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, i) => (
            <MemberCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* Summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {[
            { value: "8", label: "Committee Members" },
            { value: "6", label: "Countries Represented" },
            { value: "10+", label: "Healthcare Disciplines" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-[#1A56DB]">{s.value}</div>
              <div className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wider font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScientificCommitteeSection;
