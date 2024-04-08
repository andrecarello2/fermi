import { ReactNode } from 'react'

import { Toaster } from '@/components'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '@/styles/app.css'

import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props

  return (
    <html lang="en">
      <body className={cn('font-sans antialiased dark', fontSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
