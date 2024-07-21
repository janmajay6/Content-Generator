"use client"
import { House } from 'lucide-react';
import { FileClock } from 'lucide-react';
import { WalletCards } from 'lucide-react';
import { Settings } from 'lucide-react';
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack';
import Link from 'next/link';



function SideNav() {

  const MenuList=[
    {
    name:'Home',
    icon: House,
    path:'/dashboard',

  },
  {
    name:'History',
    icon: FileClock,
    path:'/dashboard/history'

  },
  {
    name:'Billing',
    icon: WalletCards,
    path:'/dashboard/billing'

  },
  {
    name:'Settings',
    icon: Settings,
    path:'/dashboard/settings',
    

  }

  ]

  const path=usePathname();
  useEffect(()=>{
    // console.log(path);
  },[path])

  


  return (
    
    <div className='h-screen  p-5 shadow-sm border bg-white'>
      <div className='flex justify-center '><Image src={'/logo.svg'} alt='logo' width={60} height={60}/>
      <h1 className='mt-4 ml-2 font-bold'>AI Content Hub</h1></div>
      <hr  className='my-7 border'/>
       
       <div className='mt-4'>
        {MenuList.map((menu,index)=>(
            
            <Link href={menu.path} key={index} className={`text-lg  flex gap-2 mb-2 p-3
           hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
           ${path==menu.path&&'bg-primary text-white'}`} ><menu.icon className='h-6 w-6 mr-1' />{menu.name}</Link>
         
        ))}
       </div>
       <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
       </div>

    </div>

  )
}

export default SideNav