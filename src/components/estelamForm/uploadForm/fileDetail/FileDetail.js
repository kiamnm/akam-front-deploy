import React, { useContext } from "react";
import "./style.css";
import { FormContext } from "../../context/FormContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuFileSymlink } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

export default function FileDetail() {
  const { file, setFile } = useContext(FormContext);
const handleDownload = () => {
  if (!file) return;

  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url); // آزاد کردن حافظه
};
  const handleRemove = () => {
    setFile(null);
  };
  return (
    <div className="file-detail-container d-flex justify-content-between align-items-center ">
      {console.log(file)}
      <div className="right d-flex">
        <span onClick={handleRemove} className="cursor_pointer">
          <Tooltip
            title="حذف"
            placement="bottom"
            PopperProps={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 4], // مقدار دوم فاصله عمودی رو کم یا زیاد می‌کنه
                  },
                },
              ],
            }}
            componentsProps={{
              tooltip: {
                sx: {
                  fontFamily: "anjomanRegular",
                  fontSize: "12px",
                },
              },
            }}
          >
            {" "}
            <FaRegTrashAlt style={{ fontSize: "18px", color: "#4b4b4b" }} />
          </Tooltip>
          
        </span>

        <span className="cursor_pointer" onClick={handleDownload}>
          <Tooltip
            title="دانلود"
            placement="bottom"
            PopperProps={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 4], // مقدار دوم فاصله عمودی رو کم یا زیاد می‌کنه
                  },
                },
              ],
            }}
            componentsProps={{
              tooltip: {
                sx: {
                  fontFamily: "anjomanRegular",
                  fontSize: "12px",
                },
              },
            }}
          >
            {" "}
            <MdOutlineFileDownload
              style={{ fontSize: "24px", color: "#4b4b4b" }}
            />
          </Tooltip>
        </span>
      </div>
      <div className="left d-flex justify-content-center align-items-center">
        <p className="p-0  m-0 fs_13 anjoman_regular color_text">{file.name}</p>
        <span className="d-flex align-items-center justify-content-center">
          <LuFileSymlink style={{ fontSize: "22px", color: "#4b4b4b" }} />
        </span>
      </div>
    </div>
  );
}
