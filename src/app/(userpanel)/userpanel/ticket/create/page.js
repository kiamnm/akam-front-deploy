"use client"
import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuFileSymlink } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import ProModal from "@/components/proModal/ProModal";
import { IoWarningOutline } from "react-icons/io5";
import fetchCreateTicket from "@/utils/userpanel/ticket/fetchCreateTicket";
import { successNotif, failNotif } from "@/utils/notif";
import ProUpload from "@/components/proUpload/ProUpload";


export default function Page() {
  const [file,setFile]=useState(null)
  const [uploadErr,setUploadErr]=useState("")
  const [subject,setSubject]=useState("")
  const [message,setMessage]=useState("")
  const [isUploadErrModalShow,setIsUploadErrModalShow]=useState(false)
  const [formErr,setFormErr]=useState("")
  const [isFormValidationModalShow,setIsFormValidationModalShow]=useState(false)
  const [pending,setPending]=useState(false)
  const [status,setStatus]=useState("idle")
  const onDrop = (acceptedFiles) => {
      
      console.log(acceptedFiles);
      setUploadErr(""); // ریست اولیه برای تحریک useEffect
  
      if (acceptedFiles.length > 1) {
        setUploadErr("شما مجاز به آپلود 1 فایل هستید.");
        setFile(null);
      } else if (acceptedFiles.length === 1) {
        const filee = acceptedFiles[0];
  
        if (filee.size > 20 * 1024 * 1024) {
          setFile(null);
          setUploadErr("حجم فایل نباید بیشتر از ۲۰ مگابایت باشد.");
        } else if (filee.name.toLowerCase().endsWith(".zip") === false) {
          setFile(null);
          setUploadErr("تنها فرمت zip مجاز است.");
        } else {
          setFile(filee);
  
          setUploadErr(""); // پاک کردن پیام خطا
        }
      }
    };
  //   const handleRemove=()=>{
  //     setFile(null)
  //   }
  // const handleDownload = () => {
  //   if (!file) return;
  
  //   const url = URL.createObjectURL(file);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = file.name;
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url); // آزاد کردن حافظه
  // };
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //     onDrop,
  //     multiple: true, // فقط یک فایل بگیره
  //   });
    useEffect(() => {
      
      if (uploadErr.length > 0) {
        setIsUploadErrModalShow(uploadErr);
      }
    }, [file, uploadErr]);
    useEffect(()=>{
      if(!isUploadErrModalShow){
        setUploadErr("")
      }
      
    },[isUploadErrModalShow])

    const fomrValidation=()=>{
      if(subject.length<1){
        setFormErr("لطفا موضوع تیکت را وارد کنید")
        setIsFormValidationModalShow(true)
        return false
      }else if(subject.length>100){
        setFormErr("تعداد کاراکتر های موضوع بیش از حد مجاز است")
        setIsFormValidationModalShow(true)
        return false
      }else if(message.length<1){
        setFormErr("لطفا متن تیکت را وارد کنید")
        setIsFormValidationModalShow(true)
        return false
      }else if(message.length>1000){
        setFormErr("تعداد کاراکتر های تیکت بیش از حد مجاز است")
        setIsFormValidationModalShow(true)
        return false
      }
      setFormErr("")
      return true
    }
    const handleClickSubmit=async()=>{
      const validationResult=fomrValidation()
      if(validationResult){
        const resualt=await fetchCreateTicket(file,subject,message,setPending)
             
        if(resualt){
          setSubject("")
          setMessage("")
          setFile("")
          successNotif("تیکت با موفقیت ارسال شد.") 
          
        }else{
failNotif("خطا در ارسال تیکت")  
        }
      }
    }
  return (
    <div className="create-tikcet-tab-container px-3 pt-3 d-flex flex-column  flex-grow-1 ">
      <div className="bg_color_white rounded-2 py-3 px-3 flex-grow-1 d-flex flex-column justify-md-content-between justify-content-start">
        <div className="title d-flex justify-content-between align-items-center">
          <p className="fs_16 anjoman_semibold">ثبت تیکت جدید</p>
          <div className="d-flex gap-2">
            <div className="close-btn fs_14 anjoman_regular px-2 py-1 rounded-1  color_white cursor_pointer">
              بستن تیکت
            </div>
            <Link href="/userpanel/ticket" className="back-btn d-flex rounded-1 align-items-center gap-1 px-2 py-1 cursor_pointer text-decoration-none color_black" >
              <p className="m-0 fs_14 anjoman_regular ">بازگشت</p>
              <span className="d-flex align-items-center">
                <IoIosArrowBack />
              </span>
            </Link>
            
          </div>
        </div>
        <div className="subject-container d-flex flex-column mt-4">
            <label className="fs_14 anjoman_regular mb-2" htmlFor="subject">موضوع تیکت*</label>
            <input value={subject} onChange={(e)=>{setSubject(e.target.value)}} id="subject" className="rounded-1" type="text" />
        </div>
        <div className="explnation-container d-flex flex-column mt-2 mt-md-4">
          <label className="fs_14 anjoman_regular mb-2" htmlFor="explenation">توضیحات</label>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="rounded-1" name="" id="explenation"></textarea>
        </div>


        

 <div className="w-100 d-flex justify-content-center upload-master-container  mt-4">
        {/* <div className="w-50 "> */}
          <ProUpload file={file} setFile={setFile}  setUploadErr={setUploadErr} status={status} setStatus={setStatus} ></ProUpload>
        {/* </div> */}
        
      </div>

     {/* {!file &&<div
      {...getRootProps()}
      className="upload-box-container ticket-upload cursor_pointer  d-flex flex-column justify-content-center align-items-center mt-4 "
    >
      {console.log(file)}
      <>
        <input {...getInputProps()} />

        {isDragActive ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="drap-drop d-flex gap-2 align-items-center">
              <p className="fs_16 anjoman_regular m-0">رها کنید </p>
              <span className="dot dot1 anjoman_bold fs_18">.</span>
              <span className="dot dot2 anjoman_bold fs_18">.</span>
              <span className="dot dot3 anjoman_bold fs_18">.</span>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center upload-icon-container">
            <img src="./images/upload-icon.svg" alt="" />
            <p className="fs_14 anjoman_light m-0 text-center">
              اگر نیاز به آپلود فایل دارید، فایل های خود را درون یک فایل .ZIP قرار داده و در اینجا رها کنید.
            </p>
          </div>
        )}
      </>
    </div>
}
{file && <div className="file-detail-container d-flex justify-content-between align-items-center mt-4 bg_color_light_gray px-3 py-2 rounded-1">
          {console.log(file)}
          <div className="right d-flex gap-2">
            <span onClick={handleRemove} className="cursor_pointer">
              <Tooltip
                title="حذف"
                placement="bottom"
                PopperProps={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, 4], // مقدار دوم فاصله عمودی رو کم یا زیاد می‌کنه
                      },
                    },
                  ],
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      fontFamily: "anjomanRegular",
                      fontSize: "12px",
                    },
                  },
                }}
              >
                {" "}
                <FaRegTrashAlt style={{ fontSize: "18px", color: "#4b4b4b" }} />
              </Tooltip>
              
            </span>
    
            <span className="cursor_pointer" onClick={handleDownload}>
              <Tooltip
                title="دانلود"
                placement="bottom"
                PopperProps={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, 4], // مقدار دوم فاصله عمودی رو کم یا زیاد می‌کنه
                      },
                    },
                  ],
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      fontFamily: "anjomanRegular",
                      fontSize: "12px",
                    },
                  },
                }}
              >
                {" "}
                <MdOutlineFileDownload
                  style={{ fontSize: "24px", color: "#4b4b4b" }}
                />
              </Tooltip>
            </span>
          </div>
          <div className="left d-flex justify-content-center align-items-center">
            <p className="p-0  m-0 fs_13 anjoman_regular color_text">{file.name}</p>
            <span className="d-flex align-items-center justify-content-center">
              <LuFileSymlink style={{ fontSize: "22px", color: "#4b4b4b" }} />
            </span>
          </div>
        </div>  } */}

        <div className="send-btn fs_14 anjoman_regular  d-flex justify-content-end mt-4">
          <div onClick={handleClickSubmit} className="bg_color_orange text-start rounded px-4 py-1 color_white cursor_pointer">
            ارسال
          </div>
          
        </div>

      </div>














      {isUploadErrModalShow && (
                      <ProModal
                        text={
                          uploadErr
                        }
                        onlyBtnText={"متوجه شدم"}
                        title={"خطا در آپلود فایل"}
                        isModalShow={isUploadErrModalShow}
                        setIsModalShow={setIsUploadErrModalShow}
                        icon={
                          <IoWarningOutline
                            style={{ fontSize: "34px", color: "#ff0707ff" }}
                          />
                        }
                      ></ProModal>
                    )}


                    {isFormValidationModalShow && (
                      <ProModal
                        text={
                          formErr
                        }
                        onlyBtnText={"متوجه شدم"}
                        title={"خطا در ارسال تیکت"}
                        isModalShow={isFormValidationModalShow}
                        setIsModalShow={setIsFormValidationModalShow}
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
