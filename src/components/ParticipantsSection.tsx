import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, FlaskConical, Lightbulb, Building, GraduationCap } from "lucide-react";

const participants = [
  { icon: Wrench, title: "Engineers & Technologists", desc: "Gain insights into sustainable design, smart systems, renewable technologies, and climate-resilient engineering." },
  { icon: FlaskConical, title: "Researchers & Academics", desc: "Present latest findings, obtain DOI, enhance research visibility, collaborate globally." },
  { icon: Lightbulb, title: "Industry Leaders & Innovators", desc: "Showcase products, digital solutions, ESG initiatives, and sustainable transformation models." },
  { icon: Building, title: "Policy Makers & Government Officials", desc: "Understand implementation frameworks supporting sustainable development goals." },
  { icon: GraduationCap, title: "Students & Early Career Professionals", desc: "Build academic profile, present research, network internationally." },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section-alt" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-14 text-foreground">
          Who Should <span className="text-gradient-orange">Participate</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-light flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
