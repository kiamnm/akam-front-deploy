import React, { useContext, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import "./style.css";
import { FormContext } from "../../context/FormContext";

export default function Modal() {
  useEffect(() => {
    // هنگام mount
    document.body.style.overflow = "hidden";

    // هنگام unmount
    return () => {
      document.body.style.overflow = "auto"; // یا "unset"
    };
  }, []);
  const { setUploadErr, uploadErr } = useContext(FormContext);
  return (
    <div className="upload-form-modal-container">
      <div className="layer"></div>
      <div className="upload-form-modal align-items-center ">
        <div
          onClick={() => {
            setUploadErr("");
          }}
          className="align-self-start cursor_pointer"
        >
          <MdOutlineClose style={{ color: "#4b4b4b", fontSize: "28px",cursor:"pointer" }} />
        </div>
        <div className="warning-container text-center">
          <IoWarningOutline style={{ fontSize: "38px",color:"#ffc107" }} />
        </div>
        <p className="title fs_14 anjoman_medium text-center color_text m-0">{uploadErr}</p>
        <div className="text-center">
          <button
          onClick={() => {
            setUploadErr(false);
          }}
          className="understand fs_12 anjoman_medium px-3 py-2 bg_color_orange color_white"
        >
          متوجه شدم
        </button>
        </div>
        
      </div>
    </div>
  );
}
