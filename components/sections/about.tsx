'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/animations'

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-950 py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="max-w-3xl"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-50 mb-6">
            About Her
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose rounded-full"></div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="space-y-6 text-lg md:text-xl text-slate-300 font-light leading-relaxed"
        >
          <p>
            Manushree is a person of extraordinary grace and kindness. With every smile, she brings warmth to those around her. Her laughter is infectious, her spirit is inspiring, and her presence is a gift.
          </p>

          <p>
            She walks through life with elegance and purpose, touching hearts and creating memories with every moment shared. Her strength lies not just in her achievements, but in the genuine care she shows for others.
          </p>

          <p>
            Today, we celebrate not just another year, but the remarkable journey she continues to write with each passing day. Her story is one of beauty, resilience, and boundless potential.
          </p>

          <p className="text-gold italic pt-4">
            Here's to celebrating you, Manushree, exactly as you are. Wonderful, beautiful, and truly one of a kind.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
