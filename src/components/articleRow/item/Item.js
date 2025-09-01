import React from "react";
import "./style.css";
import { FiClock } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import convertToShamsi from "@/utils/convertToShamsi";

export default function Item({ item }) {
  return (
    <div className="item-container ">
      <div className="img-container">
        <img src={item.coverSrc} alt="" />
      </div>
      <div className="detail-container  ">
        <div className="date-container d-flex align-items-center color_white ">
          <span className="d-flex align-items-center">
            <FiClock style={{ fontSize: "16px" }} color="white" />
          </span>
          
          <p className="p-0 m-0 color_white anjoman_num_regular fs_11  ">
            {convertToShamsi(item.updatedAt).shamsiDate}
          </p>
        </div>
        <p className="title color_white fs_14 anjoman_medium m-0 p-0">
        {item.title}
        </p>
        <p className="description color_white fs_12 anjoman_light m-0 p-0">
          {item.shortDescription}
        </p>
        
        <Link
          href={`/blog/each/${item._id}`}
          className="text-center button-container cursor_pointer text-decoration-none d-flex justify-content-center  "
        >
          
            <span className=" color_white article-btn-text d-flex align-items-center fs_14 anjoman_medium">
              مطالعه مقاله
            </span>
            <span className="d-flex align-items-center">
               <MdOutlineKeyboardArrowLeft
              className="article-btn-text"
              style={{ fontSize: "22px" }}
            />
            </span>
           
      
        </Link>
      </div>
    </div>
  );
}
