import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { useRef } from 'react';

/* ─────────────────────────────────────────
   Smooth bezier path — shared between bg
   ghost and animated foreground stroke.
   ViewBox: 1000 × 1500
───────────────────────────────────────── */
const PATH =
  "M 200 80 C 350 80, 650 200, 720 380 C 790 560, 300 560, 280 740 C 260 920, 720 920, 760 1100 C 800 1280, 420 1330, 500 1450";

/* Each milestone: SVG coords + which side to show the card */
const milestones = [
  {
    id: "01", stage: "Foundation",
    title: "Computer Basics & RSCIT",
    desc: "Start your journey with government-certified RSCIT — digital literacy, MS Office, internet, and e-governance tools.",
    cx: 200, cy: 80, side: "right" as const,
    threshold: 0.0,
  },
  {
    id: "02", stage: "Skills",
    title: "Tally & Accounting",
    desc: "Master Tally ERP with practical accounting — GST, invoicing, ledgers, and financial reporting for business readiness.",
    cx: 720, cy: 380, side: "left" as const,
    threshold: 0.22,
  },
  {
    id: "03", stage: "Digital",
    title: "Graphic Design & Marketing",
    desc: "Learn Photoshop, CorelDRAW, DTP, and digital marketing strategies including SEO, social media, and paid campaigns.",
    cx: 280, cy: 740, side: "right" as const,
    threshold: 0.46,
  },
  {
    id: "04", stage: "Advanced",
    title: "Web Dev & Python",
    desc: "Build dynamic websites with PHP and React. Write automation scripts with Basic and Advanced Python programming.",
    cx: 760, cy: 1100, side: "left" as const,
    threshold: 0.68,
  },
  {
    id: "05", stage: "Career Ready",
    title: "Distance Diploma & Typing",
    desc: "Enroll in UGC-recognized online degrees (BA, BCom, MBA, BCA…) and master Hindi/English typing for government jobs.",
    cx: 500, cy: 1450, side: "right" as const,
    threshold: 0.90,
  },
];

/* ─────────────────────────────────────────
   Sub-component: one SVG milestone dot
   (Hooks-safe — each has its own component)
───────────────────────────────────────── */
interface SvgDotProps {
  cx: number;
  cy: number;
  threshold: number;
  progress: MotionValue<number>;
}

const SvgDot = ({ cx, cy, threshold, progress }: SvgDotProps) => {
  const dotOpacity = useTransform(
    progress,
    [Math.max(0, threshold - 0.01), threshold + 0.06],
    [0, 1]
  );
  const ringOpacity = useTransform(
    progress,
    [threshold, threshold + 0.10],
    [0, 0.3]
  );

  return (
    <>
      {/* outer pulse ring */}
      <motion.circle
        cx={cx} cy={cy} r="22"
        fill="none" stroke="white" strokeWidth="0.8"
        style={{ opacity: ringOpacity }}
      />
      {/* inner glow dot */}
      <motion.circle
        cx={cx} cy={cy} r="7"
        fill="white"
        filter="url(#dotGlow)"
        style={{ opacity: dotOpacity }}
      />
    </>
  );
};

/* ─────────────────────────────────────────
   Sub-component: one milestone card
───────────────────────────────────────── */
interface MilestoneCardProps {
  m: typeof milestones[0];
  progress: MotionValue<number>;
  containerHeight: number;
}

const MilestoneCard = ({ m, progress, containerHeight }: MilestoneCardProps) => {
  const cardOpacity = useTransform(
    progress,
    [Math.max(0, m.threshold - 0.01), m.threshold + 0.10],
    [0, 1]
  );
  const cardX = useTransform(
    progress,
    [Math.max(0, m.threshold - 0.01), m.threshold + 0.10],
    [m.side === "right" ? -28 : 28, 0]
  );

  const leftPct = `${(m.cx / 1000) * 100}%`;
  const topPx   = `${(m.cy / 1500) * containerHeight}px`;
  const shift   = m.side === "right"
    ? "translate(24px, -50%)"
    : "translate(calc(-100% - 24px), -50%)";

  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: leftPct, top: topPx, transform: shift }}
    >
      <motion.div
        style={{ opacity: cardOpacity, x: cardX }}
        className={`w-[300px] p-6 border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl ${
          m.side === "left" ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`flex items-center gap-3 mb-2 ${
            m.side === "left" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <span className="text-[10px] font-black px-2 py-0.5 bg-white text-black">
            {m.id}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
            {m.stage}
          </span>
        </div>
        <h4 className="text-xl md:text-2xl font-bold mb-3">{m.title}</h4>
        <p className="text-[11px] md:text-xs text-white/60 leading-relaxed font-light">
          {m.desc}
        </p>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
export const Syllabus = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  /*
   * High stiffness + well-damped spring → silky smooth, no wobble,
   * very tight follow without lag feeling jerky.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.0003,
  });

  /* Fade in the animated stroke from the very first scroll pixel */
  const strokeOpacity = useTransform(smoothProgress, [0, 0.04], [0, 1]);

  /* Container height used to map SVG coords → px for card positioning */
  const CONTAINER_H = 1600;

  return (
    <section
      ref={containerRef}
      className="py-60 bg-[#050505] relative overflow-hidden"
    >
      {/* Ghost watermark */}
      <div className="absolute top-20 left-10 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[20vw] leading-none font-black italic">GROW</h2>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.8em] text-white/30"
          >
            Your Learning Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-9xl italic mt-4"
          >
            The Path to
            <br />
            Career Success
          </motion.h2>
        </div>

        {/* ── Desktop interactive curved timeline ── */}
        <div className="hidden md:block relative w-full" style={{ height: `${CONTAINER_H}px` }}>

          {/* SVG layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 1500"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Glow for dots */}
              <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Subtle glow for the animated stroke */}
              <filter id="strokeGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Vertical gradient: dimmer at top, brighter at current position */}
              <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="rgba(255,255,255,0.35)" />
                <stop offset="60%"  stopColor="rgba(255,255,255,0.75)" />
                <stop offset="100%" stopColor="rgba(255,255,255,1)" />
              </linearGradient>
            </defs>

            {/* Ghost track — very faint guide line */}
            <path
              d={PATH}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Animated draw stroke (the "ink" filling in as you scroll) */}
            <motion.path
              d={PATH}
              stroke="url(#strokeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#strokeGlow)"
              style={{ pathLength: smoothProgress, opacity: strokeOpacity }}
            />

            {/* Milestone SVG dots — rendered in Hooks-safe sub-components */}
            {milestones.map((m) => (
              <SvgDot
                key={m.id}
                cx={m.cx}
                cy={m.cy}
                threshold={m.threshold}
                progress={smoothProgress}
              />
            ))}
          </svg>

          {/* Milestone cards — absolutely positioned HTML overlays */}
          {milestones.map((m) => (
            <MilestoneCard
              key={m.id}
              m={m}
              progress={smoothProgress}
              containerHeight={CONTAINER_H}
            />
          ))}
        </div>

        {/* ── Mobile linear vertical timeline ── */}
        <div className="block md:hidden relative border-l border-white/10 pl-6 ml-2 space-y-12">
          {milestones.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <div className="p-6 border border-white/10 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black px-2 py-0.5 bg-white text-black">
                    {m.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                    {m.stage}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3">{m.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
};
