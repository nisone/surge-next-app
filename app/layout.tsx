'use client'
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { Session} from 'next-auth'

interface IProps {
  children: React.ReactNode,
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider  refetchInterval={5 * 60}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
