"use client"
import React, { useContext, useMemo } from "react";
import "./style.css";
import { ticketContext } from "@/context/userPanel/Ticket";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function TicketPagination() {
  const { activeTicketsLength, activePage, setActivePage,dataPerPage } = useContext(ticketContext);

  

  // تعداد کل صفحات
  const totalPages = useMemo(() => {
    return Math.ceil(activeTicketsLength / dataPerPage);
  }, [activeTicketsLength,dataPerPage]);

  // تغییر صفحه
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setActivePage(page);
  };

  // محاسبه صفحات قابل نمایش
  const visiblePages = useMemo(() => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (activePage <= 2) {
      return [1, 2, 3, 4];
    }

    if (activePage >= totalPages - 1) {
      return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [activePage - 1, activePage, activePage + 1, activePage + 2];
  }, [activePage, totalPages]);

  return (
    <div className="order-pagination-container d-flex justify-content-center align-items-center mt-4 mb-3">
      {/* دکمه بعدی (چون راست‌چینه) */}
      <span
        className={`pagination fs_24 cursor_pointer ${(activePage === totalPages || activePage<1) ? "disable" : ""}`}
        onClick={() => handlePageChange(activePage + 1)}
      >
        <MdOutlineKeyboardArrowRight />
      </span>

      {/* شماره صفحات */}
      <div className="d-flex m-0 gap-3 px-3 justify-content-center items-container">
        {visiblePages.map((page) => (
          <div
            key={page}
            className={`pagination-item anjoman_num_bold fs_12 rounded-1 d-flex justify-content-center align-items-center ${page === activePage ? "active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </div>
        ))}
      </div>

      {/* دکمه قبلی */}
      <span
        className={`pagination fs_24 cursor_pointer ${activePage === 1 ? "disable" : ""}`}
        onClick={() => handlePageChange(activePage - 1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </span>
    </div>
  );
}
