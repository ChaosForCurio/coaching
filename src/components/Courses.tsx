import { motion } from 'framer-motion';
import { Monitor, BookOpen, PenTool, Globe } from 'lucide-react';

const courses = [
  {
    title: 'RSCIT',
    category: 'Government Certified',
    icon: Monitor,
    image: '/images/ai-course.jpg',
    description: 'Rajasthan State Certificate course in Information Technology. Includes 2 Digital Courses FREE on admission.',
    badge: '2 Digital Courses FREE'
  },
  {
    title: 'Tally with Accounting',
    category: 'Finance & Accounts',
    icon: BookOpen,
    image: '/images/hero-bg.jpg',
    description: 'Complete Tally ERP course with practical accounting principles for business and commerce.'
  },
  {
    title: 'Typing',
    category: 'Hindi & English',
    icon: PenTool,
    image: '/images/web-dev.jpg',
    description: 'Professional Hindi and English typing courses for government exam and job readiness.'
  },
  {
    title: 'Web Development',
    category: 'Programming',
    icon: Globe,
    image: '/images/ai-course.jpg',
    description: 'Web Development using PHP and React. Also includes Python Programming (Basic & Advanced).'
  }
];

export const Courses = () => {
  return (
    <section id="courses" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl">Programs</h2>
            <p className="text-white/40 mt-4 max-w-md uppercase tracking-wider text-xs">
              Admission Open — Courses designed for career growth and government exams.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-8xl font-black text-white/5">01</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="group relative p-8 bg-[#0a0a0a] transition-all duration-500 overflow-hidden h-[450px] flex flex-col justify-between"
            >
              <div className="relative z-10">
                <course.icon className="w-8 h-8 mb-6 text-white/40 group-hover:text-white transition-colors" />
                <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/80">{course.category}</span>
                <h3 className="text-2xl mt-2 group-hover:translate-x-2 transition-transform duration-500">{course.title}</h3>
                {course.badge && (
                  <span className="inline-block mt-3 text-[9px] uppercase tracking-widest bg-white text-black px-2 py-1 font-bold">
                    {course.badge}
                  </span>
                )}
              </div>

              <div className="relative z-10">
                <p className="text-sm text-white/50 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {course.description}
                </p>
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-white/20 pb-2 hover:border-white transition-all">
                  View Syllabus
                </button>
              </div>

              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={course.image} alt="" className="w-full h-full object-cover grayscale" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
