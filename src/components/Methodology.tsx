import { motion } from 'framer-motion';

export const Methodology = () => {
  return (
    <section id="methodology" className="py-40 bg-white text-black relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
        <h2 className="text-[20rem] leading-none font-black italic">BCI</h2>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl md:text-8xl leading-[0.9] mb-12">The<br />BHAVYA<br />Vision</h2>
              <p className="text-xl text-black/60 font-light leading-relaxed mb-8">
                Bhavya Career Institute is dedicated to empowering students with practical, job-ready skills.
                Our library facility and expert faculty ensure every student succeeds.
              </p>
              <div className="mt-6 border-l-4 border-black/80 pl-5">
                <p className="text-sm text-black/50 uppercase tracking-widest">Library Available</p>
                <p className="text-black/70 mt-1 text-sm">Free access to our resource library for all enrolled students.</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-16">
            {[
              {
                num: '01',
                title: 'Government Certified Courses',
                desc: 'RSCIT — Rajasthan State Certificate in IT. Recognized by the Government of Rajasthan for students and job-seekers.'
              },
              {
                num: '02',
                title: 'Distance & Online Education',
                desc: 'Enroll in UGC-recognized degrees — BA, BCom, BSc, MBA, BCA, MCA, and more after 12th or graduation.'
              },
              {
                num: '03',
                title: 'Digital Skills for Today',
                desc: 'From Excel to Python, Graphic Design to Web Development — build in-demand digital skills with hands-on training.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group border-t border-black/10 pt-8"
              >
                <div className="flex gap-8">
                  <span className="text-sm font-bold opacity-30">{item.num}</span>
                  <div>
                    <h4 className="text-2xl mb-4 group-hover:italic transition-all">{item.title}</h4>
                    <p className="text-black/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
