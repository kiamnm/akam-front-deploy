"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { navbarItem } from "./data";
import { subMenu } from "./data";
import "./style.css";
import { FiPhoneCall } from "react-icons/fi";

// ... سایر importها

export default function Navbar() {
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const [selectedSubMenuIndex, setSelectedSubMenuIndex] = useState(null);
  const subMenuRef = useRef(null); // اینجا ref ساختیم
  const productRef = useRef(null);

  // ✅ کلیک بیرونی
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target) &&
        !productRef.current.contains(event.target)
      ) {
        setIsDropdownShow(false);
        setSelectedSubMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ...

  return (
    <div className="position-relative desktop-navbar-container ">
      <div className="navbar-line d-flex justify-content-between align-items-center">
        <div className="right d-flex">
          {console.log(isDropdownShow)}
          <div
            onClick={() => setIsDropdownShow((prev) => !prev)}
            className="navbar-item anjoman_light fs_14 color_dark cursor_pointer"
            ref={productRef}
          >
            محصولات
            <MdOutlineKeyboardArrowDown />
          </div>
          {navbarItem.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`navbar-item anjoman_light fs_14 text-decoration-none color_dark ${item.responsive}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="left d-flex align-items-center ">
          <p className="m-0 anjoman_bold fs_18"> 91001083- </p>
          <p className="m-0 anjoman_regular fs_12 ps-2"> 021 </p>
          <FiPhoneCall style={{color:"#FF5050",fontSize:"26px"}} />
        </div>
      </div>

      {isDropdownShow && (
        <div
          ref={subMenuRef}
          className="sub-menu position-absolute d-flex flex-column  "
          onMouseLeave={() => setSelectedSubMenuIndex(null)}
        >
          <div className="d-flex w-100">
            <div className="d-flex flex-column w-100">
              {subMenu.map((item, index) => (
                <div
                  key={index}
                  className="sub-menu-item d-flex justify-content-between align-items-center    mb-2 anjoman_regular fs_14 color_white cursor_pointer "
                  onMouseEnter={() => setSelectedSubMenuIndex(index)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    {item.iconSvg}
                    <p className=" ">{item.title}</p>
                  </div>
                  <MdOutlineKeyboardArrowLeft
                    className="test"
                    style={{ fontSize: "24px" }}
                  />
                </div>
              ))}
            </div>

            {selectedSubMenuIndex !== null && (
              <div className="sub-sub-menu d-flex flex-column ">
                <div className="bg_color_dark "></div>
                {subMenu[selectedSubMenuIndex].subSubMenu.map((sub, i) => (
                  <Link
                    key={i}
                    className="anjoman_light fs_14 text-decoration-none color_dark pb-2"
                    href={sub.href}
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
