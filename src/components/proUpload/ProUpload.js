'use client';

import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { PiFileZipDuotone } from "react-icons/pi";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import "./style.css";

export default function ProUpload({file,setFile,setUploadErr,status,setStatus}) {
  

  const [progress, setProgress] = useState(0);
  const uploadTimerRef = useRef(null);

  // شروع آپلود و شبیه‌سازی درصد
  const startUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setStatus("uploading");
    setProgress(0);
    setUploadErr("");

    const interval = setInterval(() => {
  setProgress((prevProgress) => {
    if (prevProgress >= 100) {
      clearInterval(uploadTimerRef.current);
      return 100;
    }
    const increment = prevProgress < 50 ? 2 : 5;
    return Math.min(prevProgress + increment, 100);
  });
}, 150);
    uploadTimerRef.current = interval;
  };
  useEffect(() => {
  if (progress === 100) {
    setStatus("uploaded");
  }
}, [progress, setStatus]);

  // متد Dropzone
  const onDrop = useCallback(
    (acceptedFiles) => {
      setUploadErr("");
      if (acceptedFiles.length === 0) {
        setUploadErr("لطفا فقط یک فایل انتخاب کنید.");
        setStatus("idle");
        setFile(null);
        return;
      }
      if (acceptedFiles.length > 1) {
        setUploadErr("شما مجاز به آپلود 1 فایل هستید.");
        setStatus("idle");
        setFile(null);
        return;
      }
      const uploadedFile = acceptedFiles[0];
      const MAX_SIZE = 20 * 1024 * 1024;
      if (uploadedFile.size > MAX_SIZE) {
        setUploadErr("حجم فایل نباید بیشتر از ۲۰ مگابایت باشد.");
        setStatus("idle");
        setFile(null);
      } else if (!uploadedFile.name.toLowerCase().endsWith(".zip")) {
        setUploadErr("تنها فرمت zip مجاز است.");
        setStatus("idle");
        setFile(null);
      } else {
        startUpload(uploadedFile);
      }
      console.log("Files dropped:", acceptedFiles);
    },
    [startUpload]
  );

  // پاک کردن تایمر هنگام unmount
  useEffect(() => {
    return () => {
      if (uploadTimerRef.current) clearInterval(uploadTimerRef.current);
    };
  }, []);

  // مدیریت وضعیت drag
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    disabled: status === "uploading" || status === "uploaded"
  });

  useEffect(() => {
  if (isDragActive && status !== "dragging") {
    setStatus("dragging");
  } else if (!isDragActive && status === "dragging") {
    setStatus("idle");
  }
}, [isDragActive, status, setStatus]);

  // --- اکشن دکمه‌ها ---
  const cancelUpload = () => {
    if (uploadTimerRef.current) clearInterval(uploadTimerRef.current);
    setFile(null);
    setProgress(0);
    setStatus("idle");
    setUploadErr("");
  };

  const deleteFile = () => {
    setFile(null);
    setProgress(0);
    setStatus("idle");
    setUploadErr("");
  };

  const downloadFile = () => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  // --- رندر ---
  return (
    <div
      {...getRootProps({ onClick: null })}
      className={`pro-upload-container rounded-2 d-flex flex-column justify-content-center align-items-center ${status} position-relative`}
    >
      <input {...getInputProps()} />

      {/* دکمه آپلود */}
      {(status === "idle" || status === "dragging") && (
        <div>
          <div
            onClick={open}
            className="upload-file-btn rounded-1 px-4 py-2 anjoman_regular fs_14 bg_color_orange color_white cursor_pointer"
          >
            آپلود فایل
          </div>
        </div>
      )}

      {/* متن راهنما */}
      {(status === "idle" || status === "dragging") && (
        <div className="position-absolute upload-text">
          <p className="color_text anjoman_regular">
            فایل زیپ خود را بکشید و رها کنید ...
          </p>
        </div>
      )}

      {/* بخش آپلود / آپلود شده */}
      {(status === "uploading" || status === "uploaded") && (
        <div className="upload-result bg_color_white rounded-1 d-flex justify-content-between align-items-center px-2 px-md-3 ">
        <div className="left d-flex align-items-center gap-2">
  {/* wrapper دایره و آیکون */}
  <div className="icon-wrapper position-relative">
    <div
      className="progress-circle"
      style={{ "--progress": progress * 3.6 }}
    ></div>
    <div className="uploaded-icon d-flex align-items-center justify-content-center">
      <PiFileZipDuotone style={{ fontSize: "28px", color: "#FF5050" }} />
    </div>
  </div>

  {/* نام فایل */}
  <p className="filename m-0">{file?.name}</p>
</div>

          {/* دکمه‌ها */}
          <div className="right">
            {/* لغو آپلود */}
            {status === "uploading" && (
              <p
                className="color_orange anjoman_regular fs_14 m-0 cursor_pointer underlinee"
                onClick={cancelUpload}
              >
                لغو
              </p>
            )}

            {/* دانلود و حذف فایل */}
            {status === "uploaded" && (
              <div className="button-container d-flex gap-2">
                <span
                  className="d-flex align-items-center cursor_pointer"
                  onClick={downloadFile}
                >
                  <FiDownload style={{ fontSize: "20px" }} />
                </span>
                <span
                  className="d-flex align-items-center cursor_pointer"
                  onClick={deleteFile}
                >
                  <FiTrash2 style={{ fontSize: "20px", color: "#FF5050" }} />
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
