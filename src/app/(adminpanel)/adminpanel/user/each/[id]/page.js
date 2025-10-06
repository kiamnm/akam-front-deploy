"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import baseUrl from "@/utils/baseUrl";
import "./style.css";

export default function EachUserPage() {
  const { id } = useParams();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  // مودال‌ها و فرم پیش‌فاکتور
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState([{ product: "", amount: "", price: "" }]);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`${baseUrl}order/getAllOrdersOfSpecialUser/${id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const addInvoiceItem = () => {
    setInvoiceItems([...invoiceItems, { product: "", amount: "", price: "" }]);
  };

  const handleInvoiceChange = (index, field, value) => {
  const newItems = [...invoiceItems];

  if (field === "amount" || field === "price") {
    newItems[index][field] = value === "" ? "" : Number(value); // تبدیل به عدد
  } else {
    newItems[index][field] = value;
  }

  setInvoiceItems(newItems);
};

  const removeInvoiceItem = (index) => {
    const newItems = [...invoiceItems];
    newItems.splice(index, 1);
    setInvoiceItems(newItems);
  };

  const submitInvoice = async () => {
    try {
      const res = await fetch(`${baseUrl}order/setPishFactor/${currentOrderId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ pishFactor: invoiceItems }),
      });

      const data = await res.json();
      console.log("Invoice submitted:", data);

      setShowInvoiceModal(false);
      setInvoiceItems([{ product: "", amount: "", price: "" }]);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmPurchase = () => {
    console.log("Purchase confirmed for order:", currentOrderId);
    setShowConfirmModal(false);
  };

  if (loading) {
    return (
      <div className="center-container">
        <p>در حال دریافت سفارش‌ها...</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="center-container">
        <p className="fs_14 anjoman_bold">هیچ سفارشی برای این کاربر ثبت نشده است.</p>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2 className="fs_20 anjoman_bold mb-4">سفارش‌های کاربر</h2>

      {orders.map((order, index) => {
        const isOpen = openIndex === index;
        const orderDate = new Date(order.createdAt);

        return (
          <div
            key={order._id}
            className={`accordion-item rounded-3 ${
              order.type === "1"
                ? "manual-bg"
                : order.type === "2"
                ? "upload-bg"
                : order.type === "3"
                ? "cart-bg"
                : ""
            }`}
          >
            {/* Header */}
            <div
              className="accordion-header"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div>
                <p className="fs_14 anjoman_medium m-0">
                  <span>کد سفارش:</span> {order.identifier}
                </p>
                <p className="fs_14 anjoman_medium mb-0">
                  نوع خرید: <strong>{getOrderTypeLabel(order.type)}</strong>
                </p>
                <span className="fs_16 anjoman_num_bold">فاز: {order.phase}</span>
              </div>
              <div className="order-meta">
                <span className="fs_14 anjoman_regular">
                  <strong>تاریخ:</strong> {orderDate.toLocaleDateString("fa-IR")}
                </span>
                <span className="fs_14 anjoman_regular">
                  <strong>ساعت:</strong> {orderDate.toLocaleTimeString("fa-IR")}
                </span>
              </div>
            </div>

            {/* Body */}
            {isOpen && (
              <div className="accordion-body">
                {/* نوع 1 - فرم دستی */}
                {order.type === "1" && order.items.length > 0 && (
                  <table className="order-table">
                    <thead>
                      <tr className="fs_14 anjoman_semibold">
                        <th>#</th>
                        <th>نام محصول</th>
                        <th>مقدار</th>
                      </tr>
                    </thead>
                    <tbody className="anjoman_num_regular">
                      {order.items.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.productName}</td>
                          <td>{item.amount || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {/* نوع 2 - آپلود فایل */}
                {order.type === "2" && (
                  <div className="order-details">
                    <p className="fs_14 anjoman_regular m-0">
                      <span>توضیحات:</span>{" "}
                      {order.explanation && order.explanation.trim() !== ""
                        ? order.explanation
                        : "بدون توضیحات"}
                    </p>
                    <p className="fs_14 anjoman_regular">
                      <strong>نام فایل:</strong>{" "}
                      {order.uploadFile ? (
                        <a
                          href={`${baseUrl}uploads/${order.uploadFile}`}
                          target="_blank"
                          rel="noreferrer"
                          className="file-link"
                        >
                          {order.uploadFile}
                        </a>
                      ) : (
                        "فایلی موجود نیست."
                      )}
                    </p>
                  </div>
                )}

                {/* نوع 3 - سبد خرید */}
                {order.type === "3" && order.items.length > 0 && (
                  <table className="order-table">
                    <thead>
                      <tr className="fs_14 anjoman_semibold">
                        <th>#</th>
                        <th>نام محصول</th>
                        <th>مقدار</th>
                        <th>قیمت (تومان)</th>
                        <th>کارخانه</th>
                      </tr>
                    </thead>
                    <tbody className="anjoman_num_regular">
                      {order.items.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.fullTitle}</td>
                          <td>{item.amount}</td>
                          <td>{item.price}</td>
                          <td>{item.factory}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {/* دکمه‌ها */}
                <div className="order-actions">
                  <button
                    className="btn view-btn"
                    onClick={() => router.push(`/adminpanel/user/order/${order._id}`)}
                  >
                    مشاهده سفارش
                  </button>
                  <button
                    className="btn invoice-btn"
                    onClick={() => {
                      setCurrentOrderId(order._id);
                      setShowInvoiceModal(true);
                    }}
                  >
                    صدور پیش فاکتور
                  </button>
                  <button
                    className="btn confirm-btn"
                    onClick={() => {
                      setCurrentOrderId(order._id);
                      setShowConfirmModal(true);
                    }}
                  >
                    تایید خرید
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* مودال صدور پیش فاکتور */}
      {showInvoiceModal && (
        <div className="modal-backdrop">
          <div className="modall">
            <h3>صدور پیش فاکتور</h3>
            {invoiceItems.map((item, idx) => (
              <div key={idx} className="invoice-row">
                <input
                  placeholder="محصول"
                  value={item.product || ""}
                  onChange={(e) => handleInvoiceChange(idx, "product", e.target.value)}
                />
                <input
                  placeholder="مقدار"
                  value={item.amount || ""}
                  onChange={(e) => handleInvoiceChange(idx, "amount", e.target.value)}
                />
                <input
                  placeholder="قیمت"
                  value={item.price || ""}
                  onChange={(e) => handleInvoiceChange(idx, "price", e.target.value)}
                />
                {invoiceItems.length > 1 && (
                  <button
                    type="button"
                    className="remove-item-btn"
                    onClick={() => removeInvoiceItem(idx)}
                  >
                    حذف
                  </button>
                )}
              </div>
            ))}
            <button className="add-btn" onClick={addInvoiceItem}>
              اضافه کردن محصول
            </button>

            <div className="modal-actions">
              <button className="btn cancel-btn" onClick={() => setShowInvoiceModal(false)}>
                لغو
              </button>
              <button className="btn confirm-btn" onClick={submitInvoice}>
                تایید
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getOrderTypeLabel(type) {
  switch (type) {
    case "1":
      return "فرم دستی";
    case "2":
      return "آپلود فایل";
    case "3":
      return "سبد خرید";
    default:
      return "نامشخص";
  }
}
