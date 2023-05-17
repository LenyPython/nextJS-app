'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true
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
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Prompt
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  )
}

export default Nav
