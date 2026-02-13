'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Page3Thanks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-2xl w-full text-center"
      >
        {/* Decorative top element */}
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity }}
            className="flex justify-center"
          >
            <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-gold" fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-50 mb-6 sm:mb-8"
        >
          Special Thanks
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="border-b-2 border-gold w-20 sm:w-24 mx-auto mb-8 sm:mb-12"
        />

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 sm:mb-8 font-light"
        >
          So this the end of this website for my cute baby whose birthday is today 
          Baby this is just a small effort from my side for you meri jaan
          There is a lot to come for you baby
          You are the most beautiful, caring, kind, promising girl I have ever met 


        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed mb-8 sm:mb-12"
        >
          I am always with you mera baccha till my last breath
          I will be your side no matter who is against you 
          I will become your biggest supporter and biggest cheerleader in your happy moments 
          I will become your shoulder you need to cry and then i will be the person who will convert your tears to your smile 
          I will do whatever it takes to be with you 
          I will become your man the man you have dreamed of 
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gold italic font-serif"
        >
          Love you so much my dear past present and future wife😘❤️
          Happy birthday once again my dear princess😘❤️‍🩹💘💌💫
        </motion.p>

        {/* Decorative bottom element */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-rose" />
            <div className="w-2 h-2 rounded-full bg-gold" />
          </div>
        </motion.div>

        {/* Final message */}
        <motion.p
          variants={itemVariants}
          className="mt-8 sm:mt-12 text-xs sm:text-sm md:text-base text-slate-400 font-light"
        >
          🎉 Happy Birthday, Manushree 🎉
        </motion.p>
      </motion.div>
    </div>
  )
}
