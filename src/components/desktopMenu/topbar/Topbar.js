import React from "react";
import "./style.css";
import Button from "./button/Button";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi"



export default function Topbar() {
  return (
    <div className="topbar-container d-flex justify-content-between align-items-center  bg_color_gray">
      <div className="right  ">
        <Link
          className="d-flex align-items-center color_dark text-decoration-none logo-text-container"
          href="/"
        >
          <div className="p-0 m-0 ">
            <img src="/images/logo-black.svg" alt="" />
            
          </div>

          <p className="  m-0 anjoman_bold fs_16 color_black  "> آهن آکام</p>

        </Link>
      </div>
      <div className="left d-none d-md-block">
        <Button></Button>
      </div>

      <div className="left d-flex d-md-none align-items-center ">
        <div >
                    <p className="m-0 anjoman_regular fs_12 color_text">تماس با کارشناسان</p>

            <div className="m-0 anjoman_num_bold fs_16 color_text text-decoration-none d-flex"> 
              
              91001083
              <span>-021</span> </div>
          
          
        </div>

        <FiPhoneCall style={{ color: "#FF5050", fontSize: "24px" }} />
      </div>
    </div>
  );
}
