'use client'

import { motion } from 'framer-motion'
import { usePageContext } from '@/context/page-context'
import { ChevronDown } from 'lucide-react'

export function Page0Hero() {
  const { nextPage } = usePageContext()

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950 opacity-60" />

      {/* Balloons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Decorative elements */}
        <motion.div
          className="mb-12"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="text-6xl text-gold opacity-30 font-serif">✦</div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-50 mb-4"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold via-rose to-gold bg-clip-text text-transparent mb-6 sm:mb-8"
        >
          Manushree
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 font-light"
        >
          A celebration of you
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-16"
        >
          <ChevronDown className="w-8 h-8 text-gold opacity-60" />
        </motion.div>

        {/* Start button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={nextPage}
          className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-gold text-gold font-serif text-sm sm:text-lg rounded-lg hover:bg-gold hover:text-navy-950 transition-all duration-300 cursor-pointer"
        >
          Begin the Journey
        </motion.button>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold opacity-30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold opacity-30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold opacity-30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold opacity-30" />
    </div>
  )
}
