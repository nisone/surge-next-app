'use client'
import Script from 'next/script'
import { SessionContext, SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import './globals.css'
import { Session, unstable_getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'

interface IProps {
  children: React.ReactNode
}

// const RootLayout = async ({children}: IProps) => {
//   const session = unstable_getServerSession(authOptions)
//   return (
//     <html lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <head />
//       <body>
//         <SessionProvider session={session}>
//           {children}
//         </SessionProvider>
//       </body>
//     </html>
//   )
// }

// export default RootLayout


export default function RootLayout({ children}: IProps) {
   // unstable_getServerSession(authOptions)
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider refetchInterval={5 * 60}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
