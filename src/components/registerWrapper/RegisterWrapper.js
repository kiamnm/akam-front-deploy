"use client"
import React,{useContext} from 'react'
import "./style.css"
import { RegisterContext } from '@/context/RegisterContext'
import RegisterForm from '../registerForm/RegisterForm'
import SixDigit from '../registerForm/sixDigit/SixDigit'

export default function RegisterWrapper() {
    const {sixDigitShow}=useContext(RegisterContext)
  return (
    <div>
      
        {!sixDigitShow && (
                  <RegisterForm ></RegisterForm>
                )}
                  
                  <div className='d-flex justify-content-center'>
                    <div className='phone-validation-container  rounded'>
                    <SixDigit  ></SixDigit>
                  </div>
                  </div>
    </div>
  )
}
