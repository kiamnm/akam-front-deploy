"use client"
import React,{useContext,useRef,useEffect} from "react";
import "./style.css";
import { orderContext } from "@/context/userPanel/Order";

export default function OrderFilter({ filterButtonRef }) {
    const {setIsFilterOpen,filterStatus,setFilterStatus,}=useContext(orderContext)
    
  const filterRef=useRef()
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        !(filterButtonRef?.current && filterButtonRef.current.contains(event.target))
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsFilterOpen, filterButtonRef]);


  const handleChange = (key) => {
    setFilterStatus(prev => ({
      ...prev,
      [key]: prev[key] === 1 ? 0 : 1
    }))
  }




  return (
    <div ref={filterRef} className="order-filter-container bg_color_white d-flex flex-column gap-1 ps-3">
      <p className="m-0 fs_12 anjoman_semibold py-1 title">فیلتر</p>
<label className="custom-checkbox fs_12 anjoman_regular d-flex align-items-center gap-0">
        <input checked={filterStatus["2"] === 1}
          onChange={() => handleChange("2")} type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text"> پرداخت شده</span>
      </label>


      <label className="custom-checkbox fs_12 anjoman_regular d-flex align-items-center gap-0">
        <input checked={filterStatus["5"] === 1}
          onChange={() => handleChange("5")} type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text">در انتظار شما</span>
      </label>
      


      <label className="custom-checkbox fs_12 anjoman_regular d-flex align-items-center gap-0">
        <input checked={filterStatus["1"] === 1}
          onChange={() => handleChange("1")} type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text"> در حال بررسی</span>
      </label>
      



      <label className="custom-checkbox fs_12 anjoman_regular d-flex align-items-center gap-0">
        <input checked={filterStatus["3"] === 1}
          onChange={() => handleChange("3")} type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text"> منقضی شده</span>
      </label>
      


      <label className="custom-checkbox fs_12 anjoman_regular d-flex align-items-center gap-0">
        <input checked={filterStatus["3"] === 1}
          onChange={() => handleChange("3")} type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text"> لغو شده</span>
      </label>


      <label className="custom-checkbox fs_12 anjoman_regular d-flex align-items-center gap-0">
        <input checked={filterStatus["6"] === 1}
          onChange={() => handleChange("6")} type="checkbox" />
        <span className="checkmark"></span>
        <span className="label-text">فایل ها</span>
      </label>
      
      
    </div>
  );
}
