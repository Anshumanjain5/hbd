'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Page2EyeShayari() {
  const shayari = [
  "ये जो आँखें हैं तुम्हारी,",
  "क्या राज छुपाए हैं?",
  "",
  "जानना चाहता हूँ मैं,",
  "क्या इन्होंने कभी मेरे लिए आँसू बहाए हैं?",
  "",
  "तेरी आँखों में जो मासूमियत है,",
  "ना जाने कितनी बार मेरा दिल चुराया है।",
  "",
  "हर रोज़ सोचता हूँ, पढ़ लिया होता उन आँखों को एक बार और,",
  "क्योंकि हर दफ़ा उनमें मैंने अपने लिए ही मोहब्बत पाई है।"
]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl w-full">
        {/* Eye Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-rose shadow-2xl">
            <Image
              src="/images/manushree-eye.jpg"
              alt="Manushree's Eyes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>

        {/* Shayari */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-rose text-xs sm:text-sm font-serif font-light mb-8 sm:mb-12 tracking-widest uppercase"
          >
            For Your Eyes Only
          </motion.p>

          {shayari.map((line, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className={`font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-4 sm:mb-6 ${
                line === ''
                  ? 'mb-6 sm:mb-8'
                  : 'text-slate-50 italic'
              }`}
            >
              {line}
            </motion.p>
          ))}

          {/* Decorative element */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
            <div className="text-3xl text-rose opacity-50 font-serif">✦</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
