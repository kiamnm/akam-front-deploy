"use client";
import "./style.css"
import React, { useContext,useEffect,useState } from "react";
import WithPhone from "../loginForm/withPhone/WithPhone";
import WithPass from "../loginForm/withPass/WithPass";
import { LoginContext } from "@/context/LoginContext";
import SixDigit from "../loginForm/sixDigit/SixDigit";
import ProFullScreenOtp from "../proFullScreenOtp/ProFullScreenOtp";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { successNotif, failNotif } from "@/utils/notif";

export default function LoginWrapper() {
  
   const router=useRouter()
  const [formState,setFormState]=useState("phone")
  const [isOtpShow,setIsOtpShow]=useState(false)
  const [phone,setPhone]=useState("")
  const [phoneErr,setPhoneErr]=useState("")
  const {login}=useContext(AuthContext)



  ///age code otp dorost vared shode bod in tabe ejra mishavad
  const handleIsOtpTrue=()=>{
    successNotif("شما با موفقیت وارد شدید . در حال انتقال به پنل کاربری")
    router.push("/userpanel/orders")
  }
  
  return (
    <div>
      
      {(formState === "phone" && !isOtpShow ) && <WithPhone setIsOtpShow={setIsOtpShow} phone={phone} setPhone={setPhone} phoneErr={phoneErr} setPhoneErr={setPhoneErr} setFormState={setFormState} ></WithPhone>}

      {(formState === "password" && !isOtpShow) && <WithPass setIsOtpShow={setIsOtpShow} phone={phone} setPhone={setPhone} setFormState={setFormState}></WithPass>}

      {isOtpShow && (<ProFullScreenOtp handleIsOtpTrue={handleIsOtpTrue} phoneNumber={phone} setIsOtpShow={setIsOtpShow}></ProFullScreenOtp>)}
      
    </div>
  );
}
