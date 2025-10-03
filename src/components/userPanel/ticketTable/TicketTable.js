"use client";
import React, { useContext, useRef, useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { LuClock10 } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { BsFileZip } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import getOrderPhaseUi from "@/utils/userpanel/getOrderPhaseUi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoPricetag } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import convertToShamsi from "@/utils/convertToShamsi";
import { AuthContext } from "@/context/AuthContext";
import { ticketContext } from "@/context/userPanel/Ticket";
import { LuClock4 } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineSubject } from "react-icons/md";




export default function TicketTable() {
  const tableRef = useRef();
  const [height, setHeight] = useState(0);
  const [openMobileCartIndex, setOpenMobileCartIndex] = useState(null);
  const {user}=useContext(AuthContext)

  const {
    activeTickets,
   
    activePage,
    dataPerPage,
    setDataPerPage,
  } = useContext(ticketContext);
  useEffect(() => {
    if (!tableRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(tableRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (height > 350) {
      setDataPerPage(6);
      
    } else if ((300<height) && (height< 350)) {
      setDataPerPage(5);
      
    }else if((255<height) && (height< 300)){
      setDataPerPage(3);
    }else{
      setDataPerPage(2);
    }
  }, [height]);

  const specifyStatusUi=(status)=>{
    if(status===1){
      return {text:"در حال بررسی",class:"review",icon:<LuClock4 style={{fontSize:"18px"}} />}
    }else if(status===2){
return {text:"پاسخ داده شده",class:"answered",icon:<FaRegCircleCheck style={{fontSize:"16px"}} />}
    }else if(status===3){
return {text:"بسته شده",class:"closed",icon:<IoCloseCircleOutline style={{fontSize:"20px"}}  />}
    }
  }
  return (
    <div
      ref={tableRef}
      className=" ticket-table-container  flex-grow-1 mt-3  rounded-2 "
    >
      {/* desktop */}
      <div className="d-none d-lg-block desktop-table-container">
        <table className="table table-striped table-hover  text-center  ">
        <thead className="">
          <tr className="fs_14 anjoman_medium ">
            <th className="align-middle color_orange">ردیف</th>
            <th className="align-middle color_orange">شماره سفارش</th>
            <th className="align-middle color_orange">تاریخ</th>
            <th className="align-middle color_orange">ساعت</th>
            <th className="align-middle color_orange">موضوع</th>
            {/* <th className="align-middle color_orange">مبلغ کل</th> */}
            <th className="align-middle color_orange">وضعیت سفارش</th>
            <th className="align-middle color_orange">مشاهده</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {activeTickets
            .slice((activePage - 1) * dataPerPage, activePage * dataPerPage)
            .map((ticket, index) => {
              console.log(user);
            //   const phase = getOrderPhaseUi(order.phase);
              return (
                <tr key={index}>
                  <td className="anjoman_num_regular fs_12 align-middle">
                    {(activePage - 1) * dataPerPage + index + 1}
                  </td>
                  <td className="fs_12 align-middle">
                    {ticket.identifier}
                  </td>
                  <td className="anjoman_num_regular fs_12 align-middle">
                    {convertToShamsi(ticket.createdAt).shamsiDate}
                  </td>
                  <td className="anjoman_num_regular fs_12 align-middle">
                    {convertToShamsi(ticket.createdAt).shamsiTime}
                  </td>
                  <td className="anjoman_num_regular align-middle">
                    {ticket.subject}
                  </td>
                  <td className="anjoman_num_regular text-center fs_12 align-middle">
                   
                      <div className="d-flex justify-content-center">
                        <div className={`status-container d-flex  gap-2  align-items-center py-1 rounded-1 ${specifyStatusUi(ticket.status).class}`}>
                          <span className="d-flex align-items-center pe-2">{specifyStatusUi(ticket.status).icon}</span>
                        <p className="m-0">{specifyStatusUi(ticket.status).text}</p>
                        </div>
                        
                      </div>
                  </td>
                  {/* <td className="text-center align-middle">
                    <div
                      className={`fs_12 anjoman_medium w-100 phase m-auto py-1 rounded-2 gap-1 d-flex align-items-center pe-1 ${phase.className}`}
                    >
                     <div
                      className={`fs_12 anjoman_medium w-100 phase m-auto py-1 rounded-2 gap-1 d-flex align-items-center pe-1 `}
                    >
                      {phase.icon}
                      {phase.text}
                      test
                    </div>
                  </td> */}
                  <td className="align-middle">
                    <Link
                      href={`/userpanel/ticket/each/?ticketId=${ticket._id}`}
                      className="color_black fs_18 cursor_pointer ps-3"
                    >
                      <Tooltip
                        title="مشاهده"
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
                        <MdOutlineRemoveRedEye />
                      </Tooltip>
                    </Link>
                    
                  </td>
                </tr>
              );
            })}
          {/* اضافه کردن ردیف‌های خالی */}
          {Array.from({
            length:
              dataPerPage -
              activeTickets.slice(
                (activePage - 1) * dataPerPage,
                activePage * dataPerPage
              ).length,
          }).map((_, index) => (
            <tr key={index}>
              <td className="anjoman_num_regular fs_12 "></td>
              <td className="fs_12 "></td>
              <td className="anjoman_num_regular fs_12 "></td>
              <td className="anjoman_num_regular fs_12 "></td>
              <td className="anjoman_num_regular"></td>
              <td className="anjoman_num_regular "></td>
              
              <td className=""></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      {/* desktop */}

      {/* mobile */}
      <div className="mobile-table-container d-block d-lg-none " >
        {activeTickets
  .slice((activePage - 1) * dataPerPage, activePage * dataPerPage)
  .map((ticket, index) => {
    // const phase = getOrderPhaseUi(order.phase);
    const isCartOpen = openMobileCartIndex === ticket.objId;
    return (
      <div
        key={ticket.objId || index}
        className="mobile-order-container bg_color_white rounded-1 px-3 py-3 mb-3"
      >
        <div className="title-container d-flex justify-content-between align-items-center">
          <span className="number anjoman_num_regular">#{(activePage - 1) * dataPerPage + index + 1}</span>
          {/* <div className={`phase-container d-flex justify-content-center align-items-center gap-1 px-1 py-1 status-3 rounded-1 ${phase.className}`}> */}
          
                        <div className={`status-container fs_14 anjoman_regular d-flex  gap-1  align-items-center py-1 rounded-1 ${specifyStatusUi(ticket.status).class}`}>
                          <span className="d-flex align-items-center pe-2">{specifyStatusUi(ticket.status).icon}</span>
                        <p className="m-0">{specifyStatusUi(ticket.status).text}</p>
                        </div>
                        
                      
          <div className="time-container d-flex align-items-center gap-1 ">
            <p className="anjoman_num_regular fs_14 d-flex align-items-center m-0">
              {convertToShamsi(ticket.createdAt).shamsiTime}
            </p>
            -
            <p className="anjoman_num_regular fs_14 d-flex align-items-center m-0">
              {convertToShamsi(ticket.createdAt).shamsiDate}
            </p>
          </div>
          <span className="d-flex cursor_pointer">
            <IoIosArrowDown
              onClick={() => setOpenMobileCartIndex(isCartOpen ? null : ticket.objId)}
              style={{ fontSize: "16px" }}
            />
          </span>
        </div>

        <div
          className="body"
          style={{
            maxHeight: isCartOpen ? "200px" : "0px", // مقدار بزرگ بذار که مطمئن باز شه
            overflow: "hidden",
            transition: "max-height 0.7s ease",
          }}
        >
          <div className="detail-container bg_color_body rounded-1 px-2 py-2 mt-3">
            <div className="order-number-container d-flex justify-content-between mb-2">
              <div className="d-flex align-items-center gap-2 ">
                <span className="d-flex">
                  <IoPricetag />
                </span>
                <span className="color_text anjoman_medium fs_14">
                   شماره تیکت
                </span>
              </div>
              <p className="p-0 anjoman_num_regular fs_14 m-0">{ticket.identifier}</p>
            </div>

            <div className="order-count-container d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center gap-2 ">
                <span className="d-flex">
                  <MdOutlineSubject style={{fontSize:"20px"}} />
                </span>
                <span className="color_text anjoman_medium fs_14">
                   موضوع پیام
                </span>
              </div>
              {/* <p className="p-0 anjoman_num_regular fs_14 m-0">{order.type !== 2 && order.items.length}</p> */}
              {ticket.subject}
            </div>

           
          </div>

          <div className="button-container d-flex justify-content-between mt-3 gap-2">
            <Link
              className="color_white bg_color_orange fs_14 anjoman_regular rounded-1 text-decoration-none cursor_pointer text-center"
              href="#"
            >
              مشاهده
            </Link>
            
          </div>
        </div>
      </div>
    );
  })}


      
      </div>
      
    </div>
  );
}






