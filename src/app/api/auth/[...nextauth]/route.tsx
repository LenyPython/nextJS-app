import User from '@/models/user'
import { connectToDB } from '@/utils/db'
import { Session } from 'next-auth/core/types'
import NextAuth from 'next-auth/next'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    //@ts-ignore
    async session({ session }: { session: Session }) {
      if (!session?.user) {
        console.warn('Could not get session')
        return
      }
      const sessionUser = await User.findOne({
        email: session.user.email
      })
      //@ts-ignore
      session.user.id = sessionUser._id.toString()
      return session
    },
    //@ts-ignore
    async signIn({ profile }: { profile: GoogleProfile }) {
      if (!profile) {
        console.warn('No user')
        return
      }
      try {
        await connectToDB()
        const userExists = await User.findOne({
          email: profile.email
        })
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name,
            image: profile.picture
          })
        }
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }
