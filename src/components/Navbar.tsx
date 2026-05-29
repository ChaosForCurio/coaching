import { motion } from 'framer-motion';
import { Magnetic } from './Magnetic';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex items-baseline gap-2">
        <span className="text-sm uppercase tracking-[0.2em] font-semibold">Bhavya</span>
        <span className="text-[10px] uppercase tracking-[0.15em] text-white/50">Career Institute</span>
      </div>

      <Magnetic>
        <button className="px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6"><path d="M19.11 13.89c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.09-1.28-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.12-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.58-1.4-.8-1.92-.21-.51-.43-.44-.58-.44-.15 0-.33-.02-.5-.02-.17 0-.46.06-.7.33-.24.26-.93.91-.93 2.22 0 1.31 .96 2.58 1.09 2.76.13.17 1.88 2.88 4.55 4.04.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.53-.62 1.75-1.22.22-.6.22-1.12.15-1.22-.07-.1-.24-.17-.5-.3zM16 2C8.27 2 2 8.27 2 16c0 3.13 1.02 6.01 2.75 8.4L2 30l5.79-2.64c2.2 1.2 4.71 1.89 7.42 1.89 7.73 0 14-6.27 14-14S23.73 2 16 2z"/></svg>
        </button>
      </Magnetic>
    </motion.nav>
  );
};
