"use client"

import React, {useState} from 'react'
import SearchSection from './_component/SearchSection'
import TemplateListSection from './_component/TemplateListSection'
import { log } from 'console'

function Dashboard() {

  const [userSearchInput, setUserSearchInput]= useState<string>()
  return (
    
    <div>
      {/* Search Section */}
      <SearchSection onsearchInput={(value:string)=>setUserSearchInput(value)}
      />

      {/* Template List Section*/}
      <TemplateListSection userSearchInput={userSearchInput}/>

    </div>
  )
}

export default Dashboard