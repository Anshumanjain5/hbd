'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/animations'

export function MessageSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-950 py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="max-w-3xl text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-50 mb-4">
            A Special Message
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold to-rose rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl font-serif text-gold italic leading-relaxed">
            "On your special day, we celebrate not just the years that have passed, but the remarkable person you continue to become."
          </p>

          <div className="border-l-4 border-rose pl-8 py-4 text-left">
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-4">
              Every laugh, every moment of courage, every act of kindness—these are the threads that weave your beautiful story. You inspire us with your grace, your strength, and your unwavering spirit.
            </p>

            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Thank you for being the light that brightens our lives. Thank you for your genuine care, your infectious joy, and for simply being you. May this year bring you as much happiness as you bring to everyone around you.
            </p>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              With Love and Admiration
            </p>
            <div className="flex justify-center gap-4">
              <span className="text-gold text-2xl">✨</span>
              <span className="text-rose text-2xl">💕</span>
              <span className="text-gold text-2xl">✨</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
