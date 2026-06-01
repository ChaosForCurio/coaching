import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useMotionTemplate,
  MotionValue,
} from 'framer-motion';
import { Monitor, BookOpen, PenTool, Globe, Layers, Code2 } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────
   Course data
───────────────────────────────────────────────────────────────── */
const courses = [
  {
    num: '01',
    title: 'RSCIT',
    category: 'Government Certified',
    icon: Monitor,
    image: '/images/ai-course.jpg',
    description:
      'Rajasthan State Certificate in Information Technology. Recognized by Govt. of Rajasthan. Includes 2 Digital Courses FREE on admission.',
    badge: '2 Courses FREE',
    accent: '#f59e0b',
  },
  {
    num: '02',
    title: 'Tally & Accounting',
    category: 'Finance & Accounts',
    icon: BookOpen,
    image: '/images/hero-bg.jpg',
    description:
      'Complete Tally ERP with practical GST, invoicing, ledgers, and financial reporting for business and commerce professionals.',
    accent: '#10b981',
  },
  {
    num: '03',
    title: 'Typing',
    category: 'Hindi & English',
    icon: PenTool,
    image: '/images/web-dev.jpg',
    description:
      'Professional Hindi and English typing courses built for government exam readiness and corporate job requirements.',
    accent: '#6366f1',
  },
  {
    num: '04',
    title: 'Web Development',
    category: 'Programming',
    icon: Globe,
    image: '/images/ai-course.jpg',
    description:
      'Build dynamic websites with PHP and React. Includes Python Programming Basic & Advanced with live projects.',
    accent: '#ec4899',
  },
  {
    num: '05',
    title: 'Graphic Design',
    category: 'Creative Suite',
    icon: Layers,
    image: '/images/hero-bg.jpg',
    description:
      'Photoshop, CorelDRAW, DTP and digital marketing — SEO, social media, and paid campaigns.',
    accent: '#f97316',
  },
  {
    num: '06',
    title: 'Python & AI',
    category: 'Advanced Tech',
    icon: Code2,
    image: '/images/web-dev.jpg',
    description:
      'From basic syntax to ML fundamentals. Hands-on automation, data analysis, and real-world project building.',
    accent: '#22d3ee',
  },
];

