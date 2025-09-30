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
import { orderContext } from "@/context/userPanel/Order";
import getOrderPhaseUi from "@/utils/userpanel/getOrderPhaseUi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoPricetag } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import convertToShamsi from "@/utils/convertToShamsi";
import { AuthContext } from "@/context/AuthContext";

export default function OrderTable() {
  const tableRef = useRef();
  const [height, setHeight] = useState(0);
  const [openMobileCartIndex, setOpenMobileCartIndex] = useState(null);
  const {user}=useContext(AuthContext)

  const {
    activeOrders,
    setActiveOrders,
    activePage,
    dataPerPage,
    setDataPerPage,
  } = useContext(orderContext);
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
  return (
    <div
      ref={tableRef}
      className=" order-table-container  flex-grow-1 mt-3  rounded-2 "
    >
      {/* desktop */}
      <div className="d-none d-lg-block desktop-table-container">
        <table className="table table-striped table-hover  text-center  ">
        <thead className="">
          <tr className="fs_14 anjoman_medium ">
            <th className="align-middle color_orange">{height}</th>
            <th className="align-middle color_orange">شماره سفارش</th>
            <th className="align-middle color_orange">تاریخ</th>
            <th className="align-middle color_orange">ساعت</th>
            <th className="align-middle color_orange">اقلام</th>
            <th className="align-middle color_orange">مبلغ کل</th>
            <th className="align-middle color_orange">وضعیت سفارش</th>
            <th className="align-middle color_orange">عملیات</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {activeOrders
            .slice((activePage - 1) * dataPerPage, activePage * dataPerPage)
            .map((order, index) => {
              console.log(user);
              const phase = getOrderPhaseUi(order.phase);
              return (
                <tr key={index}>
                  <td className="anjoman_num_regular fs_12 align-middle">
                    {(activePage - 1) * dataPerPage + index + 1}
                  </td>
                  <td className="fs_12 align-middle">
                    {order.identifier}
                  </td>
                  <td className="anjoman_num_regular fs_12 align-middle">
                    {convertToShamsi(order.createdAt).shamsiDate}
                  </td>
                  <td className="anjoman_num_regular fs_12 align-middle">
                    {convertToShamsi(order.createdAt).shamsiTime}
                  </td>
                  <td className="anjoman_num_regular align-middle">
                    {order.type !== 2 && order.items.length}
                    <Tooltip
                      title="دانلود فایل"
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
                      {order.type === 2 && (
                        <BsFileZip
                          style={{ fontSize: "20px", cursor: "pointer" }}
                        />
                      )}
                    </Tooltip>
                  </td>
                  <td className="anjoman_num_bold fs_12 align-middle">
                    {order.expertPrice > 0
                      ? `${Number(order.expertPrice).toLocaleString()} `
                      : "-----"}
                  </td>
                  <td className="text-center align-middle">
                    <div
                      className={`fs_12 anjoman_medium w-100 phase m-auto py-1 rounded-2 gap-1 d-flex align-items-center pe-1 ${phase.className}`}
                    >
                      {phase.icon}
                      {phase.text}
                    </div>
                  </td>
                  <td className="align-middle">
                    <Link
                      href={`/order/step${order.phase}?userId=${user?._id}&orderId=${order._id}`}
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
                    <span className="color_black fs_18 cursor_pointer color_orange">
                      <Tooltip
                        title="لغو"
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
                        <RxCross1 />
                      </Tooltip>
                    </span>
                  </td>
                </tr>
              );
            })}
          {/* اضافه کردن ردیف‌های خالی */}
          {Array.from({
            length:
              dataPerPage -
              activeOrders.slice(
                (activePage - 1) * dataPerPage,
                activePage * dataPerPage
              ).length,
          }).map((_, index) => (
            <tr key={index}>
              <td className="anjoman_num_regular fs_12 align-middle"></td>
              <td className="fs_12 align-middle"></td>
              <td className="anjoman_num_regular fs_12 align-middle"></td>
              <td className="anjoman_num_regular fs_12 align-middle"></td>
              <td className="anjoman_num_regular"></td>
              <td className="anjoman_num_regular align-middle"></td>
              <td className="text-center align-middle"></td>
              <td className="align-middle"></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      {/* desktop */}

      {/* mobile */}
      <div className="mobile-table-container d-block d-lg-none " >
        {activeOrders
  .slice((activePage - 1) * dataPerPage, activePage * dataPerPage)
  .map((order, index) => {
    const phase = getOrderPhaseUi(order.phase);
    const isCartOpen = openMobileCartIndex === order._id;
    return (
      <div
        key={order._id || index}
        className="mobile-order-container bg_color_white rounded-1 px-3 py-3 mb-3"
      >
        <div className="title-container d-flex justify-content-between align-items-center">
          <span className="number anjoman_num_regular">#{(activePage - 1) * dataPerPage + index + 1}</span>
          <div className={`phase-container d-flex justify-content-center align-items-center gap-1 px-1 py-1 status-3 rounded-1 ${phase.className}`}>
            <span className="d-flex">
              {phase.icon}
            </span>
            <p className="m-0 anjoman_regular fs_14">  
                      {phase.text}</p>
          </div>
          <div className="time-container d-flex align-items-center gap-1 ">
            <p className="anjoman_num_regular fs_14 d-flex align-items-center m-0">
              {convertToShamsi(order.createdAt).shamsiTime}
            </p>
            -
            <p className="anjoman_num_regular fs_14 d-flex align-items-center m-0">
              {convertToShamsi(order.createdAt).shamsiDate}
            </p>
          </div>
          <span className="d-flex cursor_pointer">
            <IoIosArrowDown
              onClick={() => setOpenMobileCartIndex(isCartOpen ? null : order._id)}
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
                  کد سفارش
                </span>
              </div>
              <p className="p-0 anjoman_num_regular fs_14 m-0">{order.identifier}</p>
            </div>

            <div className="order-count-container d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center gap-2 ">
                <span className="d-flex">
                  <FaBox />
                </span>
                <span className="color_text anjoman_medium fs_14">
                  تعداد اقلام
                </span>
              </div>
              <p className="p-0 anjoman_num_regular fs_14 m-0">{order.type !== 2 && order.items.length}</p>
            </div>

            <div className="order-price-container d-flex justify-content-between">
              <div className="d-flex align-items-center gap-2 ">
                <span className="d-flex">
                  <FaMoneyBill />
                </span>
                <span className="color_text anjoman_medium fs_14">
                  قیمت کل
                </span>
              </div>
              <p className="p-0 anjoman_num_medium fs_14 m-0">{order.expertPrice > 0
                      ? `${Number(order.expertPrice).toLocaleString()} `
                      : "-----"}</p>
            </div>
          </div>

          <div className="button-container d-flex justify-content-between mt-3 gap-2">
            <Link
              className="color_white bg_color_dark fs_14 anjoman_regular rounded-1 text-decoration-none cursor_pointer text-center"
              href="#"
            >
              مشاهده
            </Link>
            <div className="rounded-1 color_white bg_color_orange cursor_pointer text-center fs_14 anjoman_regular">
              لغو
            </div>
          </div>
        </div>
      </div>
    );
  })}


      
      </div>
      
    </div>
  );
}






