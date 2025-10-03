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
import ProUpload from "@/components/proUpload/ProUpload";
import ProModal from "@/components/proModal/ProModal";
import { IoWarningOutline } from "react-icons/io5";
export default function UploadForm() {
  const {file,name,setName,explanation,setExplanation,setFile,sixDigitShow,setSixDigitShow,isModalShow,setIsModalShow,uploadErr,setUploadErr,phone,setPhone,status,setStatus}=useContext(FormContext)
  const [isUploadErrShow,setIsUploadErrModaShow]=useState(false)

  // const [wasOtpTrue,setWasOtpTrue]=useState(false)
  // const [pending,setPending]=useState(false)
  // const {user}=useContext(AuthContext)
// useEffect(() => {
//   const handleResult = async () => {
//     if (wasOtpTrue) {
//        setWasOtpTrue(false);
//       const result = await fetchCreateOrderFromUpload(
//         user._id,
//         name,
//         phone,
//         explanation,
//         file,
//         setPending
//       )
//       if(result){
//         setFile(null)
//         setExplanation("")
       
//  toast.success("فرم جدید ارسال شد", {
//           position: "bottom-right",
//         });
//       }else{
//  toast.error("خطایی رخ داده است !", {
//           position: "bottom-right",
//         });
//       }
     
//     }
//   };

//   handleResult(); // فراخوانی تابع async

// }, [wasOtpTrue]);
  useEffect(()=>{
if(uploadErr.length>0){
  setIsUploadErrModaShow(true)
}
  },[uploadErr])
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
      {/* {!file?(
        <div className="" >
      <UploadBox></UploadBox>
      </div>
      ):<div >
        <FileDetail></FileDetail>
      </div>} */}
      <div className="w-100 d-flex justify-content-center upload-master-container">
        {/* <div className="w-50 "> */}
          <ProUpload file={file} setFile={setFile}  setUploadErr={setUploadErr} status={status} setStatus={setStatus} ></ProUpload>
        {/* </div> */}
        
      </div>
      
      <div className="">
      <ExplanationBox></ExplanationBox>
      </div>
      
      
      <div className="">
      <SubmitBtn ></SubmitBtn>
      </div>
     
    
          {isUploadErrShow && (
            <ProModal
              text={
                uploadErr
              }
              onlyBtnText={"متوجه شدم"}
              title={"خطا در آپلود فایل"}
              isModalShow={isUploadErrShow}
              setIsModalShow={setIsUploadErrModaShow}
              icon={
                <IoWarningOutline
                  style={{ fontSize: "34px", color: "#ff0707ff" }}
                />
              }
            ></ProModal>
          )}
    
    
      
    </div>
  );
}
