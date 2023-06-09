'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider
} from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'
import SignIn from '@/components/SignIn'

export type ProvidersType = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>
const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState<ProvidersType | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    fetchProviders()
  }, [])
  const signOut = () => {}
  return (
    <nav className='w-full flex-column flex-between mb-16'>
      <Link href='/' className='gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo img'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>App logo Text</p>
      </Link>
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
            </Link>
            <button
              type='button'
              onClick={() => signOut()}
              className='outline_btn'
            >
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='profile-pic'
              />
            </Link>
          </div>
        ) : (
          <SignIn providers={providers} />
        )}
      </div>
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile-pic'
              onClick={() => setIsDropdownOpen(prev => !prev)}
            />
            {isDropdownOpen && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setIsDropdownOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  className='mt-5 w-full black_btn'
                  onClick={() => {
                    setIsDropdownOpen(false)
                    signOut()
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <SignIn providers={providers} />
        )}
      </div>
    </nav>
  )
}

export default Nav
