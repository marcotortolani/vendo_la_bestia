import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'MacBook Pro M3 Pro 16" Space Black — Venta Maldonado/Montevideo',
  description:
    'MacBook Pro M3 Pro 16" Space Black en perfectas condiciones. 18GB RAM, 512GB SSD, 97% batería, 106 ciclos. Precio: US$ 3.500. Montevideo, Uruguay.',
  keywords: [
    'MacBook Pro',
    'M3 Pro',
    'venta',
    'Uruguay',
    'Montevideo',
    'Space Black',
    'usado',
    'pristine',
  ],
  openGraph: {
    title: 'MacBook Pro M3 Pro 16" - US$ 3.500',
    description:
      'Condición pristina. 97% batería, 106 ciclos. Piriápolis, Maldonado o Montevideo Centro.',
    type: 'website',
    locale: 'es_UY',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
