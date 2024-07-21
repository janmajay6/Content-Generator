import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onsearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-500 flex flex-col justify-center items-center'>
      <h2 className=' text-lg md:text-xl lg:text-3xl  font-bold text-white mb-2 align-middle  '>"Browse All Templates"</h2>
     
      <p className='text-amber-500 text-base font-bold'>What would you like to create today?</p>

      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md my-4 bg-white w-[40%]'>
          <Search className='text-primary'/>
          <input type="text" placeholder='Search' onChange={(e)=>onsearchInput(e.target.value)} className='bg-transparent outline-none w-full text-black' />
        </div>
      </div>


    </div>

  )
}

export default SearchSection