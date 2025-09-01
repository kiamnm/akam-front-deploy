"use client"
import React,{useState,useContext} from "react";
import Link from "next/link";
import "./style.css";
import { AuthContext } from "@/context/AuthContext";
import { CartContext } from "@/context/cartContext";
import Tooltip from '@mui/material/Tooltip';
export default function Button() {
  const {listCount}=useContext(CartContext)
   
    const {isLogin}=useContext(AuthContext)
  return (
    <div className="topbar-btn-container d-flex align-items-center">
      <Tooltip title="سبد خرید" placement="right" componentsProps={{
    tooltip: {
      sx: {
        fontFamily: "anjomanRegular",   
        fontSize: "12px",
        
      },
    },
  }}>
      <Link
        href="/cart"
        className="cart bg_color_white d-inline-block position-relative d-flex align-items-center"
      >
        <img src="/images/cart-icon.svg" alt="سبد خرید" />
        {listCount>0 && (
            <span className="cart-badge bg_color_orange fs_10 anjoman_num_regular d-flex justify-content-center align-items-center position-absolute  ">{listCount}</span>
        )}
      </Link>
      </Tooltip>

      <Link
        href={isLogin?"/userpanel/orders":"/register"}
        className="login bg_color_orange d-flex align-items-center text-decoration-none"
      >
        <img src="/images/login-icon.svg" alt="ورود" />
        <p className="p-0 m-0 color_white anjoman_medium fs_12">
          {!isLogin?"ورود | عضویت":"پنل کاربری"}
        </p>
      </Link>
    </div>
  );
}
