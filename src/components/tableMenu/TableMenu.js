"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import Link from "next/link";

export default function TableMenu({ data, activeDefult, majorCategory }) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(activeDefult);

  // useEffect(() => {
  //   if (majorCategory && activeTab) {
  //     router.push(`/product/list/${encodeURIComponent(majorCategory)}/${encodeURIComponent(activeTab)}`);
  //   }
  // }, [activeTab, majorCategory]);

  return (
    <div className="d-flex align-items-center justify-content-start table-menu-container pb-2">
      {data && data.map((item, index) => {
        return (
          <Link
          href={item.href}
            key={index}
            className={`item-container d-flex align-items-center px-3 px-md-4 py-2 cursor_pointer text-decoration-none ${
              item.key === activeTab ? "active" : "not-active"
            }`}
            onClick={() => setActiveTab(item.key)}
          >
            {item.iconSrc && (
              <div className="p-0 m-0">
                <img src="/images/tir-icon.svg" alt="" />
              </div>
            )}

            <p className="p-0 m-0 me-2 color_white fs_14 anjoman_medium title">{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
