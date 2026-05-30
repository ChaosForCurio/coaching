import { motion } from 'framer-motion';
import { Magnetic } from './Magnetic';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-end items-center"
    >

      <div className="flex items-center gap-3">
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Enroll Now
        </motion.span>

        <Magnetic>
          <a
            href="https://wa.me/919694932391"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 ease-out"
          >
            {/* Official WhatsApp SVG logo */}
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.987 11.48.987 6.045.987 1.62 5.357 1.616 10.787c-.001 1.748.47 3.447 1.36 4.966l-1.001 3.655 3.748-.973l.334.218zM18.82 15.111c-.37-.185-2.18-.897-2.52-1.021-.34-.124-.588-.185-.836.186-.248.37-.958 1.206-1.17 1.454-.216.247-.433.279-.803.093-.37-.185-1.56-.57-2.971-1.829-1.09-.973-1.826-2.176-2.04-2.547-.217-.37-.023-.57.162-.754.166-.165.37-.432.556-.65.186-.216.248-.37.372-.617.124-.247.062-.463-.03-.649-.093-.185-.837-2.006-1.146-2.748-.3-.721-.606-.624-.836-.636-.216-.011-.463-.014-.71-.014-.248 0-.65.093-.99.463-.34.37-1.3 1.266-1.3 3.087 0 1.82 1.33 3.582 1.516 3.829.186.247 2.612 3.987 6.326 5.586.883.38 1.572.607 2.11.779.887.282 1.696.242 2.335.146.711-.107 2.18-.89 2.49-1.752.31-.862.31-1.603.217-1.752-.093-.149-.34-.241-.71-.426z" />
            </svg>
          </a>
        </Magnetic>
      </div>
    </motion.nav>
  );
};
