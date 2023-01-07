'use client'
import {auth} from "../firebase/client"
import useStore from "../store/store"
import { useRouter } from 'next/navigation'
import Loading from "../app/loading"
import Login from "../app/(auth)/login/page"
import { useEffect } from "react"
export default function AuthGate({ children }) {
    const router = useRouter()

    const isLoggedIn = useStore((state) => state.isLoggedIn)
    const setIsLoggedIn = useStore((state) => state.setIsLoggedIn)

    useEffect(() => {
        if(isLoggedIn){
            router.push('/dashboard')
        }
    }, [isLoggedIn])

    if(isLoggedIn) {
        return <>
            {children}
        </>
    }
    
    return <Login />
}