'use client'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'
import './globals.css'

interface IProps {
  children: React.ReactNode,
  session: any
}

export default function RootLayout({
  children, session
}: IProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
      </body>
    </html>
  )
}
