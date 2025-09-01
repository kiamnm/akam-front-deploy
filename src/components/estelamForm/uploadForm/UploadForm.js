"use client"
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import ConstInputs from "../constInputs/ConstInputs";
import UploadBox from "./uploadBox/UploadBox";
import SubmitBtn from "./submitBtn/SubmitBtn";
import { FormContext } from "../context/FormContext";
import FileDetail from "./fileDetail/FileDetail";
import ExplanationBox from "./explanationBox/ExplanationBox";
import SixDigitCode from "../sixDigitCode/SixDigitCode";
import Modal from "./modal/Modal";
import FullScreenOtp from "@/components/fullScreenOtp/FullScreenOtp";
import { ToastContainer, toast } from "react-toastify";
import fetchCreateOrderFromUpload from "@/utils/order/fetchCreateOrderFromUpload";
import { AuthContext } from "@/context/AuthContext";
export default function UploadForm() {
  const {file,name,setName,explanation,setExplanation,setFile,sixDigitShow,setSixDigitShow,isModalShow,setIsModalShow,uploadErr,phone,setPhone}=useContext(FormContext)
  const [wasOtpTrue,setWasOtpTrue]=useState(false)
  const [pending,setPending]=useState(false)
  const {user}=useContext(AuthContext)
useEffect(() => {
  const handleResult = async () => {
    if (wasOtpTrue) {
       setWasOtpTrue(false);
      const result = await fetchCreateOrderFromUpload(
        user._id,
        name,
        phone,
        explanation,
        file,
        setPending
      )
      if(result){
        setFile(null)
        setExplanation("")
        setPhone("")
        setName("")
 toast.success("فرم جدید ارسال شد", {
          position: "bottom-right",
        });
      }else{
 toast.error("خطایی رخ داده است !", {
          position: "bottom-right",
        });
      }
     
    }
  };

  handleResult(); // فراخوانی تابع async

}, [wasOtpTrue]);
  
  return (
    <div className="upload-form-container w-100 ">
      <p className="fs_14 anjoman_regular p-0  m-0">
        مجموعه تجارت فولاد آکام گستر به منظور تسهیل بخشیدن به روند خرید مشتریان
        محترم شرایطی فراهم نموده تا مشتریان بتوانند با آپلود فایل zip مشخصات
        نیازشان از قیمت محصول مطلع شده و پیش فاکتور دریافت نمایند.
      </p>
      <div className="const-input-container">
        <ConstInputs></ConstInputs>
      </div>
      {!file?(
        <div className="" >
      <UploadBox></UploadBox>
      </div>
      ):<div >
        <FileDetail></FileDetail>
      </div>}
      <div className="">
      <ExplanationBox></ExplanationBox>
      </div>
      
      
      <div className="">
      <SubmitBtn ></SubmitBtn>
      </div>
      {sixDigitShow &&(
        <div className="px-4">
                <FullScreenOtp setIsOtpShow={setSixDigitShow} phoneNumber={phone} setWasOtpTrue={setWasOtpTrue} ></FullScreenOtp>
              </div>
      )
    }
    {uploadErr.length>0 && (
      <Modal></Modal>
    )}
    
      
    </div>
  );
}
