"use client";
import React from "react";
import "./style.css";
import { LuClock5 } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuPrinter } from "react-icons/lu";
import convertToShamsi from "@/utils/convertToShamsi";
import Tooltip from "@mui/material/Tooltip";
import { exportToExcel } from "@/utils/products/downloadExcell";
export default function ProductTableTitleInfo({
  majorCategory,
  minorCategory,
  factory,
  time,
  dataForExcell
}) {
  const { shamsiDate, shamsiTime } = convertToShamsi(time);
  return (
    <div className="table-detail-title px-3 d-flex justify-content-between align-items-center py-3 mt-2">
      <div className="right d-flex align-items-center gap-2 gap-md-3 ">
        <div className="p-0 m-0 fs_12 anjoman_bold d-flex flex-column flex-md-row">
          <div className="d-flex">
            <p className="ps-1 p-0 m-0">{majorCategory}</p>
            <p className="ps-1 p-0 m-0">{minorCategory}</p>
          </div>

          <p className="ps-1 p-0 m-0 color_orange">{factory}</p>
        </div>
        <div className="d-flex align-items-center fs_12 anjoman_light gap-2 ">
          <span className="d-flex align-items-center">
            <LuClock5 style={{ fontSize: "16px" }} />
          </span>
          <p className="p-0 m-0 d-flex align-items-center text-nowrap">
            آخرین به روزرسانی :&nbsp;
            <span className="d-flex flex-column  flex-md-row  align-items-center p-0 m-0">
              <span className="anjoman_num_light p-0  m-0 text-nowrap">
                {shamsiDate}
              </span>
              <span className="anjoman_num_light p-0 m-0 pe-2 ps-3">
                {shamsiTime}
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className="left d-flex gap-3 me-2">
        <Tooltip
          title="دانلود "
          placement="right"
          componentsProps={{
            tooltip: {
              sx: {
                fontFamily: "anjomanRegular",
                fontSize: "12px",
              },
            },
          }}
        >
          <span onClick={()=>{exportToExcel(dataForExcell)}} className="d-flex align-items-center">
            <MdOutlineFileDownload
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          </span>
        </Tooltip>
        <Tooltip
          title="پرینت"
          placement="right"
          componentsProps={{
            tooltip: {
              sx: {
                fontFamily: "anjomanRegular",
                fontSize: "12px",
              },
            },
          }}
        >
          <span
  className="d-none d-md-flex align-items-center"
  onClick={() => window.print()}
  style={{ cursor: "pointer" }}
>
  <LuPrinter style={{ fontSize: "20px" }} />
</span>
        </Tooltip>
      </div>
    </div>
  );
}
