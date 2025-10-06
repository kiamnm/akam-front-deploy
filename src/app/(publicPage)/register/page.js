
import React from 'react'
import "./style.css"

import ClientLayout from '@/components/clientLayout/ClientLayout'

import RegisterWrapper from '@/components/registerWrapper/RegisterWrapper'
// import { RegisterProvider } from '@/context/RegisterContext'

export default function Page() {
  
  return (
    
      
        <div className='register-page-container   d-flex justify-content-center align-items-center m-0'>
        {/* <RegisterProvider> */}
          <RegisterWrapper></RegisterWrapper>
        {/* </RegisterProvider> */}
        
          
        </div>
        
      
      
  
  )
}
