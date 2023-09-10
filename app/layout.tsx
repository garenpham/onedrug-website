import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'OneDrug',
  description: 'Enabling Worldwide Access to Personalized Precision Medicine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='https://res.cloudinary.com/dwqpulybv/image/upload/v1694304448/shared-assets/landing%20page/Logo_lr8o8o.svg'
          sizes='any'
        />
      </head>
      <body className={roboto.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
