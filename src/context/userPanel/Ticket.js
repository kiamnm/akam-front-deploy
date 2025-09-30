"use client";
import React, { createContext, useState, useEffect } from "react";
// import fetchGetAllOrders from "@/utils/userpanel/order/fetchGetAllOrdes";
import fetchGetAllTickets from "@/utils/userpanel/ticket/fetchGetAllTickets";

export const ticketContext = createContext();

export const TicketProvider = ({ children }) => {
  // --------------------
  // State اصلی
  // --------------------

  const [tickets, setTickets] = useState([
    {
      identifier: "gwp750",
      subject: "خرید آهن",
      status: 1,
      objId: "abskn5566ad5s65a",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهثن",
      status: 2,
      objId: "abskn5566ad5s6s5",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهثزن",
      status: 3,
      objId: "abskn5566add5s65",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهین",
      status: 1,
      objId: "abskn5566ad5s6f5",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهقن",
      status: 2,
      objId: "abskn5566ead5s65",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهفن",
      status: 3,
      objId: "abskn55f66ad5s65",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهن",
      status: 1,
      objId: "absgkn5566ad5s65",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهن",
      status: 2,
      objId: "absekn5566ad5s65",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
    {
      identifier: "gwp750",
      subject: "خرید آهن",
      status: 3,
      objId: "abskn5566ad5s6g5",
      updatedAt: "2025-08-29T10:12:30.000Z",
      createdAt: "2025-08-29T10:12:30.000Z",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [activeTickets, setActiveTickets] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(6);
  const [activeTicketsLength, setActiveTicketsLength] = useState(0);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortStatus, setSortStatus] = useState("newest");

  // --------------------
  // بروز رسانی طول activeOrders
  // --------------------
  useEffect(() => {
    setActiveTicketsLength(activeTickets.length);
  }, [activeTickets]);

  // --------------------
  // Fetch داده‌ها از API
  // --------------------
    useEffect(() => {
      const fetchTickets = async () => {
        const allTickets = await fetchGetAllTickets();
        if (allTickets?.length>0) {
          setTickets(allTickets);
        }
      };
      fetchTickets ();
    }, []);

  // --------------------
  // Sync activeOrders با orders
  // --------------------
  useEffect(() => {
    setActiveTickets(tickets);
  }, [tickets]);

  // --------------------
  // فیلتر و مرتب‌سازی
  // --------------------
  useEffect(() => {
    let filteredTickets = [...tickets];

    // --- فیلتر سرچ ---
    if (searchValue !== "") {
      filteredTickets = filteredTickets.filter((item) =>
        item.subject.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // --- فیلتر فاز / نوع ---

    // --- مرتب‌سازی ---
    if (sortStatus === "newest") {
  filteredTickets.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
} else if (sortStatus === "oldest") {
  filteredTickets.sort(
    (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
  );
} else if (sortStatus === "review") {
  filteredTickets.sort((a, b) => {
    // اولویت با status === 1
    if (a.status === 1 && b.status !== 1) return -1;
    if (a.status !== 1 && b.status === 1) return 1;
    return 0;
  });
} else if (sortStatus === "answered") {
  filteredTickets.sort((a, b) => {
    // اولویت با status === 2
    if (a.status === 2 && b.status !== 2) return -1;
    if (a.status !== 2 && b.status === 2) return 1;
    return 0;
  });
} else if (sortStatus === "closed") {
  filteredTickets.sort((a, b) => {
    // اولویت با status === 3
    if (a.status === 3 && b.status !== 3) return -1;
    if (a.status !== 3 && b.status === 3) return 1;
    return 0;
  });
}


    setActiveTickets(filteredTickets);

    // 🚀 وقتی سرچ یا فیلتر تغییر می‌کند، صفحه همیشه به ۱ برمی‌گردد
    setActivePage(1);
  }, [searchValue, sortStatus, tickets]);

  // --------------------
  // Context value
  // --------------------
  const value = {
    tickets,
    setTickets,
    activeTickets,
    setActiveTickets,
    activeTicketsLength,
    setActiveTicketsLength,
    activePage,
    setActivePage,
    dataPerPage,
    setDataPerPage,
    searchValue,
    setSearchValue,
    isSortOpen,
    setIsSortOpen,
    sortStatus,
    setSortStatus,
  };

  return (
    <ticketContext.Provider value={value}>{children}</ticketContext.Provider>
  );
};
