import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {   
  title: 'WAEC Pin ',
  description: 'App for buying waec cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className='bg-hero-pattern bg-cover'>
        <Navbar />
        {children}
        <Footer />
        </div>
       
        </body>
    </html>
  )
}
