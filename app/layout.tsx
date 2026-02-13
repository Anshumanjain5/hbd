import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'

import './globals.css'
import { PageProvider } from '@/context/page-context'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: "Happy Birthday, Manushree",
  description: 'A cinematic celebration of Manushree with elegant design and heartfelt moments',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-navy-950 text-slate-50" suppressHydrationWarning>
        <PageProvider>{children}</PageProvider>
      </body>
    </html>
  )
}
