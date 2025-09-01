
import React from 'react'
import "./style.css"

import ClientLayout from '@/components/clientLayout/ClientLayout'

import RegisterWrapper from '@/components/registerWrapper/RegisterWrapper'
import { RegisterProvider } from '@/context/RegisterContext'

export default function Register() {
  
  return (
    <div >
      <ClientLayout>
        <div className='register-page-container   pt-5'>
        <RegisterProvider>
          <RegisterWrapper></RegisterWrapper>
        </RegisterProvider>
        
          
        </div>
        
      </ClientLayout>
      
    </div>
  )
}
