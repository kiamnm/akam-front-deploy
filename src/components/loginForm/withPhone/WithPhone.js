"use client"
import React,{useState,useContext} from 'react'
import "./style.css"
import Link from 'next/link'
import { LoginContext } from '@/context/LoginContext'
import validation from './validation'
import fetchPhoneForm from "./../../../utils/login/fetchPhoneForm"



export default function WithPhone() {
  const {phone,setPhone,phoneErr,setPhoneErr,setFormState,setSixDigitShow,setSecondsLeft,setOtp}=useContext(LoginContext)
  const [pending,setPending]=useState(false)
  
  const handleClickSubmit=async()=>{
    const isValid=validation(phone,setPhoneErr)
    if(isValid){
      setPhoneErr("")
      setOtp(["", "", "", "", "", ""])
      
      const result=await fetchPhoneForm(phone,setPhoneErr,setPending)
      result && setSecondsLeft(15)
      result && setSixDigitShow(true)
      
      
    }
  }
  return (
    <div className="mt-5 m-auto login-phone-container bg_color_white p-3">
      <p className="anjoman_bold fs_14">ورود به آکام </p>
      <div className="input-container ">
      <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} className="login-input" type="text" placeholder="شماره موبایل" />
      <p  className="error fs_12 anjoman_light color_orange">{phoneErr}</p>
      </div>

      

      
      
      <button onClick={handleClickSubmit} className="w-100 py-2 color_white bg_color_orange anjoman_regular fs_16">{pending ? (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          "ادامه"
        )}</button>
      <div className="d-flex justify-content-center pt-4 pb-2 ">
        <p className="fs_14 anjoman_regular m-0 ">حساب کاربری ندارید؟  </p>
        <Link className="fs_14 anjoman_regular text-decoration-underline color_orange " href="/register">ساخت حساب کاربری</Link>
      </div>
      <div className='d-flex justify-content-center '>
        <p onClick={()=>{setFormState("password")}} className='fs_14 anjoman_regular text-decoration-underline color_orange cursor_pointer p-0'>ورود با رمز عبور</p>
      </div>
    </div>
  )
}
