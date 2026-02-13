'use client'

import { motion } from 'framer-motion'
import { usePageContext } from '@/context/page-context'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Page0Hero() {
  const { nextPage } = usePageContext()

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 opacity-70" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Decorative Star */}
        <motion.div
          className="mb-12"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="text-6xl text-gold opacity-30 font-serif">✦</div>
        </motion.div>

        {/* Title */}
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold via-rose to-gold bg-clip-text text-transparent mb-10"
        >
          Princess
        </motion.h2>

        {/* Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-48 sm:w-56 md:w-64 rounded-2xl overflow-hidden border-2 border-gold shadow-xl bg-navy-900">
            <Image
              src="/images/manushree-hbd_10.jpg"   // 🔁 change if needed
              alt="Birthday Princess"
              width={800}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Short Emotional Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 font-light space-y-4 mb-12"
        >
          <p>
            I’m so glad I get to celebrate this special day with you —
            and be the first one to wish you, meri jaan ❣️
          </p>

          <p>
            You are the best thing that has ever happened to me.
            Every day, I fall deeper in love with you 💖
          </p>

          <p className="text-rose-300 font-medium">
            And today… we celebrate you ✨
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-12"
        >
          <ChevronDown className="w-8 h-8 text-gold opacity-60" />
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={nextPage}
          className="px-10 sm:px-14 py-3 sm:py-4 border-2 border-gold text-gold font-serif text-sm sm:text-lg rounded-lg hover:bg-gold hover:text-navy-950 hover:shadow-lg hover:shadow-gold/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
        >
          Begin the Journey
        </motion.button>
      </motion.div>

      {/* Decorative Corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold opacity-30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold opacity-30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold opacity-30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold opacity-30" />
    </div>
  )
}
