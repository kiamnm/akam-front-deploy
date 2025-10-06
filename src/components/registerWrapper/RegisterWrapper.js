"use client"
import React,{useContext, useState} from 'react'
import "./style.css"
import { RegisterContext } from '@/context/RegisterContext'
import RegisterForm from '../registerForm/RegisterForm'
import SixDigit from '../registerForm/sixDigit/SixDigit'
import ProFullScreenOtp from '../proFullScreenOtp/ProFullScreenOtp'
import { successNotif } from '@/utils/notif'
import { useRouter } from "next/navigation";



export default function RegisterWrapper() {
    const router=useRouter()
    const [phone,setPhone]=useState("")
    const [isOtpShow,setIsOtpShow]=useState(false)

    const handleIsOtpTrue=()=>{
        successNotif("شما با موفقیت وارد شدید . در حال انتقال به پنل کاربری")
        router.push("/userpanel/orders")
      }
    
  return (
    <div className='register-wrapper '>
      
        {!isOtpShow && (
                  <RegisterForm phone={phone} setPhone={setPhone} setIsOtpShow={setIsOtpShow} ></RegisterForm>
                )}
                 {isOtpShow && (
                  <ProFullScreenOtp handleIsOtpTrue={handleIsOtpTrue} phoneNumber={phone} setIsOtpShow={setIsOtpShow} ></ProFullScreenOtp>
                )}
                  
                  {/* <div className='d-flex justify-content-center'>
                    <div className='phone-validation-container  rounded'>
                    <SixDigit  ></SixDigit>
                    
                  </div>
                  </div> */}
    </div>
  )
}

  
