import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from '../components/navigation/Nav'
import UrlBar from '../components/UrlBar/UrlBar'

import './globals.css'

export const metadata: Metadata = {
  title: 'The Gallery',
  description: 'Web app for browsing the Met Museum of Art public collection.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='w-4/5 bg-black text-gray-300 flex flex-column justify-center items-center' style={{margin: '0 auto'}}>
          <div className="urlBar">
            <UrlBar baseURL="http://localhost:4001" />
          </div>
        <Nav />
        </div>
        {children}
      </body>
    </html>
  )
}