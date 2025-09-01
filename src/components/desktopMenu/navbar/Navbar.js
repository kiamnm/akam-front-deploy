"use client";
import React, { useState } from "react";
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


 

  return (
    <div className="position-relative desktop-navbar-container ">
      <div className="navbar-line d-flex justify-content-between align-items-center">
        <div className="right d-flex">
         <div
  className="dropdown-wrapper"
  onMouseEnter={() => setIsDropdownShow(true)}
  onMouseLeave={() => {
    setIsDropdownShow(false);
    setSelectedSubMenuIndex(null);
  }}
>
            <div
            
            
            className="navbar-item anjoman_regular fs_14 cursor_pointer color_text d-flex "
          
          >
            محصولات
            <span className="d-flex align-items-center">
              <MdOutlineKeyboardArrowDown className={ `product-arrow ${isDropdownShow?"arrow-active":""}`} style={{fontSize:"20px",}} />
            </span>
            
          </div>
          {isDropdownShow && (
        <div
        
          className="sub-menu position-absolute d-flex flex-column  "
          
  
        >
          <div className="d-flex w-100 ">
            <div className="d-flex flex-column w-100 ">
              {subMenu.map((item, index) => (
                <div
                  key={index}
                  className="sub-menu-item d-flex justify-content-between align-items-center    anjoman_regular fs_14 color_white cursor_pointer "
                  onMouseEnter={() => setSelectedSubMenuIndex(index)}
                >
                  <div className="d-flex justify-content-between align-items-center ">
                    <div>
                      {item.iconSvg}
                    </div>
                    
                    <p className=" ">{item.title}</p>
                  </div>
                  <MdOutlineKeyboardArrowLeft
                    className="arrow"
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
                    onClick={()=>{setIsDropdownShow(false)}}
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
          
          {navbarItem.map((item, index) => (
            <Link
            onMouseEnter={() => setIsDropdownShow(false)}
              href={item.href}
              key={index}
              className={`navbar-item anjoman_regular fs_14 text-decoration-none color_text ${item.responsive}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="left d-flex align-items-center phone-container">
          <div className="d-flex flex-column align-items-center">
            <p className="m-0 anjoman_num_bold fs_14"> 021-91001083 </p>
            <p className="m-0 anjoman_regular fs_10 text-end ">تماس با کارشناسان</p>
          </div>
          
          
          <FiPhoneCall style={{color:"#FF5050",fontSize:"26px"}} />
        </div>
      </div>

      
    </div>
  );
}
