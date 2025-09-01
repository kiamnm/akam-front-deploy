"use client";
import React, { useState, useContext } from "react";
import "./style.css";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import isValidate from "./validation";
import { RegisterContext } from "@/context/RegisterContext";
import fetchForm from "../../utils/register/fetchForm";

export default function RegisterForm() {
  const { phone, setPhone, setSixDigitShow, setSecondsLeft,setOtpError,setOtp} =
    useContext(RegisterContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [repeatedPassErr, setRepeatedPassErr] = useState("");
  const [pending, setPending] = useState(false);
  const [fetchErr, setFetchErr] = useState("");

  const handleClickSubmit = async () => {
    setOtpError("")
    setOtp(["", "", "", "", "", ""])
    setSecondsLeft(15)
    const isValid = isValidate(
      phone,
      password,
      repeatPassword,
      setPhoneErr,
      setPassErr,
      setRepeatedPassErr
    );
    if (isValid) {
      //form mire backend va age moshkeli nadashtebashe ok barmigarde va mirim vase verificatione mobile
      const result =await fetchForm(
        phone,
        password,
        repeatPassword,
        setPending,
        setFetchErr
      );
      if (result) {
        setSixDigitShow(true);
        setSecondsLeft(15);
      }
    }
  };
  return (
    <div className="mt-5 m-auto register-form-container bg_color_white p-3">
      <p className="anjoman_bold fs_14">ثبت نام کاربر جدید</p>
      <div className="input-container ">
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="register-input"
          type="text"
          placeholder="شماره موبایل"
        />
        <p className="error fs_12 anjoman_light color_orange">{phoneErr}</p>
      </div>

      <div className="input-container ">
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="register-input"
          type={showPassword ? "text" : "password"}
          placeholder="رمز عبور"
        />
        <span
          className="password-toggle-icon "
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        <p className="error fs_12 anjoman_light color_orange">{passErr}</p>
      </div>

      <div className="input-container">
        <input
          value={repeatPassword}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
          className="register-input"
          type={showRepeatPassword ? "text" : "password"}
          placeholder="تکرار رمز عبور"
        />
        <span
          className="password-toggle-icon"
          onClick={() => setShowRepeatPassword((prev) => !prev)}
        >
          {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        <p className="error fs_12 anjoman_light color_orange">
          {repeatedPassErr}
        </p>
      </div>

      <button
        onClick={handleClickSubmit}
        className="w-100 py-2 color_white bg_color_orange anjoman_regular fs_16"
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
      <p className="m-0 error fs_14 anjoman_regular color_orange pt-3">{fetchErr}</p>
      <div className="d-flex justify-content-center pt-3">
        <p className="fs_14 anjoman_regular">حساب کاربری دارید؟ </p>
        <Link
          className="fs_14 anjoman_regular text-decoration-underline color_orange "
          href="/login"
        >
          ورود
        </Link>
      </div>
    </div>
  );
}
