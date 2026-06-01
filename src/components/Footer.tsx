import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.0005,
  });

  /* Big text rises from below */
  const bigTextY    = useTransform(smoothProgress, [0, 1], ['30%', '-8%']);
  const bigTextOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  /* Content block slides up */
  const contentY   = useTransform(smoothProgress, [0.2, 0.8], [60, 0]);
  const contentOp  = useTransform(smoothProgress, [0.2, 0.6], [0, 1]);

  /* Map overlay opacity */
  const mapOp      = useTransform(smoothProgress, [0, 0.5], [0, 0.6]);

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#060606]" style={{ minHeight: '90vh' }}>

      {/* ── Google Map background */}
      <motion.div
        style={{ opacity: mapOp, pointerEvents: 'none' }}
        className="absolute inset-0 z-0"
      >
        <iframe
          title="Bhavya Career Institute Location"
          src="https://maps.google.com/maps?q=Mahaveer+Nagar+Extension+Kota+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'grayscale(100%) brightness(30%) contrast(120%)',
            pointerEvents: 'none',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-transparent" />
      </motion.div>

      {/* ── BIG RISING TEXT ── */}
      <motion.div
        style={{ y: bigTextY, opacity: bigTextOpacity }}
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none z-10 overflow-hidden"
      >
        <h2
          className="font-black uppercase leading-none tracking-tighter whitespace-nowrap"
          style={{
            fontSize: 'clamp(80px, 18vw, 260px)',
            WebkitTextStroke: '1px rgba(255,255,255,0.08)',
            color: 'transparent',
            letterSpacing: '-0.04em',
          }}
        >
          BHAVYA
        </h2>
      </motion.div>

      {/* ── Footer Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-20 container mx-auto px-8 pt-28 pb-16"
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-white/10 pb-16 mb-12">

          {/* Left: Institute identity */}
          <div className="max-w-sm">
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 block mb-4">
              Est. 2010
            </span>
            <h3 className="text-4xl md:text-5xl leading-tight mb-6">
              Bhavya<br />Career Institute
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Empowering students in Kota with government-certified, job-ready digital skills since a decade.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919694932391"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.987 11.48.987 6.045.987 1.62 5.357 1.616 10.787c-.001 1.748.47 3.447 1.36 4.966l-1.001 3.655 3.748-.973.334.218zM18.82 15.111c-.37-.185-2.18-.897-2.52-1.021-.34-.124-.588-.185-.836.186-.248.37-.958 1.206-1.17 1.454-.216.247-.433.279-.803.093-.37-.185-1.56-.57-2.971-1.829-1.09-.973-1.826-2.176-2.04-2.547-.217-.37-.023-.57.162-.754.166-.165.37-.432.556-.65.186-.216.248-.37.372-.617.124-.247.062-.463-.03-.649-.093-.185-.837-2.006-1.146-2.748-.3-.721-.606-.624-.836-.636-.216-.011-.463-.014-.71-.014-.248 0-.65.093-.99.463-.34.37-1.3 1.266-1.3 3.087 0 1.82 1.33 3.582 1.516 3.829.186.247 2.612 3.987 6.326 5.586.883.38 1.572.607 2.11.779.887.282 1.696.242 2.335.146.711-.107 2.18-.89 2.49-1.752.31-.862.31-1.603.217-1.752-.093-.149-.34-.241-.71-.426z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.3em]">Enroll via WhatsApp</span>
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Contact details */}
          <div className="text-right">
            <div className="mb-10">
              <p className="text-white/30 uppercase tracking-[0.35em] text-[9px] mb-3">Address</p>
              <p className="text-white/70 leading-relaxed text-sm">
                3-N-25, Mahaveer Nagar Extn.<br />
                Near Ganesh Ji Mandir<br />
                Kota, Rajasthan
              </p>
            </div>

            <div className="mb-10">
              <p className="text-white/30 uppercase tracking-[0.35em] text-[9px] mb-3">Phone</p>
              <a href="tel:+919694932391" className="block text-white/70 hover:text-white transition-colors text-sm">
                +91 96949 32391
              </a>
              <a href="tel:+919694025249" className="block text-white/70 hover:text-white transition-colors text-sm mt-1">
                +91 96940 25249
              </a>
            </div>

            <div>
              <p className="text-white/30 uppercase tracking-[0.35em] text-[9px] mb-3">Facilities</p>
              <span className="text-white/50 text-xs uppercase tracking-widest">Library Available</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            © 2024 Bhavya Career Institute. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
