"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

import { MdClose } from "react-icons/md";
import Digits from "./digits/Digits";
import { LoginContext } from "@/context/LoginContext";
import Counter from "./counter/Counter";
import fetchPhoneOtp from "./../../../utils/login/fetchPhoneOtp"
import { AuthContext } from "@/context/AuthContext";
import fetchPhoneOtpAgain from "./../../../utils/login/fetchPhoneOtpAgain"
import { ToastContainer, toast } from "react-toastify";

export default function SixDigit() {
  const router=useRouter()
  
  const [otpError, setOtpError] = useState("");
  const [pending,setPending]=useState(false)
  
  const {formState,setFormState,otp, setOtp,phone,secondsLeft,setSixDigitShow,setSecondsLeft}=useContext(LoginContext)
  const {setIsLogin,setUser,setUserRole}=useContext(AuthContext)

  const handleClickSubmit = async() => {
    const isComplete = otp.every((digit) => digit !== "");
    
    if (!isComplete) {
      setOtpError("* لطفا کد را وارد نمایید.");
    } else {
      setOtpError("");
      
      const user=await fetchPhoneOtp(phone,otp,setOtpError,setPending)

        user && router.push("/userpanel/orders")
        user && setIsLogin(true)
        user && setUserRole(user.role)
        user && setUser(user)
      
      
      
    }
  };
  const getOtpAgain=async()=>{
const result=await fetchPhoneOtpAgain(phone, setOtpError)
if(result===true){
 toast.success("کد ورود جدید ارسال شد.", {
              position: "bottom-right",
            });
      setOtpError("")
    setSecondsLeft(15)
}
  }
  return (
    <div className="six-digit-container ">
      <div >
        <div className="six-digit-detail-container  py-3 py-md-4 px-4 d-flex flex-column justify-content-center">
          <span
            onClick={() => {
              setSixDigitShow(false)
            }}
            className="mb-4 cursor_pointer"
          >
            <MdClose style={{ fontSize: "20px" }} />
          </span>

          <p className="fs_14 anjoman_bold m-0 mb-2">کد تایید را وارد کنید</p>
          <p className="anjoman_light fs_14 m-0 mb-4">
            لطفا کد ارسال شده به شماره <span className="anjoman_num_regular">{phone}</span> را وارد کنید.
          </p>
          <div className="digits m-0 align-self-center mb-3 ">
            <Digits otp={otp} setOtp={setOtp}></Digits>
          </div>
          <p className="fs_12 anjoman_regular color_orange ">{otpError}</p>

          <p className="fs_12 anjoman_light m-0 mb-4">
          <span className=" cursor_pointer underline">
              کدی دریافت نکردید؟
            </span>
            <span className="anjoman_num_regular">
                {secondsLeft>0 ? (
                    `${secondsLeft}
          ثانیه مانده تا دریافت کد جدید.`
                ):<span className="cursor_pointer color_orange anjoman_light fs_12 pe-2" onClick={getOtpAgain}>دریافت مجدد کد</span>}
                 
            </span>
         
            
          </p>
          <button
            onClick={handleClickSubmit}
            className="fs_14 anjoman_light w-100 py-2 bg_color_orange color_white rounded-2 next"
            disabled={pending}
          >
            {pending ? (
          <span
          
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          "ادامه"
        )}
          </button>
          <p
            className="fs_14 anjoman_light m-0 mt-3 align-self-center cursor_pointer color_orange underline"
            onClick={() => {
              setSixDigitShow(false)
            }}
          >
            ویرایش شماره
          </p>
        </div>
      </div>
      <Counter></Counter>
      <ToastContainer />
    </div>
  );
}
