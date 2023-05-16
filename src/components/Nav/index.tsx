'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='w-full flex flex-between mb-16'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo img'
          width={30}
          height={30}
          className='object-contain'
        />
      </Link>
      <p className='logo_text'>App logo Text</p>
      <div className='sm:flex hidden'>{}</div>
    </nav>
  )
}

export default Nav
