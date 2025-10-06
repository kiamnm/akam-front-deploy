"use client";
import React, { useState, useContext } from "react";
import "./style.css";
import { LoginContext } from "@/context/LoginContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import validation from "./validation";
import fetchPassForm from "./../../../utils/login/fetchPassForm";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { successNotif } from "@/utils/notif";

export default function WithPass({
  setFormState,
  phone,
  setPhone,
  setIsOtpShow,
}) {
  const router = useRouter();

  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);

  const [phoneErr, setPhoneErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const handleClickSubmit = async () => {
    const isValid = validation(phone, password, setPhoneErr, setPassErr);
    if (isValid) {
      ///setIsOtpShow ra be tabe midim ke age ehraz hoviat nasode bod otp neshon dade beshe
      const user = await fetchPassForm(
        phone,
        password,
        setPending,
        setPassErr,
        setIsOtpShow
      );
      if (user) {
        successNotif("با موفقیت وارد شدید. در حال انتقال به پنل کاربری ...");
        login(user);
        router.push("/userpanel/orders");
      }
    }
  };

  return (
    <div className=" m-auto login-pass-container bg_color_white p-3">
      <p className="anjoman_bold fs_14">ورود به آکام با رمز عبور</p>
      <div className="input-container ">
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="login-input"
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
          className="login-input"
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

      <button
        onClick={handleClickSubmit}
        className="w-100 py-2 color_white bg_color_orange anjoman_regular fs_16"
      >
        {pending ? (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          "ورود"
        )}
      </button>
      <div className="d-flex justify-content-center pt-4 pb-2 ">
        <p className="fs_14 anjoman_regular m-0 ">حساب کاربری ندارید؟ </p>
        <Link
          className="fs_14 anjoman_regular text-decoration-underline color_orange "
          href="/register"
        >
          ساخت حساب کاربری
        </Link>
      </div>
      <div className="d-flex justify-content-center ">
        <p
          onClick={() => {
            setFormState("phone");
          }}
          className="fs_14 anjoman_regular text-decoration-underline color_orange cursor_pointer p-0"
        >
          ورود با رمز یک بارمصرف
        </p>
      </div>
    </div>
  );
}
