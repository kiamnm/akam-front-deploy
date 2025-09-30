"use client"
import React,{useContext,useRef,useEffect} from "react";
import "./style.css";
import { ticketContext } from "@/context/userPanel/Ticket";

export default function TicketSort({ sortButtonRef }) {
    const {sortStatus,setSortStatus,isSortOpen,setIsSortOpen}=useContext(ticketContext)
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
    <div ref={sortRef} className="ticket-sort-container bg_color_white d-flex flex-column gap-1 ps-3">
      <p className="m-0 fs_12 anjoman_semibold py-1 title">مرتب سازی</p>

      <label htmlFor="newest" className="radio-container ">
        <input id="newest" type="radio" name="ticketSort" value="newest" onChange={handleChange} checked={sortStatus === "newest"}  />
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">جدیدترین</span>
      </label>

      <label htmlFor="oldest" className="radio-container">
        <input id="oldest" type="radio" name="ticketSort" value="oldest" onChange={handleChange}/>
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">قدیمی‌ترین</span>
      </label>

      <label htmlFor="answered" className="radio-container">
        <input id="answered" type="radio" name="ticketSort" value="answered" onChange={handleChange}/>
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">پاسخ داده شده</span>
      </label>

      <label htmlFor="review" className="radio-container">
        <input id="review" type="radio" name="ticketSort" value="review" onChange={handleChange}/>
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">در حال بررسی</span>
      </label>
      <label htmlFor="closed" className="radio-container">
        <input id="closed" type="radio" name="ticketSort" value="closed" onChange={handleChange}/>
        <span className="radio-circle"></span>
        <span className="fs_12 anjoman_regular">بسته شده</span>
      </label>
    </div>
  );
}
