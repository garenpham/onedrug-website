import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
          href='https://res.cloudinary.com/dwqpulybv/image/upload/v1690262710/shared-assets/cmxiy2cxqrduhw6pw4xs.svg'
          sizes='any'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
