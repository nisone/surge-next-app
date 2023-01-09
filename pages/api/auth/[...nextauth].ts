import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google"
// import { FirestoreAdapter } from "@next-auth/firebase-adapter"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {label: "Email", type: "text", placeholder: "Email"},
        password: {label: "Password", type: "text", placeholder: "Password"}
      },
     authorize(credentials, req) : any {
      const {username, password} = credentials as any

      if(username == "admin@surgeryders.com" && password == "secret@surgeryders"){
        const user = {
          "id": 1,
          "name" : "Admin",
          "email" : "admin@surgeryders.com"
        }
        return user
      }
      return null
     }
    })
  ],
  pages: {
    signIn: '/login'
  },
  adapter: FirestoreAdapter({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    // Optional emulator config (see below for options)
    // emulator: {
    //   host: 'localhost',
    //   port: 3001
    // },
  }),
  session: {
    strategy: 'jwt'
  }
  // ...
}

export default NextAuth(authOptions);