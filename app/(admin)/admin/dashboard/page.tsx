'use client'
import { useSession } from "next-auth/react"
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export default function Dashboard() {
  const {data:session} = useSession()

  return (

    <div className="flex">
     Welcome back {session?.user ? (
      session.user.name
     ) : (
      'no user'
     )}
     
    </div>

  )
}
