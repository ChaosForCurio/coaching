import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useSpring, useMotionValue, animate } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   Awwwards-style cursor:
   • Tiny 6px dot that snaps to position instantly
   • 44px soft ring that lags behind (spring follow)
   • Ring morphs into a pill with contextual label on hover
   • Ring inverts color on light backgrounds
   • Scale burst on click
   • Smooth magnetic pull near buttons handled by Magnetic.tsx
───────────────────────────────────────────────────────────────── */

type CursorState = 'default' | 'hover' | 'link' | 'text' | 'image' | 'drag';

const LABELS: Record<CursorState, string> = {
  default: '',
  hover: 'View',
  link: 'Open',
  text: 'Read',
  image: 'Look',
  drag: 'Drag',
};

export const Cursor = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [state, setState] = useState<CursorState>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isOnLight, setIsOnLight] = useState(false);

  /* Raw mouse position for the dot (instant) */
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  /* Lagging ring springs */
  const ringX = useSpring(0, { stiffness: 140, damping: 18, mass: 0.6 });
  const ringY = useSpring(0, { stiffness: 140, damping: 18, mass: 0.6 });

  /* Ring scale / size spring */
  const ringScale = useSpring(1, { stiffness: 200, damping: 22 });
  const ringWidth  = useSpring(44, { stiffness: 180, damping: 20 });
  const ringHeight = useSpring(44, { stiffness: 180, damping: 20 });

  /* Rotation for drag indicator */
  const ringRotate = useSpring(0, { stiffness: 200, damping: 28 });

  /* Dot scale bursts on click */
  const dotScale = useSpring(1, { stiffness: 600, damping: 20 });

  /* Text opacity inside ring */
  const [labelVisible, setLabelVisible] = useState(false);

  const lastX = useRef(0);
  const rafId = useRef<number | null>(null);

  /* ── Detect background lightness under cursor */
  const detectBackground = useCallback((x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    if (!el) return;
    let current: HTMLElement | null = el;
    while (current) {
      const bg = window.getComputedStyle(current).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const [, r, g, b] = match.map(Number);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setIsOnLight(luminance > 0.55);
          return;
        }
      }
      current = current.parentElement;
    }
    setIsOnLight(false);
  }, []);

  /* ── Determine cursor state from element */
  const detectState = useCallback((target: HTMLElement): CursorState => {
    if (target.closest('[data-cursor="drag"]'))  return 'drag';
    if (target.closest('[data-cursor="image"]')) return 'image';
    if (target.closest('[data-cursor="text"]'))  return 'text';
    if (target.closest('a[href]'))               return 'link';
    if (target.closest('button, [role="button"], input, textarea, select, label')) return 'hover';
    if (target.closest('h1,h2,h3,h4,h5,h6,p'))  return 'text';
    return 'default';
  }, []);

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
      );
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);

        /* Tilt ring based on velocity */
        const dx = e.clientX - lastX.current;
        lastX.current = e.clientX;
        ringRotate.set(Math.min(Math.max(dx * 1.2, -20), 20));

        detectBackground(e.clientX, e.clientY);

        const newState = detectState(e.target as HTMLElement);
        setState(newState);
      });
    };

    const onDown = () => {
      setIsClicking(true);
      animate(dotScale, 0.5, { duration: 0.08 });
    };
    const onUp = () => {
      setIsClicking(false);
      animate(dotScale, 1, { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, dotX, dotY, ringX, ringY, ringRotate, dotScale, detectBackground, detectState]);

  /* ── React to state changes */
  useEffect(() => {
    const isHover = state !== 'default';

    if (state === 'drag') {
      ringWidth.set(90);
      ringHeight.set(90);
      ringScale.set(1);
    } else if (isHover) {
      ringWidth.set(LABELS[state] ? 80 : 64);
      ringHeight.set(64);
      ringScale.set(1);
    } else {
      ringWidth.set(44);
      ringHeight.set(44);
      ringScale.set(1);
    }

    /* Show label with a tiny delay */
    const t = setTimeout(() => setLabelVisible(isHover && !!LABELS[state]), isHover ? 80 : 0);
    return () => clearTimeout(t);
  }, [state, ringWidth, ringHeight, ringScale]);

  if (isMobile) return null;

  /* ── Colors */
  const dotColor  = isOnLight ? '#0a0a0a' : '#ffffff';
  const ringBorder = isOnLight
    ? 'rgba(10,10,10,0.5)'
    : isClicking
      ? 'rgba(245,158,11,0.9)'
      : 'rgba(255,255,255,0.35)';
  const ringBg = isOnLight
    ? state !== 'default' ? 'rgba(10,10,10,0.08)' : 'transparent'
    : state !== 'default' ? 'rgba(255,255,255,0.06)' : 'transparent';
  const labelColor = isOnLight ? '#0a0a0a' : '#ffffff';

  return (
    <>
      {/* ── Tiny snapping dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10001]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          scale: dotScale,
        }}
      >
        <div
          className="rounded-full transition-colors duration-150"
          style={{
            width: state === 'default' ? 6 : 4,
            height: state === 'default' ? 6 : 4,
            background: dotColor,
            boxShadow: isClicking ? `0 0 8px 3px ${dotColor}60` : 'none',
            transition: 'width 0.2s, height 0.2s, background 0.2s',
          }}
        />
      </motion.div>

      {/* ── Morphing spring ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center overflow-hidden"
        style={{
          x: ringX,
          y: ringY,
          width: ringWidth,
          height: ringHeight,
          rotate: ringRotate,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '999px',
          border: `1px solid ${ringBorder}`,
          background: ringBg,
          backdropFilter: state !== 'default' ? 'blur(4px)' : 'none',
          transition: 'border-color 0.3s, background 0.3s, backdrop-filter 0.3s',
        }}
        animate={{
          scale: isClicking ? 0.75 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      >
        {/* Label inside ring */}
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: labelVisible ? 1 : 0,
            scale: labelVisible ? 1 : 0.6,
          }}
          transition={{ duration: 0.18 }}
          className="text-[9px] uppercase tracking-[0.18em] font-semibold whitespace-nowrap select-none"
          style={{ color: labelColor }}
        >
          {LABELS[state]}
        </motion.span>
      </motion.div>

      {/* ── Click ripple */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
          style={{
            x: dotX,
            y: dotY,
            translateX: '-50%',
            translateY: '-50%',
            borderColor: isOnLight ? 'rgba(10,10,10,0.2)' : 'rgba(255,255,255,0.2)',
          }}
          initial={{ width: 10, height: 10, opacity: 0.8 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </>
  );
};
