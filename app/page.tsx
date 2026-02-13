'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePageContext } from '@/context/page-context'
import { Page0Hero } from '@/components/pages/page-0-hero'
import { Page1PhotoText } from '@/components/pages/page-1-photo-text'
import { Page2EyeShayari } from '@/components/pages/page-2-eye-shayari'
import { Page3Thanks } from '@/components/pages/page-3-thanks'
import { FadeOverlay } from '@/components/fade-overlay'
import { NavigationControls } from '@/components/navigation-controls'
import { AudioPlayer } from '@/components/audio-player'

export default function Page() {
  const { currentPage, isTransitioning } = usePageContext()

  const pages = [
    <Page0Hero key="page-0" />,
    <Page1PhotoText key="page-1" />,
    <Page2EyeShayari key="page-2" />,
    <Page3Thanks key="page-3" />,
  ]

  return (
    <main className="bg-navy-950 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>

      <FadeOverlay />
      <NavigationControls />
      <AudioPlayer />
    </main>
  )
}
