'use client'

import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '@/components/animations'

export function EyesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-900 py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            variants={slideInLeft}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-lg border-2 border-rose/40 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-rose/10 to-gold/10 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p className="text-slate-400 text-sm">Your Photo Here</p>
                </div>
              </div>

              {/* Glow frame */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(232, 160, 191, 0.2)',
                    '0 0 40px rgba(232, 160, 191, 0.4)',
                    '0 0 20px rgba(232, 160, 191, 0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-lg border-2 border-rose/40"
              ></motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={slideInRight}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-slate-50"
            >
              Eyes of Wonder
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-16 h-1 bg-gradient-to-r from-rose to-gold rounded-full"
            ></motion.div>

            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-lg text-slate-300 font-light leading-relaxed"
            >
              <p>
                In your eyes lies the reflection of a beautiful soul. Eyes that sparkle with kindness, shine with determination, and hold the depth of someone truly special.
              </p>

              <p>
                They've witnessed countless moments, celebrated victories, and found strength through challenges. Every glance tells a story of grace and genuine warmth.
              </p>

              <p className="text-rose italic">
                May your eyes always see the beauty in life and the good in people around you.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-4"
            >
              <div className="inline-block px-6 py-3 border border-rose/50 rounded-lg">
                <p className="text-sm text-rose uppercase tracking-widest font-medium">
                  A Window to Your Soul
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
