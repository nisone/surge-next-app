'use client'
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function DashboardLink() {
    const {data:session} = useSession()

    return (
        <Link href={session?.user ? '/admin/dashboard' : '/login'}
            className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase p-3 font-bold block"
        >
            <i className="fas fa-tachometer text-blueGray-300 mr-2 text-sm"></i>{" "}
            {session?.user ? session.user.email : ''}
        </Link>
    )
}