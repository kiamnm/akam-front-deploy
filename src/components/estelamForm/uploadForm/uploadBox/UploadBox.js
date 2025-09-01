import "./style.css";

import React, { useState, useContext, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { FormContext } from "../../context/FormContext";

export default function UploadBox() {
  const {
    file,
    setFile,
    isModalShow,
    setIsModalShow,
    uploadErr,
    setUploadErr,
  } = useContext(FormContext);

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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true, // فقط یک فایل بگیره
  });
  useEffect(() => {
    console.log(uploadErr, "errrr");
    if (uploadErr.length > 0) {
      setIsModalShow(uploadErr);
    }
  }, [file, uploadErr]);
  return (
    <div
      {...getRootProps()}
      className="upload-box-container cursor_pointer  d-flex flex-column justify-content-center align-items-center  "
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
}
