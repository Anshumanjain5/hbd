'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/components/animations'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold opacity-10 rounded-full blur-3xl"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="text-center z-10 px-4"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-7xl md:text-8xl font-serif font-bold mb-4 text-slate-50"
        >
          Happy Birthday,
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="text-6xl md:text-7xl font-serif font-bold mb-8 bg-gradient-to-r from-gold via-rose to-gold bg-clip-text text-transparent"
        >
          Manushree
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A celebration of grace, beauty, and the light you bring to everyone around you
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center gap-2"
        >
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
          <p className="text-slate-400 text-sm">Scroll to explore</p>
          <div className="w-2 h-2 bg-rose rounded-full animate-pulse"></div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}
