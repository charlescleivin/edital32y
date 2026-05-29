import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import './globals.css'
import proposalData from '../../data/proposal.json'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'], weight: ['400', '700', '800'], style: ['normal', 'italic'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${proposalData.meta.projectName} | ${proposalData.meta.call}`,
  description: proposalData.meta.lineTheme,
  other: { viewport: 'width=device-width, initial-scale=1' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
