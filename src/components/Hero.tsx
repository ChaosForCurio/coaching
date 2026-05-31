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
    <section
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center select-none"
      style={{
        /* svh (small viewport height) prevents the iOS address-bar jump;
           falls back to vh on browsers that don't support it */
        minHeight: 'clamp(560px, 100svh, 100svh)',
      }}
    >

      {/* Visual Background Image with Gradients & Grid Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image — responsive position shifts focus on portrait/mobile */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: 'cover',
            /* On mobile/portrait, anchor to top-center so the subject is visible;
               on wider screens keep centered. Override via media queries below. */
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            /* Gentle scale for depth — use will-change so GPU handles compositing */
            transform: 'scale(1.04)',
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        />

        {/* Top vignette — slightly stronger on mobile where the crop is tighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/60" />

        {/* Bottom fade — shorter on mobile, taller on desktop */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        {/* Left & right edge vignettes for wide screens */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent hidden sm:block" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#0a0a0a]/30 to-transparent hidden sm:block" />

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
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
        style={{ minHeight: 'inherit' }}>
        {/* All hero text, badges, and titles removed as requested */}
      </div>

    </section>
  );
};
