"use client";
import React, { useState } from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";
import ProductTable from "../productTable/ProductTable";

export default function HomeTable({ data }) {
  const menuData = [
    { title: "میلگرد", iconSrc: "./images/nabshi-icon.svg" },
    { title: "تیرآهن", iconSrc: "./images/nabshi-icon.svg" },
    { title: "نبشی", iconSrc: "./images/nabshi-icon.svg" },
    { title: "ناودانی", iconSrc: "./images/nabshi-icon.svg" },
    { title: "پروفیل", iconSrc: "./images/nabshi-icon.svg" },
    { title: "سپری", iconSrc: "./images/nabshi-icon.svg" },
    { title: "ورق", iconSrc: "./images/nabshi-icon.svg" },
  ];

  const [activeTab, setActiveTab] = useState("میلگرد");

  // محاسبه محصولات مرتبط با تب فعال
  const products = data
    .filter((item) => item.majorCategory === activeTab) // فقط آیتم‌هایی که majorCategory آنها "نبشی" هست
    .flatMap((item) => item.products);

  return (
    <div className="home-table">
      <ClientLayout>
        <div className="menu-container d-flex align-items-center justify-content-start ">
          {menuData.map((item, index) => (
            <div
              key={index}
              className={`item-container d-flex align-items-center  cursor_pointer ${
                item.title === activeTab ? "active" : "not-active"
              }`}
              onClick={() => setActiveTab(item.title)}
            >
              {item.iconSrc && (
                <div className="p-0 m-0">
                  <img src={item.iconSrc} alt={item.title} />
                </div>
              )}
              <p className="p-0 m-0 color_white fs_14 anjoman_medium title">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <ProductTable products={products} />
      </ClientLayout>
    </div>
  );
}
