"use client";
import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { CartContext } from "@/context/cartContext";
import { AuthContext } from "@/context/AuthContext";
import fetchCreateOrderFromCart from "../../../utils/order/fetchCreateOrderFromCart";
import { ToastContainer, toast } from "react-toastify";
import { successNotif,failNotif } from "@/utils/notif";
import { useRouter } from "next/navigation";
import {
  changeItemAmountInLocalStorage,
  deleteItemFromLocalStorage,
} from "./../../../utils/cart/handleLocalStorage";
import { BsCart3 } from "react-icons/bs";
export default function Page() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { checkAuth } = useContext(AuthContext);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleAmountChange = (objId, newAmount) => {
    const amount = Number(newAmount);
    if (
      isNaN(amount) || // مقدار عددی نیست
      // مقدار خالیه
     
      amount>1000000
    ) {
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === objId ? { ...item, amount } : item
      )
    );
    changeItemAmountInLocalStorage(objId, Number(newAmount));
  };

  const handleDelete = (objId) => {
    setCartItems((prev) => prev.filter((item) => item._id !== objId));
    deleteItemFromLocalStorage(objId);
  };

const totalPrice = (Array.isArray(cartItems) ? cartItems : []).reduce(
  (sum, item) => sum + Number(item.amount) * Number(item.price),
  0
);
  const tax = totalPrice * 0.09;
  const finalAmount = totalPrice + tax;
  const handleSubmitForm = async () => {
    setPending(true);
    const user = await checkAuth();
    if (user) {
      const result = await fetchCreateOrderFromCart(
        user._id,
        cartItems,
        setPending
      );
      if (result) {
        
        successNotif("محصولات با موفقیت برای کارشناس ارسال شد.");
        setCartItems([]);
        localStorage.removeItem("cartItem");
      } else {
        
        failNotif("خطایی رخ داده است !");
      }
    } else {
      router.push("/login");
    }
  };
  if (cartItems.length !== 0) {
   
    return (
      <div className="container cart-page-container mt-3 ">
        <div className="d-flex gap-2 ">
          
            <BsCart3 style={{fontSize:"22px"}} />
          
          
        <h3 className="mb-3 fs_16 anjoman_bold ">سبد خرید</h3>
        </div>
        
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
                  <th className="text-center py-3 fs_table_title anjoman_bold col-1"></th>
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
                        <Link
                          href={`/product/each/${item._id}`}
                          className="color_orange text-decoration-none"
                        >
                          <p className="d-none d-md-block">{item.shortTitle}</p>
                          <p className="d-block d-md-none">{item.fullTitle}</p>
                        </Link>
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
                      <td className="text-center col-1">
                        <span
                          onClick={() => handleDelete(item._id)}
                          style={{ cursor: "pointer", fontSize: "20px" }}
                        >
                          <IoCloseOutline
                            style={{ fontSize: "24px", color: "red" }}
                          />
                        </span>
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
          <div className="calculation col-12 col-md-5 d-flex flex-column align-items-center justify-content-center px-0 px-md-4">
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
              <div className="d-flex align-items-center gap-2">
                <span className="d-flex">
                  <IoMdInformationCircle
                    style={{ fontSize: "22px", color: "#FF5050" }}
                  />
                </span>
                <p className="fs_12 anjoman_regular m-0 mt-3 mt-md-0">
                  با توجه به نوسانات بازار و لحظه‌ای بودن قیمت‌ها، پس از تایید
                  کارشناسان، پیش‌فاکتور در پنل کاربری برای شما ارسال می‌شود.
                </p>
              </div>
              <button
                onClick={handleSubmitForm}
                className="bg_color_orange color_white fs_14 anjoman_medium py-2 w-100 mt-3"
              >
                {pending ? (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "ثبت"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="empty-cart-container main d-flex flex-column justify-content-center align-items-center">
      <img src="./images/empty-cart.png" alt="" />
      <p className="p-0 m-0 fs_14 anjoman_medium">سبد خرید شما خالی میباشد.</p>
    </div>
  );
}
