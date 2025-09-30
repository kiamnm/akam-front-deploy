import React from 'react'
import "./style.css"
import { FaRegClock } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdDensitySmall } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";




export default function TicketStatus() {
  return (
    <div className="ticket-status-container d-flex justify-content-between gap-3">
        <div className="item d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2 gap-lg-3 bg_color_white rounded-2 flex-grow-1 py-3 py-lg-4 box-shadow all">
            <span className="icon-container d-flex justify-content-center align-items-center rounded-circle fs_18 p-2 bg_color_dark color_white "><MdDensitySmall />
</span>
            <p className="fs_14 anjoman_medium m-0"> تمام تیکت‌ها</p>
            <span className="count anjoman_num_extrabold fs_16">8</span>
          </div>
          <div className="item d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2 gap-lg-3 bg_color_white rounded-2 flex-grow-1 py-3 py-lg-4 box-shadow success">
            <span className="icon-container d-flex justify-content-center align-items-center rounded-circle fs_18 p-2 "><FaRegCircleCheck /></span>
            <p className="fs_14 anjoman_medium m-0"> پسخ داده شده</p>
            <span className="count anjoman_num_extrabold fs_16">8</span>
          </div>
          <div className="item d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2 gap-lg-3 bg_color_white rounded-2 flex-grow-1 py-3 py-lg-4 box-shadow waiting">
            <span className="icon-container d-flex justify-content-center align-items-center rounded-circle fs_18 p-2 color_white"><FaRegClock /></span>
            <p className="fs_14 anjoman_medium m-0">در حال بررسی</p>
            <span className="count anjoman_num_extrabold fs_16">8</span>
          </div>
          <div className="item d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2 gap-lg-3 bg_color_white rounded-2 flex-grow-1 py-3 py-lg-4 box-shadow finish">
            <span className="icon-container d-flex justify-content-center align-items-center rounded-circle fs_20 p-2  color_white"><IoCloseCircleOutline />
</span>
            <p className="fs_14 anjoman_medium m-0"> بسته شده</p>
            <span className="count anjoman_num_extrabold fs_16">8</span>
          </div>
        </div>
  )
}
