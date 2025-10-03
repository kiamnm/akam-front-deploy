"use client";
import React, { useEffect, useState, useContext } from "react";
import "./style.css";

import { MdClose } from "react-icons/md";
import Digits from "./digits/Digits";
import baseUrl from "@/utils/baseUrl";
import fetchPhoneOtp from "@/utils/login/fetchPhoneOtp";
import { AuthContext } from "@/context/AuthContext";
import fetchPhoneForm from "@/utils/login/fetchPhoneForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchOtp from "@/utils/register/fetchOtp";

export default function ProFullScreenOtp({
  setIsOtpShow,
  phoneNumber,
  handleIsOtpTrue,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [pending, setPending] = useState(false);
  const [counter, setCounter] = useState(30);
  const { setIsLogin, setUserRole, setUser, login } = useContext(AuthContext);
  useEffect(() => {
    // هنگام mount
    document.body.style.overflow = "hidden";

    // هنگام unmount
    return () => {
      document.body.style.overflow = "auto"; // یا "unset"
    };
  }, []);
  console.log("alan be vojod omad");

  const handleClickSubmit = async () => {
    const isComplete = otp.every((digit) => digit !== "");
    if (!isComplete) {
      setOtpError("* لطفا کد را وارد نمایید.");
    } else {
      console.log("trueeeeeeeee");
      const user = await fetchOtp(otp, phoneNumber, setOtpError, setPending);

      if (user) {
        login(user);
        handleIsOtpTrue();
        setIsOtpShow(false);
      }
    }
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };
  const sendOtpAgain = async () => {
    
    const isOtpSend = await fetchPhoneForm(phoneNumber, false, setPending);
    if (isOtpSend) {
      setCounter(20);
      toast.success("کد جدید ارسال شد", {
        position: "bottom-right",
      });
    } else {
      toast.error("خطایی رخ داده است !", {
        position: "bottom-right",
      });
    }
  };
  useEffect(() => {
    if (counter === 0) return;

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div
      className={`${"d-flex"} fullscreen-otp-container d-flex justify-content-center align-items-center`}
    >
      <div className="layout"></div>
      <div className="six-digit-modal-container  py-3 py-md-4 px-4 d-flex flex-column justify-content-center align-items-start">
        <span
          onClick={() => {
            setIsOtpShow(false);
          }}
          className="mb-4 cursor_pointer"
        >
          <MdClose style={{ fontSize: "20px" }} />
        </span>

        <p className="fs_14 anjoman_bold m-0 mb-2">کد تایید را وارد کنید</p>
        <p className="anjoman_num_regular color_text fs_14 m-0 mb-4">
          لطفا کد ارسال شده به شماره {phoneNumber} را وارد کنید.
        </p>
        <div className="digits m-0 align-self-center mb-3">
          <Digits otp={otp} setOtp={setOtp}></Digits>
        </div>
        <p className="fs_12 anjoman_regular color_orange ">{otpError}</p>

        <p className="fs_12 anjoman_num_regular m-0 mb-4">
          {counter > 1 && (
            <span className="d-flex gap-2">
            <span>
              {formatTime(counter)}
              
              </span>
              <span>
                             مانده تا دریافت کد جدید

              </span>
            </span>
            
             
          )}
          {counter < 1 && (
            <span className="d-flex gap-1 cursor_pointer ">
              <span>
کدی دریافت نکردید؟
                </span>
              <span className="color_orange underline" onClick={sendOtpAgain}>
                دریافت کد جدید
                </span>
                
                 
            </span>
          )}
        </p>
        <button
          onClick={handleClickSubmit}
          className="fs_14 anjoman_light w-100 py-2 bg_color_orange color_white"
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
            setIsOtpShow(false);
          }}
        >
          ویرایش شماره
        </p>
      </div>
    </div>
  );
}
