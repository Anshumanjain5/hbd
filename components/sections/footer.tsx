'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/animations'

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center space-y-8"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-serif font-bold text-slate-50"
          >
            Here's to You, Manushree
          </motion.h3>

          <motion.div
            variants={fadeInUp}
            className="space-y-4 text-slate-300 text-lg font-light"
          >
            <p>
              Thank you for the joy you bring, the love you share, and the inspiration you provide each day.
            </p>
            <p>
              May your birthday be filled with moments as beautiful as you are, and may the year ahead bring you endless happiness, growth, and fulfillment.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="pt-8 space-y-6"
          >
            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, color: '#f5c77a' }}
                href="#"
                className="text-slate-400 hover:text-gold transition-colors"
                aria-label="Share on social media"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.5-7 9.5" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#e8a0bf' }}
                href="#"
                className="text-slate-400 hover:text-rose transition-colors"
                aria-label="Share via email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.a>
            </div>

            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>

            <p className="text-slate-500 text-sm">
              Made with love and care
            </p>
            <p className="text-slate-600 text-xs">
              © 2024 A Birthday Celebration for Manushree
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
