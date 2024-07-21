import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between left-1 bg-white'>
      {/* <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg '>
        <Search/>
        <input type="text" placeholder="Search..." className='outline-none'/>
      </div> */}

      <div className='flex items-center justify-between'>
        <div>
        <h2 className='bg-primary text-white p-1 rounded-full text-xs'>🤩Join Membership just for ₹599/Month </h2>
        </div>
     
       
        
        
        
      </div>
      <div>
       <UserButton></UserButton>
       </div>


    </div>
  )
}

export default Header