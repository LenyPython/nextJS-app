import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from 'next-auth/react'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  async session({ session }) {},
  async signIn({ user, account, profile }) {
    try {
    } catch (e) {}
  }
})

export { handler as GET, handler as POST }
