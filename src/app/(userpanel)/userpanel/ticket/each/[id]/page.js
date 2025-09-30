import React from "react";
import "./style.css";
import { BiSupport } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";

export default function page() {
  return (
    <div className="px-3 py-3 ticket-message-page-container">
      <div className="px-3 py-3 bg_color_white rounded-2">
        <div className="title-container d-flex justify-content-between">
          <div className="right d-flex gap-3 align-items-center">
            <span className="support d-flex  justify-content-between bg_color_light_gray rounded-circle p-2">
              <BiSupport style={{ fontSize: "30px" }} />
            </span>
            <div className="d-flex justify-content-between flex-column ">
              <p className="fs_16 anjoman_medium m-0 ">پیگیری سفارش</p>
              <p className="fs_14 anjoman_regular color_text m-0">#14414</p>
            </div>
          </div>
          <div className="left d-flex gap-3">
            <div className="close align-items-center d-flex">
              {" "}
              <p className="fs_14 anjoman_regular m-0">بستن تیکت</p>
            </div>
            <div className="back d-flex align-items-center gap-1  cursor_pointer">
              <p className="fs_14 anjoman_regular m-0 ">بازگشت</p>
              <span className="d-flex align-items-center">
                <IoChevronBack />
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
