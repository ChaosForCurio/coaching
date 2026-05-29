import { motion } from 'framer-motion';
import { useState } from 'react';

const reviews = [
  {
    name: 'Ankit Sharma',
    course: 'RSCIT + Digital Marketing',
    rating: 5,
    text: 'Bhavya Career Institute changed my career path completely. After completing RSCIT and Digital Marketing, I got placed in a digital agency in Kota within 2 months. The faculty is extremely supportive and the content is very practical.',
    year: '2024',
    initials: 'AS',
  },
  {
    name: 'Pooja Meena',
    course: 'Tally with Accounting',
    rating: 5,
    text: 'The Tally course here is absolutely top notch. Sir explains every concept with real business examples. I cleared my CA Foundation exam alongside this course and it helped me a lot in understanding accounts practically.',
    year: '2024',
    initials: 'PM',
  },
  {
    name: 'Rahul Kumawat',
    course: 'Web Development (PHP & React)',
    rating: 5,
    text: 'I had zero coding knowledge when I joined. Within 6 months of the Web Development course I built my own project and got a freelance client. The step-by-step teaching style makes even complex topics easy.',
    year: '2023',
    initials: 'RK',
  },
  {
    name: 'Suman Yadav',
    course: 'Graphic Designing',
    rating: 5,
    text: 'The graphic design batch is wonderful. We learned Photoshop, CorelDRAW, and DTP with live projects. Library facility is a bonus — I used to sit and practice for hours. Highly recommend this institute!',
    year: '2024',
    initials: 'SY',
  },
  {
    name: 'Deepak Gupta',
    course: 'Python Programming',
    rating: 5,
    text: 'From basic to advanced Python — everything was covered with real-world mini projects. The institute environment is very focused and disciplined. Best decision I made for my career after graduation.',
    year: '2023',
    initials: 'DG',
  },
  {
    name: 'Neha Jain',
    course: 'NIOS 12th + Spoken English',
    rating: 5,
    text: 'I completed my 12th through NIOS with the guidance of Bhavya Career Institute. The faculty helped with every doubt patiently. The Spoken English classes gave me the confidence to crack interviews. Truly grateful!',
    year: '2024',
    initials: 'NJ',
  },
];

export const Reviews = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? reviews.length - 1 : p - 1));
  const next = () => setActive((p) => (p === reviews.length - 1 ? 0 : p + 1));

  const review = reviews[active];

  return (
    <section id="reviews" className="py-32 bg-white text-black relative overflow-hidden">
      {/* Ghost background text */}
      <div className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none select-none">
        <span className="text-[18vw] font-black italic leading-none">Reviews</span>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-black/30"
            >
              Student Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl italic mt-3 text-black"
            >
              What They Say
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xs text-black/40 mt-8 md:mt-0 text-sm font-light leading-relaxed"
          >
            Real feedback from real students who transformed their careers at Bhavya Career Institute.
          </motion.p>
        </div>

        {/* Featured Review */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-black/10 p-10 md:p-16 mb-6 relative"
        >
          {/* Quote mark */}
          <span className="absolute top-8 left-10 text-8xl leading-none text-black/5 font-black select-none">"</span>

          {/* Stars */}
          <div className="flex gap-1 mb-8">
            {Array.from({ length: review.rating }).map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-black" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-light leading-relaxed text-black/70 max-w-4xl mb-12 relative z-10">
            "{review.text}"
          </p>

          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-sm font-bold">{review.initials}</span>
            </div>
            <div>
              <p className="font-semibold text-black">{review.name}</p>
              <p className="text-xs text-black/40 uppercase tracking-widest mt-0.5">{review.course} · {review.year}</p>
            </div>
          </div>
        </motion.div>

        {/* Controls + Dots */}
        <div className="flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-px transition-all duration-300 ${i === active ? 'w-10 bg-black' : 'w-4 bg-black/20'}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* All reviews grid (mini cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-4 border transition-all duration-300 ${
                i === active
                  ? 'border-black bg-black text-white'
                  : 'border-black/10 hover:border-black/40'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 text-xs font-bold ${
                i === active ? 'bg-white text-black' : 'bg-black/10 text-black'
              }`}>
                {r.initials}
              </div>
              <p className={`text-[10px] font-semibold truncate ${i === active ? 'text-white' : 'text-black'}`}>{r.name}</p>
              <p className={`text-[9px] uppercase tracking-wider truncate mt-0.5 ${i === active ? 'text-white/60' : 'text-black/40'}`}>{r.course}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
