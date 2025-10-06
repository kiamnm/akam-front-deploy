"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import baseUrl from "@/utils/baseUrl";
import convertToShamsi from "@/utils/convertToShamsi";
import Link from "next/link";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    fetch(`${baseUrl}userInfo/getAllUser`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          setUsers([]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const sortByKey = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...users].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      if (key === "lastLogin") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      aValue = aValue ? aValue.toString().toLowerCase() : "";
      bValue = bValue ? bValue.toString().toLowerCase() : "";

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setUsers(sorted);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="fs-5 text-muted">هیچ کاربری یافت نشد!</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
        <h2 className="anjoman_bold text-center my-4"> لیست کاربران آکام</h2>
      <div className="table-responsive shadow-sm runded">
        <table className="table table-striped table-hover table-bordered align-middle text-center">
          <thead className="table-dark anjoman_medium">
            <tr>
              <th>ردیف</th>
              <th style={{ cursor: "pointer" }} onClick={() => sortByKey("phone")}>موبایل</th>
              <th style={{ cursor: "pointer" }} onClick={() => sortByKey("name")}>نام</th>
              <th style={{ cursor: "pointer" }} onClick={() => sortByKey("likedCm")}>تعداد کامنت‌ها</th>
              <th style={{ cursor: "pointer" }} onClick={() => sortByKey("role")}>دسترسی</th>
              <th style={{ cursor: "pointer" }} onClick={() => sortByKey("isInNews")}>خبرنامه</th>
              <th style={{ cursor: "pointer" }} onClick={() => sortByKey("lastLogin")}>آخرین ورود</th>
              <th style={{ cursor: "pointer" }} onClick={() => sortByKey("orders")}>سفارش‌ها</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody className="anjoman_num_regular">
            {users.map((user, index) => (
              <tr key={user._id} className="align-middle text-center">
                <td>{index + 1}</td>
                <td>{user.phone || "-"}</td>
                <td>{user.name || "-"}</td>
                <td>{user.likedCm?.length || 0}</td>
                <td>{user.role || "-"}</td>
                <td>{user.isInNews ? "✅" : "❌"}</td>
                <td>
                  <div className="d-flex flex-column">
                    <span>{convertToShamsi(user.lastLogin).shamsiDate}</span>
                    <span>{convertToShamsi(user.lastLogin).shamsiTime}</span>
                  </div>
                </td>
                <td>{user.orders?.length || 0}</td>
                <td>
                  <Link href={`/adminpanel/user/each/${user._id}`}>
                    <button className="btn btn-sm btn-primary anjoman_bold">مشاهده</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