/* ─────────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────────── */
export const Courses = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const stripRef  = useRef<HTMLDivElement>(null);

  /*
   * Dynamic measurements — re-calculated on resize.
   * sectionHeight = viewport height + total horizontal travel
   * so that 1px of vertical scroll === 1px of horizontal movement.
   */
  const [sectionHeight, setSectionHeight] = useState(5000);
  const [totalTravel,   setTotalTravel]   = useState(2400);

  useEffect(() => {
    const measure = () => {
      if (!stripRef.current) return;
      const vw     = window.innerWidth;
      const vh     = window.innerHeight;
      const stripW = stripRef.current.scrollWidth;         // true layout width
      const travel = Math.max(0, stripW - vw);             // px to pan
      setTotalTravel(travel);
      setSectionHeight(vh + travel);                       // 1 : 1 scroll budget
    };

    measure();

    /* Re-measure if fonts/images cause reflow after mount */
    const raf = requestAnimationFrame(measure);

    const ro = new ResizeObserver(measure);
    if (stripRef.current) ro.observe(stripRef.current);
    window.addEventListener('resize', measure, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  /* ── Scroll tracking tied to the outer sticky wrapper ── */
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ['start start', 'end end'],
  });

  /*
   * Silky spring — deliberately *not* too loose so the strip feels
   * snappy rather than floating away from the user's scroll.
   * stiffness ↑ = more responsive, damping ↑ = less overshoot.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping:    35,
    restDelta:  0.0003,
  });

  /* Velocity → subtle horizontal skew on fast scroll */
  const velocity      = useVelocity(scrollYProgress);
  const rawSkew       = useTransform(velocity, [-0.5, 0.5], [6, -6]);
  const skewX         = useSpring(rawSkew, { stiffness: 200, damping: 40 });

  /* Primary translate — maps 0→1 progress to 0 → -(totalTravel)px */
  const x = useTransform(smoothProgress, [0, 1], [0, -totalTravel]);

  /* Header fades out quickly so it doesn't occlude cards */
  const headerOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const headerY       = useTransform(scrollYProgress, [0, 0.06], [0, -24]);

  /* Card count indicator */
  const activeIndex = useTransform(
    smoothProgress,
    [0, 1],
    [1, courses.length],
  );

  return (
    /*
     * Outer: occupies vertical space for the scroll budget.
     * This is NOT overflow:hidden so the sticky child can pin.
     */
    <div
      ref={stickyRef}
      id="courses"
      style={{ height: sectionHeight }}
      className="relative bg-[#0a0a0a]"
    >
      {/* ── Sticky viewport — clips horizontal overflow ── */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        {/* Section header — fades as scrolling begins */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-10 left-8 md:left-14 z-20 pointer-events-none select-none"
        >
          <span className="text-[10px] uppercase tracking-[0.65em] text-white/30 block mb-2">
            Our Programs
          </span>
          <h2 className="text-6xl md:text-[7rem] leading-none">Programs</h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-4 h-px bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              Scroll to explore
            </span>
          </div>
        </motion.div>

        {/* Live card counter — top right */}
        <CounterDisplay activeIndex={activeIndex} total={courses.length} />

        {/* Progress bar */}
        <div className="absolute bottom-8 left-8 right-8 z-20">
          <div className="relative h-px bg-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white/60 origin-left"
              style={{ scaleX: smoothProgress, right: 0 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">
              Bhavya Career Institute
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">
              {courses.length} Programs
            </span>
          </div>
        </div>

        {/* ── Horizontal strip ── */}
        <motion.div
          ref={stripRef}
          style={{
            x,
            skewX,
            /* GPU-composited layer — prevents paint during scroll */
            willChange: 'transform',
            translateZ: 0,
          }}
          className="flex items-stretch gap-5 pl-[10vw]"
        >
          {courses.map((course, idx) => (
            <CourseCard
              key={idx}
              course={course}
              index={idx}
              totalCards={courses.length}
              progress={smoothProgress}
            />
          ))}

          {/* End CTA panel */}
          <div className="flex-shrink-0 w-[320px] flex flex-col justify-center items-start px-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-6">
              Ready to start?
            </span>
            <h3 className="text-5xl md:text-6xl leading-tight mb-8">
              Enroll<br />Today
            </h3>
            <a
              href="https://wa.me/919694932391"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/20 px-7 py-4 hover:bg-white hover:text-black transition-all duration-500"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">Chat on WhatsApp</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right breathing room so last card isn't flush to edge */}
          <div className="flex-shrink-0 w-[10vw]" />
        </motion.div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────
   Live counter (top-right) — uses motion value to avoid React re-renders
───────────────────────────────────────────────────────────────── */
const CounterDisplay = ({
  activeIndex,
  total,
}: {
  activeIndex: MotionValue<number>;
  total: number;
}) => {
  /* Round and clamp the active index motion value reactively */
  const clamped = useTransform(activeIndex, (v) =>
    String(Math.min(Math.max(Math.round(v), 1), total)).padStart(2, '0')
  );
  const totalStr = String(total).padStart(2, '0');
  const display  = useMotionTemplate`${clamped}`;

  return (
    <div className="absolute top-10 right-8 md:right-14 z-20 pointer-events-none select-none text-right">
      <span className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">
        Course
      </span>
      <div className="flex items-end justify-end gap-1">
        <motion.span className="text-3xl font-black text-white/20 tabular-nums leading-none">
          {display}
        </motion.span>
        <span className="text-white/10 text-base mb-0.5">/{totalStr}</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────
   Individual course card
───────────────────────────────────────────────────────────────── */
interface CourseCardProps {
  course: typeof courses[0];
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const CourseCard = ({ course, index, totalCards, progress }: CourseCardProps) => {
  /*
   * Each card reveals as its "window" of scroll progress passes.
   * start = when this card begins entering the viewport (approx).
   * We clamp start to ≥ 0 so the first card is visible immediately.
   */
  const segmentSize = 1 / totalCards;
  const start = Math.max(0, index * segmentSize - segmentSize * 0.4);
  const end   = Math.min(1, start + segmentSize * 0.8);

  const cardOpacity = useTransform(progress, [start, end], [0.15, 1]);
  const cardY       = useTransform(progress, [start, end], [50, 0]);

  const Icon = course.icon;

  return (
    <motion.div
      style={{
        opacity:     cardOpacity,
        y:           cardY,
        width:       400,
        flexShrink:  0,
        borderColor: `${course.accent}28`,
        /* GPU layer per card for smooth paint */
        willChange: 'opacity, transform',
      }}
      className="
        group relative border bg-white/[0.025]
        overflow-hidden h-[68vh] max-h-[560px]
        flex flex-col justify-between p-9
        hover:bg-white/[0.055]
        transition-colors duration-700 cursor-pointer
        rounded-[2px]
      "
    >
      {/* Accent glow — bleeds in on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 15% 85%, ${course.accent}1a 0%, transparent 55%)`,
        }}
      />

      {/* Background image — ghostly reveal on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none">
        <img
          src={course.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Top row: ghost number + icon */}
      <div className="relative z-10 flex justify-between items-start">
        <span
          className="font-black select-none leading-none"
          style={{
            fontSize: 'clamp(72px, 9vw, 112px)',
            color: `${course.accent}18`,
            lineHeight: 0.85,
          }}
        >
          {course.num}
        </span>
        <div
          className="w-11 h-11 mt-1 flex items-center justify-center border border-white/10 group-hover:border-white/25 transition-all duration-500 flex-shrink-0"
          style={{ background: `${course.accent}1a` }}
        >
          <Icon className="w-[18px] h-[18px] text-white/45 group-hover:text-white/80 transition-colors" />
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10">
        <span
          className="text-[9px] uppercase tracking-[0.45em] mb-3 block transition-colors duration-500"
          style={{ color: `${course.accent}aa` }}
        >
          {course.category}
        </span>

        <h3 className="text-[2rem] md:text-[2.25rem] leading-tight mb-2 group-hover:translate-x-1.5 transition-transform duration-500">
          {course.title}
        </h3>

        {course.badge && (
          <span
            className="inline-block mb-4 text-[9px] uppercase tracking-[0.2em] px-2 py-[3px] font-bold"
            style={{ background: course.accent, color: '#0a0a0a' }}
          >
            {course.badge}
          </span>
        )}

        <p className="text-[13px] text-white/40 leading-relaxed mb-6 max-w-[340px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {course.description}
        </p>

        {/* Animated reveal line */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div
            className="h-px w-0 group-hover:w-10 transition-all duration-500 ease-out"
            style={{ background: course.accent }}
          />
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25 group-hover:text-white/55 transition-colors duration-500">
            View Syllabus
          </span>
        </div>
      </div>

      {/* Bottom accent stroke */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
        style={{
          background: `linear-gradient(90deg, ${course.accent} 0%, ${course.accent}00 100%)`,
        }}
      />
    </motion.div>
  );
};
