import { BookCheckIcon, BookTemplateIcon, Edit } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
   <>
    <div className=' p-5 pb-20 md:pb-44 lg:pb-96  flex justify-around gap-5'>
    <div className='p-5 w-72 shadow-md border bg-white flex flex-col gap-1   rounded-xl'>
          <BookTemplateIcon />
          <h2 className='font-medium text-lg'>20+ Templates</h2>
          <p className='text-gray-500 '>Responsive, and mobile-friendly website</p>
        </div>
         <div className='p-5 w-72 shadow-md border bg-white flex flex-col gap-1  rounded-xl'>
         <Edit />
         <h2 className='font-medium text-lg'>Customizable</h2>
         <p className='text-gray-500 '>Components are easily customized and extendable</p>
       </div>
       <div className='p-5 w-72 shadow-md border bg-white flex flex-col gap-1  rounded-xl'>
         <BookCheckIcon />
         <h2 className='font-medium text-lg'>Free trial</h2>
         <p className='text-gray-500'>Every component and plugin is well documented</p>
       </div>

    </div>
      
       </>
   
  )
}

export default Footer