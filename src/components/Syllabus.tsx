import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    id: "01",
    stage: "Foundation",
    title: "Computer Basics & RSCIT",
    desc: "Start your journey with government-certified RSCIT — digital literacy, MS Office, internet, and e-governance tools.",
    x: "20%", y: "100px"
  },
  {
    id: "02",
    stage: "Skills",
    title: "Tally & Accounting",
    desc: "Master Tally ERP with practical accounting — GST, invoicing, ledgers, and financial reporting for business readiness.",
    x: "70%", y: "400px"
  },
  {
    id: "03",
    stage: "Digital",
    title: "Graphic Design & Marketing",
    desc: "Learn Photoshop, CorelDRAW, DTP, and digital marketing strategies including SEO, social media, and paid campaigns.",
    x: "30%", y: "700px"
  },
  {
    id: "04",
    stage: "Advanced",
    title: "Web Dev & Python",
    desc: "Build dynamic websites with PHP and React. Write automation scripts with Basic and Advanced Python programming.",
    x: "75%", y: "1000px"
  },
  {
    id: "05",
    stage: "Career Ready",
    title: "Distance Degrees & Typing",
    desc: "Enroll in UGC-recognized online degrees (BA, BCom, MBA, BCA…) and master Hindi/English typing for government jobs.",
    x: "45%", y: "1300px"
  },
];

export const Syllabus = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section ref={containerRef} className="py-60 bg-[#050505] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-20 left-10 opacity-[0.02] select-none">
        <h2 className="text-[20vw] leading-none font-black italic">GROW</h2>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mb-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.8em] text-white/30"
          >
            Your Learning Journey
          </motion.span>
          <h2 className="text-6xl md:text-9xl italic mt-4">The Path to<br/>Career Success</h2>
        </div>

        <div className="relative h-[1500px] w-full">
          {/* The Organic SVG Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 1500"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 200 100 C 400 100, 600 250, 700 400 S 400 550, 300 700 S 700 850, 800 1000 S 600 1150, 500 1300"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.path
              d="M 200 100 C 400 100, 600 250, 700 400 S 400 550, 300 700 S 700 850, 800 1000 S 600 1150, 500 1300"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <motion.circle
              cx="500"
              r="6"
              fill="white"
              style={{ opacity: glowOpacity }}
            />
          </svg>

          {/* Milestones Content */}
          {milestones.map((m, idx) => (
            <motion.div
              key={m.id}
              className="absolute"
              style={{
                left: m.x,
                top: m.y,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative group">
                <motion.div
                  className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-pointer"
                  whileHover={{ scale: 1.5 }}
                />

                <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? 'left-12' : 'right-12'} w-[250px] md:w-[320px] pointer-events-none`}>
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={`p-6 border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}
                  >
                    <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-white text-black">{m.id}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{m.stage}</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-3">{m.title}</h4>
                    <p className="text-[11px] md:text-xs text-white/60 leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
};
