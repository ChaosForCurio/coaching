import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const skewVelocity = useSpring(useTransform(scrollVelocity, [-1, 1], [-20, 20]), {
    stiffness: 1000,
    damping: 50
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center">

      {/* Visual Background Image with Gradients & Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-100"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Gradients to transition edges cleanly and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
              'radial-gradient(circle at 60% 40%, rgba(124, 120, 120, 0.08) 0%, transparent 60%)',
              'radial-gradient(circle at 40% 60%, rgba(255,255,255,0.08) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-6"
        >
          Admission Open — Kota, Rajasthan
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[9rem] font-black italic leading-none tracking-tighter text-white"
          >
            BHAVYA
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[9rem] font-black leading-none tracking-tighter text-white/20"
          >
            CAREER INSTITUTE
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 max-w-xl text-white/50 text-sm font-light leading-relaxed"
        >
          RSCIT · Tally · Typing · Digital Marketing · Web Development · Python · Graphic Design · Distance Education
        </motion.p>

        {/* CTA Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <span className="px-5 py-2 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-white/60">
            RSCIT Admission
          </span>
          <span className="px-5 py-2 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold">
            2 Digital Courses FREE
          </span>
          <span className="px-5 py-2 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-white/60">
            Library Available
          </span>
        </motion.div>
      </div>

    </section>
  );
};
