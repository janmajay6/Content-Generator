"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { SignInToken } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  const{user, isSignedIn}= useUser();
  return (
    <div>
      <div className='flex p-7 bg-gray-900 shadow-sm justify-between'>
        <div className='flex'><Image src={'/logo.svg'} width={40} height={40} alt='logo'/> <h2 className='ml-1 mt-2 font-bold text-l text-white'>AI CONTENT HUB</h2></div>
        {isSignedIn?
        <div className='flex items-center gap-5'>
          <Link href={'/dashboard'}>
          <Button variant='outline'>Dashboard</Button>
          </Link>
         
          <UserButton />
        </div>:
         <SignInButton><Button>Get Started</Button></SignInButton>
         
        
      }
        

       
      </div>

    </div>
  )
}

export default Header