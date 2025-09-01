"use client";
import React, { useContext, useState } from "react";
import "./style.css";
import { FormContext } from "../../context/FormContext";
import formValidation from "../validation/validation";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

import fetchCreateOrderManualForm from "@/utils/order/fetchCreateOrderManualForm";
import ProFullScreenOtp from "@/components/proFullScreenOtp/ProFullScreenOtp";
import fetchPhoneForm from "@/utils/login/fetchPhoneForm";
import { successNotif, failNotif } from "@/utils/notif";
export default function SubmitBtn() {
  const {
    name,
    setName,
    setPhone,
    setDynamicItems,
    setNameError,
    phone,
    setPhoneError,
    dynamicItems,
    setDynamicError,

    isOtpShow,
    setIsOtpShow,
  } = useContext(FormContext);
  const [pending, setPending] = useState(false);
  const { checkAuth } = useContext(AuthContext);
  const sendDataToServer = async () => {
    const result = await fetchCreateOrderManualForm(
      name,
      phone,
      dynamicItems,
      setPending
    );
    if (result) {
      setName("");
      setPhone("");
      setDynamicItems([{ productName: "", amount: "" }]);
      successNotif("فرم با موفقیت ارسال شد.");
    } else {
      failNotif("خطایی در ارسال فرم رخ داد!");
    }
  };
  const clickSend = async () => {
    const isValidate = formValidation(
      name,
      setNameError,
      phone,
      setPhoneError,
      dynamicItems,
      setDynamicError
    );
    if (isValidate === true) {
      const user = await checkAuth();
      if (!user) {
        const isOtpSent = await fetchPhoneForm(
          phone,
          setPhoneError,
          setPending
        );
        if (isOtpSent) {
          setIsOtpShow(true);
        } else {
          failNotif("خطایی در ارسال فرم رخ داد!");
        }
      } else if (user.phone !== phone) {
        setPhoneError("لطفا شماره تماس خودتان را وارد کنید ");
      } else {
        await sendDataToServer();
      }
    }
  };
  return (
    <div className="w-100 d-flex justify-content-center justify-content-lg-end submit-manual-form-btn">
      <button
        onClick={clickSend}
        className="bg_color_orange anjoman_medium fs_14 color_white"
      >
        {pending ? (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          "ثبت"
        )}
      </button>
      {isOtpShow && (
        <ProFullScreenOtp
          setIsOtpShow={setIsOtpShow}
          handleIsOtpTrue={sendDataToServer}
          phoneNumber={phone}
        ></ProFullScreenOtp>
      )}
    </div>
  );
}
