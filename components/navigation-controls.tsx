'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePageContext } from '@/context/page-context'

export function NavigationControls() {
  const { currentPage, prevPage, nextPage } = usePageContext()
  const maxPage = 3

  return (
    <motion.div
      className="fixed bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-3 sm:gap-6 z-40 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={prevPage}
        disabled={currentPage === 0}
        className="disabled:opacity-20 disabled:cursor-not-allowed p-2 sm:p-3 rounded-full border border-gold hover:bg-gold hover:bg-opacity-10 transition-all"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
      </button>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {Array.from({ length: maxPage + 1 }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              const { goToPage } = usePageContext()
              goToPage(i)
            }}
            className={`rounded-full transition-all ${
              currentPage === i ? 'bg-gold w-6 sm:w-8 h-1.5 sm:h-2' : 'bg-slate-300 w-1.5 sm:w-2 h-1.5 sm:h-2'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage === maxPage}
        className="disabled:opacity-20 disabled:cursor-not-allowed p-2 sm:p-3 rounded-full border border-gold hover:bg-gold hover:bg-opacity-10 transition-all"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
      </button>
    </motion.div>
  )
}
