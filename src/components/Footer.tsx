export const Footer = () => {
  return (
    <footer className="relative pt-40 pb-12 px-8 overflow-hidden">

      {/* ── Map Background (no pointer events) ─────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      >
        <iframe
          title="Bhavya Career Institute Location"
          src="https://maps.google.com/maps?q=Mahaveer+Nagar+Extension+Kota+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'grayscale(80%) brightness(60%) contrast(110%)',
            pointerEvents: 'none',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
          aria-hidden="true"
        />
        {/* Subtle dark overlay — keep map visible but text readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ── Footer Content ──────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-white/10 pb-20">
          <div>
            <h2 className="text-7xl md:text-[10rem] leading-none mb-10 italic">ENROLL<br/>NOW</h2>
            <a
              href="https://wa.me/919694932391"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-2xl uppercase tracking-tighter hover:gap-8 transition-all"
            >
              Chat on WhatsApp
              <span className="w-12 h-px bg-white group-hover:w-20 transition-all" />
            </a>
          </div>

          <div className="mt-20 md:mt-0 text-right">
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] mb-2">Address</p>
            <p className="text-base leading-relaxed text-white/80">
              3-N-25, Mahaveer Nagar Extn.<br />
              Near Ganesh Ji Mandir<br />
              Kota, Rajasthan
            </p>

            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] mt-8 mb-2">Contact</p>
            <a href="tel:+919694932391" className="block text-white/80 hover:text-white transition-colors text-sm">
              +91 96949 32391
            </a>
            <a href="tel:+919694025249" className="block text-white/80 hover:text-white transition-colors text-sm mt-1">
              +91 9694025249
            </a>

            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] mt-8 mb-2">Services</p>
            <div className="flex gap-6 justify-end uppercase text-xs tracking-widest text-white/60">
              <span>Library Available</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-white/20">
          <p>© 2024 BHAVYA CAREER INSTITUTE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
