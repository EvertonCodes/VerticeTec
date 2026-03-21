import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: 'VÉRTICE TEC | Oficinas de Tecnologia',
  description: 'Oficinas escolares de robótica educacional para eventos temáticos. Transformando a educação através da tecnologia e inovação.',
  keywords: ['robótica educacional', 'oficinas escolares', 'STEM', 'educação tecnológica', 'dia do trânsito', 'dia do meio ambiente'],
  icons: {
    icon: [

      {
        url: '/fav2.png',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
