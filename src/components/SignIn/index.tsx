import { FC } from 'react'
import { ProvidersType } from '@/components/Nav'
type Props = {
  providers: ProvidersType | null
}
const SignIn: FC<Props> = ({ providers }) => {
  const signIn = (provider: any) => {}
  if (!providers) return <></>
  return (
    <>
      {Object.values(providers).map(provider => {
        return (
          <button type='button' onClick={() => signIn(provider.id)}>
            Sign In
          </button>
        )
      })}
    </>
  )
}

export default SignIn
