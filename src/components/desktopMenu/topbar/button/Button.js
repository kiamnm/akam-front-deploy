"use client"
import React,{useState} from "react";
import Link from "next/link";
import "./style.css";

export default function Button() {
    const [count,setCount]=useState(5)
    const [isLogin,setIsLogin]=useState(true)
  return (
    <div className="topbar-btn-container d-flex align-items-center">
      <Link
        href="/cart"
        className="cart bg_color_white d-inline-block position-relative"
      >
        <img src="/images/cart-icon.svg" alt="سبد خرید" />
        {count>0 && (
            <span className="cart-badge bg_color_orange fs_10 d-flex justify-content-center align-items-center position-absolute  ">{count}</span>
        )}
      </Link>

      <Link
        href="/login"
        className="login bg_color_orange d-flex align-items-center text-decoration-none"
      >
        <img src="/images/login-icon.svg" alt="ورود" />
        <p className="p-0 m-0 color_white anjoman_regular fs_14">
          {isLogin?"ورود | عضویت":"پنل کاربری"}
        </p>
      </Link>
    </div>
  );
}
