import { FC } from 'react'
import { ProvidersType } from '@/components/Nav'
import { signIn } from 'next-auth/react'

type Props = {
  providers: ProvidersType | null
}

const SignIn: FC<Props> = ({ providers }) => {
  if (!providers) return <></>
  return (
    <>
      {Object.values(providers).map(provider => {
        return (
          <button
            type='button'
            onClick={() => signIn(provider.id)}
            key={`provider:${provider.id}`}
          >
            Sign In
          </button>
        )
      })}
    </>
  )
}

export default SignIn
