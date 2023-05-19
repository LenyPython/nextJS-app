'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { FC, PropsWithChildren } from 'react'

type Props = {
  session: Session
}

const Provider: FC<PropsWithChildren<Props>> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Provider
