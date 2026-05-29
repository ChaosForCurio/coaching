import { motion } from 'framer-motion';
import { BookOpen, Award, Users } from 'lucide-react';

const faculty = [
  {
    name: 'Er. Rajesh Sharma',
    role: 'Director & Lead Instructor',
    specialties: ['RSCIT', 'Web Development', 'Python Programming'],
    experience: '12+ Years',
    icon: Award,
    initials: 'RS',
  },
  {
    name: 'Ms. Priya Verma',
    role: 'Digital Marketing Expert',
    specialties: ['SEO & SEM', 'Social Media', 'Advanced Digital Marketing'],
    experience: '8+ Years',
    icon: Users,
    initials: 'PV',
  },
  {
    name: 'Mr. Sunil Gupta',
    role: 'Accounts & Tally Faculty',
    specialties: ['Tally ERP', 'GST Accounting', 'MS Excel'],
    experience: '10+ Years',
    icon: BookOpen,
    initials: 'SG',
  },
  {
    name: 'Ms. Kavita Meena',
    role: 'Graphic Design Faculty',
    specialties: ['Photoshop', 'CorelDRAW', 'DTP & Publishing'],
    experience: '7+ Years',
    icon: Award,
    initials: 'KM',
  },
];

export const FacultyTeam = () => {
  return (
    <section id="faculty" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-white/30"
            >
              Expert Mentors
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl italic mt-3"
            >
              Our Faculty
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm text-white/40 mt-8 md:mt-0 font-light leading-relaxed text-sm"
          >
            Industry practitioners with years of hands-on experience — guiding every student toward a confident career.
          </motion.p>
        </div>

        {/* Interactive Spaces Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Card 1: Computer Lab / Classroom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-[4/3] overflow-hidden group border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
              src="/images/faculty-classroom.jpg"
              alt="Bhavya Career Institute Classroom"
              className="w-full h-full object-cover object-[center_35%] opacity-80 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 block mb-1">Modern Computer Lab</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">Interactive Classroom</h3>
            </div>
          </motion.div>

          {/* Card 2: Silent Library */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden group border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
              src="/images/library-classroom.jpg"
              alt="Bhavya Silent Library Room"
              className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 block mb-1">Silent Self-Study Zone</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">Bhavya Library Room</h3>
            </div>
          </motion.div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10">
          {faculty.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative bg-[#0a0a0a] p-8 flex flex-col justify-between min-h-[360px] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Background index number */}
              <span className="absolute top-6 right-6 text-[5rem] font-black text-white/[0.03] leading-none select-none group-hover:text-white/[0.06] transition-all duration-500">
                0{idx + 1}
              </span>

              {/* Avatar circle with initials */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:border-white/30 transition-all duration-500">
                  <span className="text-xl font-bold tracking-widest text-white/60 group-hover:text-white transition-colors">
                    {member.initials}
                  </span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.35em] text-white/30 group-hover:text-white/60 transition-colors">
                  {member.role}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-1 group-hover:translate-x-1 transition-transform duration-500">
                  {member.name}
                </h3>
                <span className="text-[10px] text-white/25 uppercase tracking-widest">
                  {member.experience} Experience
                </span>
              </div>

              {/* Specialties */}
              <div className="relative z-10 mt-8 space-y-2">
                {member.specialties.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/70 transition-colors" />
                    <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">{s}</span>
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
