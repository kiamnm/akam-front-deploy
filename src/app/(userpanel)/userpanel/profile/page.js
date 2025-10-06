"use client"
import React from 'react'

import "./style.css"
import ChangeGeneralInfo from '@/components/userPanel/changeGeneralInfo/ChangeGeneralInfo'

import ChangePassword from '@/components/userPanel/changePassword/ChangePassword';
import NewsFromPanel from '@/components/newsFromPanel/NewsFromPanel';


export default function Page() {
  

  
 

  return (
    <div className='profile-container  '>
      
      <ChangeGeneralInfo></ChangeGeneralInfo>
  
<ChangePassword></ChangePassword>
<NewsFromPanel></NewsFromPanel>
    </div>

  )
}
