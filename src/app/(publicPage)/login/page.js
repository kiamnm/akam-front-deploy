import React from 'react'
import "./style.css"
import ClientLayout from '@/components/clientLayout/ClientLayout'
// import { LoginProvider } from '@/context/LoginContext'
import LoginWrapper from '@/components/loginWrapper/LoginWrapper'

export default function Page() {
  return (
  
      <> <div className='login-page-container    d-flex justify-content-center align-items-center'>
            {/* <LoginProvider> */}
            <LoginWrapper></LoginWrapper>
            {/* </LoginProvider> */}
            
              {/* <ClientLayout> */}
           
            
          {/* </ClientLayout> */}
          
            </div>
      </>
          
       
  )
}
