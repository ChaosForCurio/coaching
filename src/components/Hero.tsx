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
    <section ref={containerRef} className="relative h-[135vh] w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center select-none">

      {/* Visual Background Image with Gradients & Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 scale-105"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Subtle edge vignette only — no heavy overlays so image shows clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/70" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        
        {/* Soft, premium dynamic light orbs */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 60%, rgba(191,162,122,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 md:px-6 max-w-7xl">
        {/* All hero text, badges, and titles removed as requested */}
      </div>

    </section>
  );
};
