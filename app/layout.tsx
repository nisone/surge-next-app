'use client'
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={props.session} refetchInterval={5 * 60}>
          {props.children}
        </SessionProvider>
      </body>
    </html>
  )
}
