import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase } from "lucide-react";

/* ── Image imports ── */
import imgChaturvedi from "@/assets/images/1-10.webp";
import imgPraneetha from "@/assets/images/2-10.webp";
import imgBright from "@/assets/images/BRIGHT-KESWANI.webp";
import imgSanjay from "@/assets/images/3-10.webp";
import imgVijay from "@/assets/images/4-10.webp";
import imgMaha from "@/assets/images/5-10.webp";
import imgSaiSuman from "@/assets/images/6-10.webp";
import imgMaria from "@/assets/images/7-10.webp";
import imgSrikanth from "@/assets/images/8-10.webp";
import imgSudarshan from "@/assets/images/Dr.-SUDARSHAN-RAO-MECH.webp";
import imgNalanda from "@/assets/images/Nalanda-Roy.webp";
import imgNilesh from "@/assets/images/Untitled-design-5.webp";
import imgHadi from "@/assets/images/Dr.-Hadi-Erfani.webp";
import imgSatish from "@/assets/images/Dr.-S.-Satish.webp";
import imgSubhash from "@/assets/images/Dr.-Subhash.webp";
import imgAhmed from "@/assets/images/Dr.-Ahmed-Shaqr.webp";
import imgBishnu from "@/assets/images/Dr.-Bishnu.webp";
import imgChintan from "@/assets/images/Dr.-Chintan-Patel.webp";

interface Member {
  name: string;
  role: string;
  country: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Prof. D.K. Chaturvedi",
    role: "Dean, Faculty of Engineering — Dayalbagh Educational Institute",
    country: "India",
    image: imgChaturvedi,
  },
  {
    name: "Dr. Praneetha Kotla",
    role: "Associate Principal / Lead Full-Stack Developer — Northern Illinois University",
    country: "USA",
    image: imgPraneetha,
  },
  {
    name: "Dr. Bright Keswani",
    role: "Professor, Computer Science & Engineering — Poornima University, Jaipur",
    country: "India",
    image: imgBright,
  },
  {
    name: "Dr. Sanjay G. Patel",
    role: "Professor, Computer Science & Engineering — Nirma University, Ahmedabad",
    country: "India",
    image: imgSanjay,
  },
  {
    name: "Dr. Vijay Anant Athavale",
    role: "Principal / Professor, Computer Science & Engineering — Walchand Institute of Technology",
    country: "India",
    image: imgVijay,
  },
  {
    name: "Dr. Maha Fawzy Anber",
    role: "Head of Sustainability Department / Associate Professor — El Shorouk Academy, Cairo",
    country: "Egypt",
    image: imgMaha,
  },
  {
    name: "Dr. Sai Suman Singamsetty",
    role: "Data Management Specialist / Keynote Speaker — Centurion University of Technology",
    country: "India",
    image: imgSaiSuman,
  },
  {
    name: "Dr. Maria Cecilia Colautti",
    role: "Secretary, ICOH Scientific Committee — Universidad Nacional de la Patagonia San Juan Bosco",
    country: "Argentina",
    image: imgMaria,
  },
  {
    name: "Dr. Srikanth V",
    role: "Professor / Program Coordinator, MCA Department — Acharya Bangalore B School",
    country: "India",
    image: imgSrikanth,
  },
  {
    name: "Dr. Sudarshan Rao K",
    role: "Professor, Mechanical Engineering — SMVITM Bantakal",
    country: "India",
    image: imgSudarshan,
  },
  {
    name: "Dr. Nalanda Roy",
    role: "Full Professor, Political Science & International Studies — Georgia Southern University",
    country: "USA",
    image: imgNalanda,
  },
  {
    name: "Dr. Nilesh Charankar",
    role: "Lead Full-Stack Developer / Researcher / Author — Technology & Software Engineering",
    country: "USA",
    image: imgNilesh,
  },
  {
    name: "Dr. Hadi Erfani",
    role: "Research Scholar, Chemical Engineering — Islamic Azad University (Central Tehran Branch)",
    country: "Iran",
    image: imgHadi,
  },
  {
    name: "Dr. S. Satish",
    role: "Associate Professor, School of Aeronautical Sciences — Hindustan Institute of Technology and Science",
    country: "India",
    image: imgSatish,
  },
  {
    name: "Dr. Subhash Ghimre",
    role: "Associate Professor & Head of Department, Geomatics Engineering — Kathmandu University",
    country: "Nepal",
    image: imgSubhash,
  },
  {
    name: "Dr. Ahmed M. Saqr",
    role: "Visiting Lecturer & Researcher, Engineering & Applied Sciences — TH Köln",
    country: "Germany",
    image: imgAhmed,
  },
  {
    name: "Dr. Bishnu Pada Bose",
    role: "Professor, Partner & Advisor, Civil & Environmental Engineering — Invosystems",
    country: "Singapore",
    image: imgBishnu,
  },
  {
    name: "Dr. Chintan Patel",
    role: "Assistant Professor, Electrical Engineering — CVM University",
    country: "India",
    image: imgChintan,
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
            Distinguished professors, researchers, and industry leaders from across the globe guiding the scientific direction of IC-ETSS 2026.
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
            { value: "18", label: "Committee Members" },
            { value: "8+", label: "Countries Represented" },
            { value: "15+", label: "Engineering Disciplines" },
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
