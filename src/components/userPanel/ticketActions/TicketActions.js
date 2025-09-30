"use client";
import React, { useContext,useRef } from "react";
import "./style.css";
import { BiSortDown } from "react-icons/bi";
import { TbFilter } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { ticketContext } from "@/context/userPanel/Ticket";
import TicketSort from "../ticketSort/TicketSort";



export default function TicketActions() {
  const { serachValue, setSearchValue, isSortOpen, setIsSortOpen} =
    useContext(ticketContext);
    
    const sortButtonRef = useRef();
    
  return (
    <div className=" mt-3 d-flex justify-content-between align-items-center tickets-action-container gap-4 gap-lg-4 position-relative">
      <div className="input-container flex-grow-1 position-relative rounded-2">
        <input
          value={serachValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="جستجو تیکت"
          className="w-100 rounded-2 pe-5 anjoman_num_regular fs_14"
          type="text"
        />
        <span className="position-absolute search-icon fs_22">
          <IoMdSearch />
        </span>
      </div>
      <div className="d-flex gap-3 gap-lg-3">
         <Link
        href={"/userpanel/ticket/create"}
        className="button fs_12 anjoman_regular bg_color_orange rounded-1 color_white d-flex justify-content-center align-items-center px-2 gap-1 cursor_pointer item text-decoration-none"
      >
        {" "}
        <IoMdAdd style={{ color: "white", fontSize: "20px" }} />
        
      </Link>
      
      <div
        className="sort-container fs_22 bg_color_white px-2 rounded-1 d-flex justify-content-center align-items-center cursor_pointer"
        ref={sortButtonRef}
        onClick={() => {
          setIsSortOpen((prev) => !prev);
        }}
      >
        <BiSortDown />
      </div>
      </div>
     
      {/* <div ref={filterButtonRef} onClick={() => {
          setIsFilterOpen((prev) => !prev);
        }} className="filter fs_22 bg_color_white px-2 rounded-1 d-flex justify-content-center align-items-center cursor_pointer">
        <TbFilter />
      </div> */}
      <div
        className={`sort-filter-detaill position-absolute rounded-1 px-2 pb-2 pt-1 bg_color_white ${
          isSortOpen ? "open" : ""
        } `}
      >
        <TicketSort sortButtonRef={sortButtonRef}></TicketSort>
      </div>


      {/* <div
        className={`sort-filter-detaill position-absolute rounded-1 px-2 pb-2 pt-1 bg_color_white ${
          isFilterOpen ? "open" : ""
        } `}
      >
        <OrderFilter filterButtonRef={filterButtonRef}></OrderFilter>
      </div> */}
    </div>
  );
}
