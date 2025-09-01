"use client";
import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import { FaRegEdit } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";
import { BsCartCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoExitOutline } from "react-icons/io5";
import { AuthContext } from "@/context/AuthContext";
import { IoClose } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { PiNoteLight } from "react-icons/pi";
import { FaRegStickyNote } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";



import Link from "next/link";

export default function Sidebar({ setIsSideBarMenuOpen, isSideBarMenuOpen }) {
  const pathname = usePathname();
  const [identifier, setIdentifier] = useState("Username");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    
    if (user?.username) {
      setIdentifier(user.username);
    } else if (user?.name) {
      setIdentifier(user.name);
    } else if (user?.phone) {
      setIdentifier(user.phone);
    }
  }, [user]);
  useEffect(() => {
    if (isSideBarMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSideBarMenuOpen]);
  return (
    <div
      className={`sidebar-container px-3 py-3 d-flex flex-column justify-content-between ${
        isSideBarMenuOpen ? "open" : "close"
      }`}
    >
      <div className="top">
        <div className="user-info-container d-flex justify-content-between pt-2">
          <div className="d-flex gap-3">
            <div className="img-container  bg_color_body rounded-circle d-flex justify-content-center align-items-center">
              {/* <img className="user-image rounded-circle" src="/images/aboutus.png" alt="" /> */}
              <FaRegUser style={{ fontSize: "24px" }} />
            </div>

            <div className="d-flex flex-column justify-content-between">
              <p className="m-0 color_white anjoman_medium fs_14">
                {identifier}
              </p>
              <p className="m-0 color_white anjoman_regular fs_14">
                کاربر عادی
              </p>
            </div>
          </div>

          <span
            onClick={() => {
              setIsSideBarMenuOpen(false);
            }}
            className="color_white fs_24 cursor_pointer d-block d-lg-none"
          >
            <IoClose />
          </span>
        </div>
        <div className="items-container mt-4 d-flex flex-column gap-2">
          <Link
            href={"/userpanel/orders"}
            className={`item-container text-decoration-none px-2 d-flex align-items-center py-2 cursor_pointer ${
              pathname.includes("orders") ? "rounded-1 bg_color_orange" : ""
            }`}
          >
            <span className="d-flex justify-content-center align-items-center color_white fs_18">
              <RiBillLine />



            </span>
            <p className="m-0 color_white anjoman_medium fs_14 pe-2">سفارشات</p>
          </Link>
          <Link
            href={"/userpanel/profile"}
            className={`item-container text-decoration-none px-2 d-flex align-items-center py-2 cursor_pointer ${
              pathname.includes("profile") ? "rounded-1 bg_color_orange" : ""
            }`}
          >
            <span className="d-flex justify-content-center align-items-center  color_white fs_18">
              <HiOutlineUser />

            </span>
            <p className="m-0 color_white anjoman_medium fs_14 pe-2">
              ویرایش حساب
            </p>
          </Link>
          <Link
            href={"/userpanel/notification"}
            className={`item-container text-decoration-none px-2 d-flex align-items-center py-2 cursor_pointer ${
              pathname.includes("notification")
                ? "rounded-1 bg_color_orange"
                : ""
            }`}
          >
            <span className="d-flex justify-content-center align-items-center color_white fs_18">
              <IoMdNotificationsOutline />
            </span>
            <p className="m-0 color_white anjoman_medium fs_14 pe-2">
              اعلان‌ها
            </p>
          </Link>
          <Link
            href={"/userpanel/ticket"}
            className={`item-container text-decoration-none px-2 d-flex align-items-center py-2 cursor_pointer ${
              pathname.includes("ticket") ? "rounded-1 bg_color_orange" : ""
            }`}
          >
            <span className="d-flex justify-content-center align-items-center color_white fs_18">
              <TiMessage></TiMessage>
            </span>
            <p className="m-0 color_white anjoman_medium fs_14 pe-2">تیکت‌ها</p>
          </Link>
        </div>
      </div>
      <div className="bottom bg_color_white rounded-1 py-1 cursor_pointer px-2 d-flex justify-content-center gap-2 anjoman_medium color_orange fs_14">
        <span className="">
          <IoExitOutline style={{ fontSize: "22px" }} />
        </span>
        خروج از حساب
      </div>
    </div>
  );
}
