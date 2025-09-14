"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { IoClose } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";

export default function ProModal({
  isModalShow,
  setIsModalShow,
  title,
  text,
  firstBtnText,
  secondBtnText,
  icon,
  clickFirstBtn,
  onlyBtnText,
  pending
}) {
  useEffect(() => {
    if (isModalShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalShow]);
  return (
    <div className="promodal-container d-flex justify-content-center align-items-center">
      <div className="overlay"></div>
      <div className="modal-content-container rounded-2 bg_color_white d-flex flex-column px-3 py-3">
        <div className="close-btn-container ">
          <IoClose
            onClick={() => {
              setIsModalShow(false);
            }}
            className="cursor_pointer"
            style={{ fontSize: "24px", color: "FF5050" }}
          />
        </div>
        {icon && (
          <div className="icon-container d-flex justify-content-center  ">
            {icon}
          </div>
        )}

        {title && (
          <div className="title-container text-center fs_16 anjoman_bold color_text mt-2">
            {title}
          </div>
        )}

        <div className="text-container fs_14 anjoman_regular color_text text_justify mt-3">
          {text}
        </div>
        {firstBtnText && secondBtnText && (
          <div className="btn-container d-flex justify-content-between mt-3">
            <div
              onClick={() => {
                clickFirstBtn();
              }}
              className="first-btn fs_14 anjoman_regular rounded-1 color_white px-3 py-1 bg_color_orange cursor_pointer"
            >
              {pending===true ? (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                firstBtnText
                )}
             
            </div>
            <div
              onClick={() => {
                setIsModalShow(false);
              }}
              className="second-btn fs_14 anjoman_regular rounded-1 color_black px-3 py-1 bg_color_gray cursor_pointer "
            >
              {secondBtnText}
            </div>
          </div>
        )}


        {onlyBtnText && (
        <div onClick={()=>{
            setIsModalShow(false)
        }} className="px-2 py-1 fs_14 anjoman_regular bg_color_orange color_white text-center mt-3 cursor_pointer rounded-1"> {onlyBtnText}</div>
        )}
      </div>
    </div>
  );
}
