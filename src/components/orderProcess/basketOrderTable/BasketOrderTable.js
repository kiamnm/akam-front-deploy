import React, { useContext, useState } from "react";
import "./style.css";
import { wizardProcessContext } from "@/context/userPanel/wizardProcess";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";

export default function BasketOrderTable() {
  const { cartItems, setCartItems } = useContext(wizardProcessContext);

  const totalPrice = (Array.isArray(cartItems) ? cartItems : []).reduce(
    (sum, item) => sum + Number(item.amount) * Number(item.price),
    0
  );
  const tax = totalPrice * 0.09;
  const finalAmount = totalPrice + tax;

  const handleAmountChange = (objId, newAmount) => {
    const amount = Number(newAmount);
    if (
      isNaN(amount) || // مقدار عددی نیست
      // مقدار خالیه

      amount > 1000000
    ) {
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item._id === objId ? { ...item, amount } : item))
    );
  };
  return (
    <div className="container cart-page-container mt-3 ">
      <h4 className="mb-2 fs_14 anjoman_medium">لیست محصولات </h4>
      <div className="table-wrapper">
        <div className="table-responsive">
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
              {cartItems.map((item, index) => (
                <React.Fragment key={item._id}>
                  <tr>
                    <td className="text-center fs_12 anjoman_medium pe-2 pe-md-0">
                      {index + 1}
                    </td>
                    <td className="text-center fs_12 anjoman_num_medium">
                      <div
                        href={`/product/each/${item._id}`}
                        className="color_orange text-decoration-none"
                      >
                        <p className="d-none d-md-block">{item.shortTitle}</p>
                        <p className="d-block d-md-none">{item.fullTitle}</p>
                      </div>
                    </td>
                    <td className="text-center fs_12 anjoman_medium d-none d-md-table-cell">
                      {item.factory}
                    </td>
                    <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell">
                      {item.dimention}
                    </td>
                    <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell">
                      {item.unitWeight}
                    </td>
                    <td className="fs_12 anjoman_num_regular  col-2">
                      <input
                        className="w-100 py-3 py-md-2  amount"
                        type="text"
                        value={item.amount}
                        onChange={(e) =>
                          handleAmountChange(item._id, e.target.value)
                        }
                      />
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
        </div>
      </div>

      {/* مبلغ نهایی + مالیات + مجموع */}
      <div className="factor-result-container d-flex flex-column flex-md-row align-items-center mt-4 px-4 py-3 py-md-4">
        <div className="calculation col-12 col-md-5 d-flex flex-column align-items-center justify-content-center px-0 px-md-4 ">
          <div className="d-flex justify-content-between w-100 fs_12 anjoman_num_regular">
            <p className="m-0 fs_14 anjoman_medium pb-3">مبلغ نهایی فاکتور</p>
            <p>{totalPrice.toLocaleString()} تومان</p>
          </div>
          <div className="d-flex justify-content-between w-100 fs_12 anjoman_num_regular">
            <p className="m-0 fs_14 anjoman_num_medium">
              9% مالیات بر ارزش افزوده
            </p>
            <p>{tax.toLocaleString()} تومان</p>
          </div>
        </div>
        <div className="result col-12 col-md-7 d-flex flex-column justify-content-between px-0 px-md-4 mt-2 mt-md-0">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <p className="fs_14 anjoman_bold m-0">
              مبلغ کل پیش‌بینی شده قابل پرداخت:
            </p>
            <p className="m-0 anjoman_num_bold fs_14 no-wrap d-flex flex-column align-items-center">
              <span>{finalAmount.toLocaleString()}</span>
              <span className="fs_12 anjoman_medium"> (تومان)</span>
            </p>
          </div>
          <div>
            {/* <div className="d-flex align-items-center gap-2">
              <span className="d-flex">
                <IoMdInformationCircle
                  style={{ fontSize: "22px", color: "#FF5050" }}
                />
              </span>
              <p className="fs_12 anjoman_regular m-0 mt-3 mt-md-0">
                با توجه به نوسانات بازار و لحظه‌ای بودن قیمت‌ها، پس از تایید
                کارشناسان، پیش‌فاکتور در پنل کاربری برای شما ارسال می‌شود.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#dc354634"}} className="warning-container rounded-1 p-2">
        <div className="title d-flex gap-2 align-items-center mb-2">
          <span className="d-flex justify-content-center align-items-center">
            <IoIosWarning style={{color:"#721C24",fontSize:"22px"}} />
          </span>
          <p style={{color:"#721C24"}} className="fs_16 anjoman_medium m-0">توجه!</p>
        </div>
        <p style={{color:"#721C24"}} className="fs_14 anjoman_regular">
          با توجه به نوسانات بازار و لحظه ای بودن قیمت ها ، پس از تایید کارشناس
          ،پش فاکتور در مراحل بعدی در پنل کاربری شما ارسال میشود .
        </p>
      </div>
    </div>
  );
}
