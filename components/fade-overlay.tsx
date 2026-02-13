'use client'

import { motion } from 'framer-motion'
import { usePageContext } from '@/context/page-context'

export function FadeOverlay() {
  const { isTransitioning } = usePageContext()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isTransitioning ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black pointer-events-none z-50"
      style={{ pointerEvents: isTransitioning ? 'auto' : 'none' }}
    />
  )
}
