import React from "react";
import "./style.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="contact-info-container d-flex flex-column pt-0 pt-md-4">
      <h1 className=" fs_16 anjoman_bold m-0 pb-4">ارتباط با آکام</h1>
      <div className=" w-100   items-container flex-grow-1 d-flex flex-column">
        <div className="info flex-grow-1 d-flex flex-column justify-content-center bg_color_orange py-3 py-md-0">
          <div className="color_white fs_12 anjoman_bold d-flex   align-items-start pe-3 ">
            <IoLocationOutline style={{ fontSize: "22px" }} />
            <p className="pe-2 m-0">آدرس</p>
          </div>
          <p className="color_white fs_12 anjoman_regular p-0 m-0 pe-3">
             تهران - خیابان پاسداران - خیابان عراقی - کوچه سرو - پلاک6 - مجموعه آهن آکام
          </p>
        </div>
        <div className="info flex-grow-1 d-flex flex-column justify-content-center bg_color_orange py-3 py-md-0">
          <div className="color_white fs_12 anjoman_bold d-flex   align-items-start pe-3 ">
            <MdOutlineEmail style={{ fontSize: "22px" }} />
            <p className="pe-2 m-0">ایمیل</p>
          </div>
          <p className="color_white fs_12 anjoman_regular p-0 m-0 pe-3">
          tfakamgostar@gmail.com
          </p>
        </div>
        <div className="info flex-grow-1 d-flex flex-column justify-content-center bg_color_orange py-3 py-md-0">
          <div className="color_white fs_12 anjoman_bold d-flex   align-items-start pe-3 ">
            <LuPhone style={{ fontSize: "22px" }} />
            <p className="pe-2 m-0">تلفن</p>
          </div>
          <p className="color_white fs_12 anjoman_num-regular p-0 m-0 pe-3">
            021-91001083
          </p>
        </div>
        <div className="info flex-grow-1 d-flex flex-column justify-content-center bg_color_orange py-3 py-md-0">
          <div className="color_white fs_12 anjoman_bold d-flex   align-items-start pe-3 ">
            <FaRegClock style={{ fontSize: "22px" }} />
            <p className="pe-2 m-0">ساعت کاری</p>
          </div>
          <p className="color_white fs_12 anjoman_num_regular p-0 m-0 pe-3">
             شنبه تا چهارشنبه 9 الی 17 -پنجشنبه 9 الی 14
          </p>
        </div>
        <div className="socials-container  d-flex align-items-center justify-content-between  ">
          <div className="social-container bg_color_white p-4 cursor_pointer">
            <FaInstagram style={{ fontSize: "30px" }} />
          </div>
          <div className="social-container bg_color_white p-4 cursor_pointer">
            <PiTelegramLogoDuotone style={{ fontSize: "30px" }} />
          </div>
          <div className="social-container bg_color_white p-4 cursor_pointer">
            <FaWhatsapp style={{ fontSize: "30px" }} />
          </div>
          <div className="social-container bg_color_white p-4 cursor_pointer">
            <IoLogoLinkedin style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
