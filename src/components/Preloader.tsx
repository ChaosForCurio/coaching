import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden">
        <motion.h2 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="text-white text-5xl md:text-8xl font-black italic tracking-tighter"
        >
          BHAVYA CAREER INSTITUTE
        </motion.h2>
      </div>
      <div className="mt-8 w-64 h-px bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          style={{ originX: 0 }}
        />
      </div>
      <div className="mt-4 text-[10px] uppercase tracking-[0.5em] text-white/40">
        Kota, Rajasthan — {progress}%
      </div>
    </motion.div>
  );
};
