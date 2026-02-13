'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/animations'

export function MemoriesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-navy-900 py-20 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose/5 via-transparent to-gold/5"></div>

      {/* Blurred center element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gold to-rose opacity-5 rounded-full blur-3xl"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center max-w-3xl z-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-serif font-bold text-slate-50 mb-8"
        >
          A Moment to Remember
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="space-y-8"
        >
          <p className="text-xl md:text-2xl text-gold italic font-light">
            "Every moment with you is a treasure we hold close to our hearts"
          </p>

          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-rose to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-navy-900 text-rose text-sm uppercase tracking-widest">
                Your Special Day
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Today marks another beautiful year of your life. A year to cherish the moments that matter, to create new memories, and to celebrate the incredible person you are. May every moment be filled with joy, love, and endless possibilities.
          </p>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <p className="text-rose text-sm mt-8">✨</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
