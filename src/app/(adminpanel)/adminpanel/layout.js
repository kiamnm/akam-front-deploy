"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiUsers,
  FiShoppingBag,
  FiMessageSquare,
  FiBarChart2,
  FiFileText,
  FiMenu,
} from "react-icons/fi";

const sidebarItems = [
  { name: "کاربران", icon: <FiUsers />, href: "/adminpanel/user" },
  { name: "سفارشات", icon: <FiShoppingBag />, href: "/adminpanel/orders" },
  { name: "تیکت‌ها", icon: <FiMessageSquare />, href: "/adminpanel/ticket" },
  { name: "آمار", icon: <FiBarChart2 />, href: "/adminpanel/statistic" },
  { name: "مقالات", icon: <FiFileText />, href: "/adminpanel/article" },
];

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: open ? 220 : 70 }}
        transition={{ duration: 0.3 }}
        className="bg-white border-end shadow-sm d-flex flex-column"
      >
        {/* Sidebar Header */}
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          {/* لوگو یا حروف اول */}
          <div
            className="fw-bold color_text d-flex align-items-center fs_14 anjoman_medium"
            style={{ height: "32px" }}
          >
            {open ? "پنل ادمین" : ""}
          </div>

          {/* دکمه باز و بسته شدن */}
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-sm btn-light border-0 p-1 d-flex align-items-center justify-content-center"
            style={{
              width: "32px",
              height: "32px",
            }}
            title={open ? "بستن منو" : "باز کردن منو"}
          >
            <FiMenu size={18} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-grow-1 py-2">
          {sidebarItems.map((item) => {
  const active = pathname === item.href;
  return (
    <Link
      key={item.href}
      href={item.href}
      className={`d-flex align-items-center gap-2 px-3 py-2 text-decoration-none rounded`}
      style={{
        whiteSpace: "nowrap",
        margin: "2px 4px",
        transition: "all 0.3s ease",
        backgroundColor: active ? "#FF5050" : "transparent", // رنگ دلخواه برای پس‌زمینه
        color: active ? "#ffffff" : "#212529", // رنگ متن وقتی فعال است
      }}
    >
      <span className="fs-5 d-flex align-items-center">{item.icon}</span>
      {open && <span className="fw-semibold">{item.name}</span>}
    </Link>
  );
})}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <header className="d-flex align-items-center justify-content-between px-4 py-2 bg-white border-bottom shadow-sm">
          <h1 className="h6 mb-0 fw-semibold fs_16 anjoman_medium">داشبورد مدیریت</h1>
           <Link href="/" className="d-flex align-items-center text-decoration-none">
    <img src="/images/logo-black.svg" alt="Logo" style={{ height: "32px" }} />
  </Link>
        </header>

        <main className="flex-grow-1 p-4">{children}</main>
      </div>
    </div>
  );
}
