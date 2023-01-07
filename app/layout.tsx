'use client'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import './globals.css'
import { Session } from 'next-auth'

interface IProps<T> {
  children: React.ReactNode,
  // pageProps: {session?: Session}
}

export default function RootLayout({
  children,
}: IProps<{session: Session}>) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
          {children}
      </body>
    </html>
  )
}
