"use client";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Title from "@/components/orderProcess/title/Title";
import WizardStepper from "@/components/orderProcess/wizardStepper/WizardStepper";
import { wizardProcessContext } from "@/context/userPanel/wizardProcess";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsQuestionCircle } from "react-icons/bs";
import { IoPrintOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosWarning } from "react-icons/io";
import { FaTruckMoving } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";


export default function page() {
  const { order } = useContext(wizardProcessContext);
  const [sum, setSum] = useState(0);
  const [tax, setTaxt] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (order) {
      const calcSum = order.pishFactor.reduce((sum, item) => {
        return sum + Number(item.price) * Number(item.amount);
      }, 0);

      const calcTax = 0.1 * calcSum;
      const calcTotal = calcSum + calcTax;

      setSum(calcSum);
      setTaxt(calcTax);
      setTotal(calcTotal);
    }
  }, [order]);
  if (order) {
    return (
      <div className="step7 step-page-container bg_color_white rounded-2 flex-grow-1 px-3 py-4 d-flex flex-column">
        <Title step={7} stepName={"خرید موفق"}></Title>
        <WizardStepper phase={7}></WizardStepper>
        <div className="order-detail-container bg_color_light_gray w-100 mt-4 mt-md-5 rounded-2 p-0 p-md-3 flex-grow-1 d-flex flex-column">
          

          <div className="notif-print-container bg_color_white px-4 py-3 rounded-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
                      <div className="right d-flex flex-column flex-md-row align-items-center gap-3">
                        <div className="icon-container">
                          <FaRegCircleCheck
                            style={{ color: "#28A745", fontSize: "36px" }}
                          />
                        </div>
                        <div className="text-container">
                          <p
                            style={{ color: "#28A745" }}
                            className="m-0 fs_16 anjoman_bold text-center text-md-end"
                          >
                            پیش فاکتور شما آماده است.
                          </p>
                          <p className="m-0 fs_14 anjoman_regular color_text text-center text-md-end">
                            لطفا جزئیات زیر را بررسی کرده و جهت تکمیل سفارش، به مرحله بعد
                            بروید .
                          </p>
                        </div>
                      </div>
                      <div className="left button-container d-flex gap-0 gap-md-3 justify-content-between  mt-3 mt-md-0   ">
                        <div className="download d-flex align-items-center gap-1 color_text rounded-1 px-2 py-1 cursor_pointer justify-content-center">
                          <AiOutlineDownload style={{ fontSize: "18px" }} />
                          <span className="fs_14 anjoman_regular">سوالات متداول</span>
                        </div>
                        <div className="print d-flex align-items-center px-2 py-1 cursor_pointer gap-1 color_white rounded-1 bg_color_orange justify-content-center" onClick={() => window.print()}>
                          <IoPrintOutline style={{ fontSize: "20px" }} />
                          <span className="fs_14 anjoman_regular">چاپ پیش فاکتور</span>
                        </div>
                      </div>
                    </div>

          {/* <div className="pish-factor-container mt-3 ">
            <table
              className="table m-0"
              style={{ borderCollapse: "separate", borderSpacing: "0" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <th className="text-center py-3 fs_12 anjoman_semibold col-1 pe-2 pe-md-0">
                    شماره
                  </th>
                  <th className="text-center py-3 fs_12 anjoman_semibold col-4 col-md-3">
                    عنوان
                  </th>
                  <th className="text-center py-3 fs_12 anjoman_semibold d-none d-md-table-cell">
                    کارخانه
                  </th>
                  <th className="text-center py-3 fs_12 anjoman_semibold d-none d-md-table-cell">
                    ابعاد
                  </th>
                  <th className="text-center py-3 fs_12 anjoman_semibold d-none d-md-table-cell">
                    <span className="d-flex flex-column justify-content-center">
                      <span>وزن شاخه</span>
                      <span className="fs_12 anjoman_light">(kg)</span>
                    </span>
                  </th>
                  <th className="text-center py-3 fs_12 anjoman_semibold col-1">
                    <span className="d-flex flex-column justify-content-center">
                      <span> مقدار</span>
                      <span className="fs_12 anjoman_light">(kg)</span>
                    </span>
                  </th>
                  <th className="text-center py-3 fs_12 anjoman_semibold col-1">
                    قیمت واحد
                  </th>
                  <th className="text-center py-3 fs_12 anjoman_semibold">
                    قیمت کل
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.pishFactor.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="text-center fs_12 anjoman_medium pe-2 pe-md-0">
                        {index + 1}
                      </td>
                      <td className="text-center fs_12 anjoman_num_medium">
                        <div className="color_orange text-decoration-none">
                          <p className="d-none d-md-block">
                            {item.product.shortTitle}
                          </p>
                          <p className="d-block d-md-none">
                            {item.product.fullTitle}
                          </p>
                        </div>
                      </td>
                      <td className="text-center fs_12 anjoman_medium d-none d-md-table-cell">
                        {item.product.factory}
                      </td>
                      <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell">
                        {item.product.dimention}
                      </td>
                      <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell">
                        {item.product.unitWeight}
                      </td>
                      <td className="fs_12 anjoman_num_regular  col-2 text-center">
                        {item.amount}
                      </td>
                      <td className="text-center fs_12 anjoman_num_medium">
                        <div className="d-flex flex-column">
                          <span>{Number(item.price).toLocaleString()}</span>
                          <span>تومان</span>
                        </div>
                      </td>
                      <td className="text-center fs_12 anjoman_num_medium">
                        <div className="d-flex flex-column">
                          <span>
                            {(
                              Number(item.price) * Number(item.amount)
                            ).toLocaleString()}
                          </span>
                          <span>(تومان)</span>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div> */}
          <div className="pish-factor-container mt-0 mt-md-3 bg_color_white pt-3 pt-md-0 rounded-2 ">
                      <table
                        className="table m-0 rounded-2"
                        style={{ borderCollapse: "separate", borderSpacing: "0" }}
                      >
                        <thead>
                          <tr style={{ borderBottom: "1px solid #eee" }}>
                            <th className="text-center py-3 fs_12 anjoman_semibold col-1 pe-2 pe-md-0">
                              شماره
                            </th>
                            <th className="text-center py-3 fs_12 anjoman_semibold col-4 col-md-3">
                              عنوان
                            </th>
                            <th className="text-center py-3 fs_12 anjoman_semibold d-none d-md-table-cell">
                              کارخانه
                            </th>
                            <th className="text-center py-3 fs_12 anjoman_semibold d-none d-md-table-cell">
                              ابعاد
                            </th>
                            <th className="text-center py-3 fs_12 anjoman_semibold d-none d-md-table-cell">
                              <span className="d-flex flex-column justify-content-center">
                                <span>وزن شاخه</span>
                                <span className="fs_12 anjoman_light">(kg)</span>
                              </span>
                            </th>
                            <th className="text-center py-3 fs_12 anjoman_semibold col-1">
                              <span className="d-flex flex-column justify-content-center">
                                <span> مقدار</span>
                                <span className="fs_12 anjoman_light">(kg)</span>
                              </span>
                            </th>
                            <th className="text-center py-3 fs_12 anjoman_semibold col-1">
                              <span className="d-flex flex-column justify-content-center">
                                <span> قیمت واحد</span>
                                <span className="fs_12 anjoman_light">(تومان)</span>
                              </span>
                            </th>
                            <th className="text-center py-3 fs_12 anjoman_semibold">
                              <span className="d-flex flex-column justify-content-center">
                                <span> قیمت کل</span>
                                <span className="fs_12 anjoman_light">(تومان)</span>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.pishFactor.map((item, index) => (
                            <React.Fragment key={index}>
                              <tr className="">
                                <td className="text-center fs_12 anjoman_num_medium pe-2 pe-md-0 align-middle py-2">
                                  {index + 1}
                                </td>
                                <td className="text-center fs_12 anjoman_num_medium align-middle">
                                  <div className="color_orange text-decoration-none align-middle">
                                    <p className="d-none d-md-block m-0">
                                      {item.product.shortTitle}
                                    </p>
                                    <p className="d-block d-md-none m-0">
                                      {item.product.fullTitle}
                                    </p>
                                  </div>
                                </td>
                                <td className="text-center fs_12 anjoman_medium d-none d-md-table-cell align-middle">
                                  {item.product.factory}
                                </td>
                                <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell align-middle">
                                  {item.product.dimention}
                                </td>
                                <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell align-middle">
                                  {item.product.unitWeight}
                                </td>
                                <td className="fs_12 anjoman_num_regular  col-2 text-center align-middle">
                                  {item.amount}
                                </td>
                                <td className="text-center fs_12 anjoman_num_medium align-middle">
                                  <div className="d-flex flex-column">
                                    <span>{Number(item.price).toLocaleString()}</span>
                                  </div>
                                </td>
                                <td className="text-center fs_12 anjoman_num_medium align-middle">
                                  <div className="d-flex flex-column">
                                    <span>
                                      {(
                                        Number(item.price) * Number(item.amount)
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>

          <div className="result-container p-3 mt-2 d-flex flex-column-reverse flex-xl-row gap-3 bg_color_white rounded-2">
            <div className="transport-container rounded-2 p-3 ">
              <div className="title d-flex align-items-center gap-1 mb-2">
                <span>
                  <FaTruckMoving style={{fontSize:"28px"}} />

                </span>
                <p className="fs_14 anjoman_medium m-0">
هماهنگی جهت ارسال بار                </p>
              </div>
              
              
             
              <p className="fs_14 anjoman_regular mb-1 d-flex align-items-baseline gap-2 text_justify">
                <span className="d-flex align-items-center">
                                  <FaCircle style={{ fontSize: "7px" }} />
                                </span>
                کارشناسان واحد حمل و نقل به زودی جهت هماهنگی زمان و مکان دقیق تحویل بار با شما تماس خواهند گرفت.
              </p>
            </div>
            <div className="bill-container  d-flex  flex-column justify-content-between">
              <div className="priceses-container ">
                <div className="sum d-flex justify-content-between ">
                  <p className="fs_14 color_text anjoman_regular">جمع کل</p>
                  <p className="fs_14 anjoman_num_regular color_text">
                    {sum} ریال
                  </p>
                </div>
                <div className="tax d-flex justify-content-between">
                  <p className="fs_14 color_text anjoman_regular">
                    مالیات بر ارزش افزوده (10%)
                  </p>
                  <p className="fs_14 anjoman_num_regular color_text">
                    {tax} ریال
                  </p>
                </div>
                <div className="final d-flex justify-content-between mt-2">
                  <p className="fs_14 anjoman_num_medium ">
                    مبلغ کل قابل پرداخت
                  </p>
                  <p className="fs_14 anjoman_num_medium ">{total.toLocaleString()} ریال</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>باید صبر کنی</div>;
  }
}
