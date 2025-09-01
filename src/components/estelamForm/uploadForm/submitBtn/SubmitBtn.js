import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import "./style.css";
import formValidation from "../validation/validation.js";
import { AuthContext } from "@/context/AuthContext";
import fetchCreateOrderFromUpload from "@/utils/order/fetchCreateOrderFromUpload";

import fetchPhoneForm from "@/utils/login/fetchPhoneForm";
import ProFullScreenOtp from "@/components/proFullScreenOtp/ProFullScreenOtp";
import { successNotif, failNotif } from "@/utils/notif";
export default function SubmitBtn() {
  const {
    file,
    setFile,
    name,
    setName,
    setNameError,
    phone,
    setPhone,
    setPhoneError,
    explanation,

    setExplanationError,

    setExplanation,
    isOtpShow,
    setIsOtpShow,
  } = useContext(FormContext);
  const { checkAuth } = useContext(AuthContext);
  const [pending, setPending] = useState(false);
  const sendDataToServer = async () => {
    const result = await fetchCreateOrderFromUpload(
      name,
      phone,
      explanation,
      file,
      setPending
    );
    if (result) {
      setFile(null);
      setExplanation("");
      setPhone("");
      setName("");
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
      explanation,
      setExplanationError
    );
    if (isValidate === true) {
      const user = await checkAuth();
      if (user) {
        if (user.phone !== phone) {
          setPhoneError("لطفا شماره تماس خود را وارد کنید.");
        } else {
          sendDataToServer();
        }
      } else {
        const isOtpSend = await fetchPhoneForm(phone, false, setPending);
        if (isOtpSend) {
          setIsOtpShow(true);
        } else {
          failNotif("لطفا با پشتیبانی تماس بگیرید !");
        }
      }
    }
  };
  return (
    <div className="w-100 d-flex justify-content-center justify-content-lg-end submit-upload-form-btn  ">
      <button
        disabled={!file}
        className={`bg_color_orange anjoman_medium fs_14 px-5 ${
          !file ? "disable" : ""
        } `}
        onClick={clickSend}
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
