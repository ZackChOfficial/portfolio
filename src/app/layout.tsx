import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const nunito_Sans = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Zack portfoliio',
  description: 'Zack portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito_Sans.className} bg-gradient-to-b from-slate-900 to-slate-950 antialiased`}>{children}</body>
    </html>
  )
}
