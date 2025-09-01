"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

import "./style.css";

import { MdClose } from "react-icons/md";
import Digits from "./digits/Digits";
import { RegisterContext } from "@/context/RegisterContext";
import { AuthContext } from "@/context/AuthContext";
import Counter from "./counter/Counter";
import fetchOtp from "@/utils/register/fetchOtp";
import fetchOtpAgain from "@/utils/register/fetchOtpAgain";
export default function SixDigit() {
  
  const router = useRouter();
  const [pending,setPending]=useState(false)
  
  const {sixDigitShow,setSixDigitShow,otp, setOtp,phone,secondsLeft,setSecondsLeft,otpError, setOtpError}=useContext(RegisterContext)
  

  const handleClickSubmit = async() => {
    const isComplete = otp.every((digit) => digit !== "");
    
    
    if (!isComplete) {
      setOtpError("* لطفا کد را وارد نمایید.");
    } else {
      
      const result=await fetchOtp(otp,phone,setOtpError,setPending)
    console.log(result,"resuuult");
      if(result){
        toast.success("ثبت نام با موفقیت انجام شد. در حال انتقال به صفحه ورود...", {
              position: "bottom-right",
            });
        router.push("/login")
      

      }
      // setOtpError("");
      // console.log("آماده ارسال به بکند");
      // setSixDigitShow(false);
    }
  };
  const getOtpAgain=async()=>{
    
    const result=await fetchOtpAgain(phone,setOtpError)
    if(result){
      toast.success("کد ورود جدید ارسال شد.", {
              position: "bottom-right",
            });
      setOtpError("")
    setSecondsLeft(15)
    }
  }
  return (
    <div className="six-digit-container w-100">
      <div className={`${sixDigitShow ? "d-block" : "d-none"} `}>
        <div className="six-digit-detail-container  py-3 py-md-4 px-4 d-flex flex-column justify-content-center">
          <span
            onClick={() => {
              setSixDigitShow(false);
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
                ):<span onClick={getOtpAgain} className="cursor_pointer color_orange anjoman_light fs_12 pe-2">دریافت مجدد کدز</span>}
                 
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
              setSixDigitShow(false);
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
