"use client";
import React, { useState, useContext } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { RiHome2Line } from "react-icons/ri";
import { AuthContext } from "@/context/AuthContext";
import { CartContext } from "@/context/cartContext";
import "./style.css";

export default function DownMenu({setIsSideMenuOpen}) {

  const pathname = usePathname();
  const { isLogin } = useContext(AuthContext);
  const {listCount}=useContext(CartContext)

  return (
    <div className="d-flex justify-content-between align-items-center item-container down-menu-container ">
      
      
      <Link className={`text-decoration-none fs_24 d-flex flex-column justify-content-center align-items-center item-container ${pathname === "/" ? "active anjoman_semibold" : "not-active anjoman_medium"}`} href="/">
        <span className="d-flex justify-content-center align-items-center"><RiHome2Line /></span>
        <p className="fs_12  m-0 title">خانه</p>
      </Link>

      <div
        className="text-decoration-none color_white fs_22 d-flex flex-column justify-content-center align-items-center item-container cursor_pointer not-active"
        onClick={() => setIsSideMenuOpen(true)}
      >
        <span className="d-flex justify-content-center align-items-center"><SlMenu /></span>
        <p className="fs_12 anjoman_medium m-0 title">منو</p>
      </div>

      <Link
  className={`text-decoration-none color_white fs_22 d-flex flex-column justify-content-center align-items-center item-container position-relative ${
    pathname.includes("cart") ? "active anjoman_semibold" : "not-active anjoman_medium"
  }`}
  href="/cart"
>
  <span className="d-flex justify-content-center align-items-center position-relative">
    <BsCart2 />
    {listCount > 0 && (
      <span className="count fs_14 anjoman_num_medium color_white">
        {listCount}
      </span>
    )}
  </span>
  <p className="fs_12 m-0 title">سبد خرید</p>
</Link>

      <Link className={`text-decoration-none color_white fs_22 d-flex flex-column justify-content-center align-items-center item-container ${(pathname.includes("login") || pathname.includes("register") || pathname.includes("userpanel")) ? "active anjoman_semibold" : "not-active anjoman_medium"}`} href={isLogin ? "/userpanel" : "/login"}>
        <span className="d-flex justify-content-center align-items-center"><FiUser /></span>
        <p className="fs_12  m-0 title">{isLogin ? "پنل کاربری" : "ورود"}</p>
      </Link>
    </div>
  );
}
