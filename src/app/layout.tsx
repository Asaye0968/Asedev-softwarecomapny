import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/ui/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevStack | Web, Telegram Bot & Mobile App Development',
  description: 'We build exceptional web applications, smart Telegram bots, and innovative mobile apps that drive business growth.',
  keywords: ['web development', 'telegram bots', 'mobile apps', 'software company', 'custom software'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asestack.com',
    title: 'DevStack | Software Development Company',
    description: 'Specializing in Web, Telegram Bot, and Mobile App Development',
    siteName: 'DevStack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevStack | Software Development Company',
    description: 'Specializing in Web, Telegram Bot, and Mobile App Development',
    creator: '@devstack',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-dark-950`}>
        <Header />
        {children}
      </body>
    </html>
  )
}