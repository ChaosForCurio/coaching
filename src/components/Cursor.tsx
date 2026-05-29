import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdCounter = useRef(0);

  // High-performance smooth springs for cursor movement
  const cursorX = useSpring(0, { stiffness: 900, damping: 38 });
  const cursorY = useSpring(0, { stiffness: 900, damping: 38 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add a trail coordinate on movement
      setTrail((prev) => {
        const newPoint = { x: e.clientX, y: e.clientY, id: trailIdCounter.current++ };
        const updated = [...prev, newPoint];
        // Keep a slightly longer trail (10 items) for a richer golden ink flow
        if (updated.length > 10) {
          updated.shift();
        }
        return updated;
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], .hover-target, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Golden Glowing Ink Trail */}
      <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
        {trail.map((point, index) => {
          const ratio = (index + 1) / trail.length;
          const opacity = ratio * 0.55;
          const scale = ratio * (isClicking ? 7 : 4); // Thicker line width when "pressing down"

          return (
            <motion.div
              key={point.id}
              className="absolute w-[2px] h-[2px] rounded-full pointer-events-none"
              style={{
                left: point.x,
                top: point.y,
                opacity,
                scale,
                background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                boxShadow: isClicking 
                  ? '0 0 10px 2px rgba(245, 158, 11, 0.9), 0 0 4px 1px rgba(251, 191, 36, 0.4)' 
                  : '0 0 8px 1.5px rgba(245, 158, 11, 0.7)',
              }}
            />
          );
        })}
      </div>

      {/* Luxury Metallic Fountain Pen Nib Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: -1,
          translateY: -1,
        }}
      >
        <motion.div
          animate={{
            rotate: isClicking ? -28 : isHovering ? -18 : -5,
            scale: isHovering ? 1.3 : 1,
            y: isClicking ? 1.5 : 0,
            x: isClicking ? -0.5 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 22 }}
          style={{ transformOrigin: 'top left' }}
        >
          {/* Custom Luxury Fountain Pen SVG */}
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.45)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3))'
            }}
          >
            <defs>
              {/* Gold plating gradient */}
              <linearGradient id="gold-gradient" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>

              {/* Platinum / Silver body gradient */}
              <linearGradient id="silver-gradient" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#e5e5e5" />
                <stop offset="75%" stopColor="#a3a3a3" />
                <stop offset="100%" stopColor="#525252" />
              </linearGradient>
            </defs>

            {/* Main Pen Nib Outline - Silver Base */}
            <path
              d="M0 0 L14 4 C14 4 11 10 20 19 C29 28 34 24 34 24 L38 38 L24 34 C24 34 28 29 19 20 C10 11 4 14 4 14 Z"
              fill="url(#silver-gradient)"
            />

            {/* Inner Gold Plating Detailing */}
            <path
              d="M3 3 L12 6 C12 6 9 10 17 18 C25 26 28 23 28 23 L33 33 L23 28 C23 28 26 25 18 17 C10 9 6 12 6 12 Z"
              fill="url(#gold-gradient)"
            />

            {/* Breather Hole (Fountain Pen Core) */}
            <circle
              cx="10"
              cy="10"
              r="1.8"
              fill="#0a0a0a"
              stroke="#fbbf24"
              strokeWidth="0.5"
            />

            {/* Nib Split / Slot Line (Ink Channel) */}
            <line
              x1="0"
              y1="0"
              x2="9.2"
              y2="9.2"
              stroke="#0a0a0a"
              strokeWidth="1.2"
            />

            {/* Dynamic Gold Nib Tip highlight */}
            <path
              d="M0 0 L3 1 L1 3 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};
