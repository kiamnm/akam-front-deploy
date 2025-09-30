"use client"
import "./style.css";

import React, { useState, useContext, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuFileSymlink } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";


export default function PaymentUploadBox({file,setFile,uploadErr,setUploadErr,isModalShow,setIsModalShow}) {
  


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
  const handleRemove=()=>{
    setFile(null)
  }
const handleDownload = () => {
  if (!file) return;

  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url); // آزاد کردن حافظه
};
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true, // فقط یک فایل بگیره
  });
  useEffect(() => {
    
    if (uploadErr.length > 0) {
      setIsModalShow(uploadErr);
    }
  }, [file, uploadErr]);
  if(!file){
    return (
    <div
      {...getRootProps()}
      className="upload-box-container payment-upload cursor_pointer  d-flex flex-column justify-content-center align-items-center  "
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
              اطلاعات سفارش خود را در یک فایل با فرمت ZIP. در این قسمت قرار
              دهید.
            </p>
          </div>
        )}
      </>
    </div>
  );
  }else{

return(
<div className="file-detail-container d-flex justify-content-between align-items-center mt-4 bg_color_light_gray px-3 py-2 rounded-1">
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
        </div>
)











    
  }
  
}
