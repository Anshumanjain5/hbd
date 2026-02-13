'use client'

import { createContext, useContext, useState } from 'react'

interface PageContextType {
  currentPage: number
  isTransitioning: boolean
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPage = (page: number) => {
    if (page !== currentPage) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentPage(page)
        setIsTransitioning(false)
      }, 600)
    }
  }

  const nextPage = () => {
    const maxPage = 3
    if (currentPage < maxPage) {
      goToPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1)
    }
  }

  return (
    <PageContext.Provider value={{ currentPage, isTransitioning, goToPage, nextPage, prevPage }}>
      {children}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('usePageContext must be used within PageProvider')
  }
  return context
}
