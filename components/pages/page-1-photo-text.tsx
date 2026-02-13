'use client'

import { motion } from 'framer-motion'
import { usePageContext } from '@/context/page-context'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Page1PhotoText() {
  const { nextPage } = usePageContext()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const textLines = [
    "Baby, this moment will always stay special for me, jaan,",
    "After all the running around, I finally reached you, calm and free.",
    "It started with just a simple, normal photo side by side,",
    "Then without a word, you held my hand with quiet pride.",
    "",
    "Baby, who does that so effortlessly and sweet?",
    "You have no idea how fast my heart began to beat.",
    "I couldn't even explain what was going on inside,",
    "I was completely blacked out, lost in that tide.",
    "",
    "Till now, of all the memories we ever made,",
    "This one stands above them all, it will never fade."
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 max-w-6xl w-full">

        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md rounded-2xl border-2 border-gold shadow-2xl overflow-hidden bg-navy-900">

            {/* Image determines its own aspect ratio */}
            <Image
              src="/images/manushree-photo.jpg"
              alt="Manushree"
              width={800}     // Adjust if needed
              height={1000}   // Adjust if needed (match real ratio)
              className="w-full h-auto"
              priority
            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col justify-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-gold text-xs sm:text-sm font-serif font-light mb-6 sm:mb-8 tracking-widest uppercase"
          >
            A Moment of Love
          </motion.p>

          {textLines.map((line, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className={`font-serif text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-3 sm:mb-4 ${
                line === '' ? 'mb-6 sm:mb-8' : 'text-slate-50'
              }`}
            >
              {line}
            </motion.p>
          ))}

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mt-8 sm:mt-12"
          >
            <button
              onClick={nextPage}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-gold to-rose text-navy-950 font-serif font-semibold text-sm sm:text-lg rounded-lg hover:shadow-lg hover:shadow-gold/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Continue the Story
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
