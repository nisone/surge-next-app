'use client'
import { useSession } from "next-auth/react"
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export default function Dashboard() {
  const {data:session} = useSession()

  return (

    <div className="flex h-3/4">
     Welcome back {session?.user ? (
      session.user.email
     ) : (
      'no user'
     )}
     
    </div>

  )
}
