import React from 'react'
import "./style.css"
import ClientLayout from '@/components/clientLayout/ClientLayout'
// import { LoginProvider } from '@/context/LoginContext'
import LoginWrapper from '@/components/loginWrapper/LoginWrapper'

export default function Login() {
  return (
    <div >
          <ClientLayout>
            <div className='login-page-container   pt-5'>
            {/* <LoginProvider> */}
            <LoginWrapper></LoginWrapper>
            {/* </LoginProvider> */}
            
              
            </div>
            
          </ClientLayout>
          
        </div>
  )
}
