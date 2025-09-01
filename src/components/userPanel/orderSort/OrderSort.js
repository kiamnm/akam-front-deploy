"use client"
import React,{useContext,useRef,useEffect} from "react";
import "./style.css";
import { orderContext } from "@/context/userPanel/Order";

export default function OrderSort({ sortButtonRef }) {
    const {sortStatus,setSortStatus,isSortOpen,setIsSortOpen}=useContext(orderContext)
    const handleChange = (e) => {
    setSortStatus(e.target.value); // مقدار انتخاب شده را به context بفرست
  };
  const sortRef=useRef()
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (
  sortRef.current &&
  !sortRef.current.contains(event.target) &&
  !(sortButtonRef?.current && sortButtonRef.current.contains(event.target))
) {
  setIsSortOpen(false);
}
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsSortOpen, sortButtonRef]);
  return (
    <div ref={sortRef} className="order-sort-container bg_color_white d-flex flex-column gap-1 ps-3">
      <p className="m-0 fs_12 anjoman_semibold py-1 title">مرتب سازی</p>

      <label htmlFor="newest" className="radio-container ">
        <input id="newest" type="radio" name="orderSort" value="newest" onChange={handleChange} checked={sortStatus === "newest"}  />
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">جدیدترین</span>
      </label>

      <label htmlFor="oldest" className="radio-container">
        <input id="oldest" type="radio" name="orderSort" value="oldest" onChange={handleChange}/>
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">قدیمی‌ترین</span>
      </label>

      <label htmlFor="price" className="radio-container">
        <input id="price" type="radio" name="orderSort" value="price" onChange={handleChange}/>
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">قیمت</span>
      </label>

      <label htmlFor="items" className="radio-container">
        <input id="items" type="radio" name="orderSort" value="items" onChange={handleChange}/>
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">تعداد اقلام</span>
      </label>
    </div>
  );
}
