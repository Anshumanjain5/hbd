'use client'

import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '@/components/animations'
import Image from 'next/image'

export function PhotosSection() {
  const photos = [
    {
      id: 1,
      accent: 'gold',
      gradient: 'from-gold/20 to-transparent',
    },
    {
      id: 2,
      accent: 'rose',
      gradient: 'from-rose/20 to-transparent',
    },
    {
      id: 3,
      accent: 'gold',
      gradient: 'from-gold/20 to-transparent',
    },
    {
      id: 4,
      accent: 'rose',
      gradient: 'from-rose/20 to-transparent',
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-950 py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="w-full max-w-6xl"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-50 mb-6">
            Moments & Memories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              variants={idx % 2 === 0 ? slideInLeft : slideInRight}
              className="relative group"
            >
              <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${photo.gradient} border border-${photo.accent}/30 aspect-square`}>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-400 text-sm">Photo {photo.id}</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${photo.accent} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeInUp}
          className="text-center text-slate-400 text-sm mt-12 italic"
        >
          These moments captured will forever remain in our hearts
        </motion.p>
      </motion.div>
    </section>
  )
}
