'use client'
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Logout() {
    const {data:session} = useSession()

    const onLogout = async () => {
      const result = await signOut()
    }
        if(session?.user){
            return <Link href='#' onClick={onLogout}  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
          >
            <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>Logout
            </Link>
        }
        
        return <Link href='#' onClick={() => signIn()}
        className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
      >
        <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Signin
    </Link>
    
}