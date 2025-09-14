"use client";
import React, { createContext, useState, useEffect } from "react";
import fetchGetAllOrders from "@/utils/userpanel/order/fetchGetAllOrdes";

export const orderContext = createContext();

export const OrderProvider = ({ children }) => {
  // --------------------
  // State اصلی
  // --------------------
  const [orders, setOrders] = useState( [
  {
    type: 1,
    objId: "abskn5566ad5s64",
    orderIdentifier: "GD4738701",
    date: "22/05/1404",
    clock: "02:56",
    items: "103",
    phase: 3,
    expertPrice: 42500000,
    updatedAt: "2025-08-28T08:23:45.123Z",
    createdAt:"2025-08-28T08:23:45.123Z"
  },
  {
    type: 2,
    objId: "abskn5566ad5s65",
    orderIdentifier: "GD4738702",
    date: "23/05/1404",
    clock: "03:15",
    items: "50",
    phase: 1,
    expertPrice: 25000000,
    updatedAt: "2025-08-29T10:12:30.000Z",
    createdAt:"2025-08-29T10:12:30.000Z"
  },
  {
    type: 3,
    objId: "abskn5566ad5s66",
    orderIdentifier: "GD4738703",
    date: "24/05/1404",
    clock: "12:05",
    items: "75",
    phase: 2,
    expertPrice: 32000000,
    updatedAt: "2025-08-30T11:00:00.000Z",
    createdAt:"2025-08-30T11:00:00.000Z"
  },
  {
    type: 1,
    objId: "abskn5566ad5s67",
    orderIdentifier: "GD4738704",
    date: "25/05/1404",
    clock: "14:20",
    items: "120",
    phase: 5,
    expertPrice: 48000000,
    updatedAt: "2025-08-31T09:30:00.000Z",
    createdAt:"2025-08-31T09:30:00.000Z"
  },
  {
    type: 2,
    objId: "abskn5566ad5s68",
    orderIdentifier: "GD4738705",
    date: "26/05/1404",
    clock: "16:40",
    items: "95",
    phase: 4,
    expertPrice: 39000000,
    updatedAt: "2025-09-01T08:00:00.000Z",
    createdAt:"2025-09-01T08:00:00.000Z"
  },
  {
    type: 3,
    objId: "abskn5566ad5s69",
    orderIdentifier: "GD4738706",
    date: "27/05/1404",
    clock: "11:15",
    items: "60",
    phase: 6,
    expertPrice: 27000000,
    updatedAt: "2025-09-02T07:45:00.000Z",
    createdAt:"2025-09-02T07:45:00.000Z"
  },
  {
    type: 1,
    objId: "abskn5566ad5s70",
    orderIdentifier: "GD4738707",
    date: "28/05/1404",
    clock: "09:50",
    items: "88",
    phase: 2,
    expertPrice: 31000000,
    updatedAt: "2025-09-03T10:10:00.000Z",
    createdAt:"2025-09-03T10:10:00.000Z"
  },
  {
    type: 2,
    objId: "abskn5566ad5s71",
    orderIdentifier: "GD4738708",
    date: "29/05/1404",
    clock: "13:30",
    items: "110",
    phase: 1,
    expertPrice: 45000000,
    updatedAt: "2025-09-04T12:00:00.000Z",
    createdAt:"2025-09-04T12:00:00.000Z"
  },
  {
    type: 3,
    objId: "abskn5566ad5s72",
    orderIdentifier: "GD4738709",
    date: "30/05/1404",
    clock: "15:45",
    items: "55",
    phase: 3,
    expertPrice: 26000000,
    updatedAt: "2025-09-05T08:30:00.000Z",
    createdAt:"2025-09-05T08:30:00.000Z"
  },
  {
    type: 1,
    objId: "abskn5566ad5s73",
    orderIdentifier: "GD4738710",
    date: "01/06/1404",
    clock: "10:20",
    items: "130",
    phase: 5,
    expertPrice: 50000000,
    updatedAt: "2025-09-06T09:00:00.000Z",
    createdAt:"2025-09-06T09:00:00.000Z"
  },
  // 20 عضو دیگر را می‌توان با الگویی مشابه تولید کرد
]
);

  const [searchValue, setSearchValue] = useState("");
  const [activeOrders, setActiveOrders] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(6);
  const [activeOrdersLength, setActiveOrdersLength] = useState(0);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortStatus, setSortStatus] = useState("newest");

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState({
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
  });

  // --------------------
  // بروز رسانی طول activeOrders
  // --------------------
  useEffect(() => {
    setActiveOrdersLength(activeOrders.length);
  }, [activeOrders]);

  // --------------------
  // Fetch داده‌ها از API
  // --------------------
  useEffect(() => {
    const fetchOrders = async () => {
      const allOrders = await fetchGetAllOrders();
      if (allOrders) {
        setOrders(allOrders);
      }
    };
    fetchOrders();
  }, []);

  // --------------------
  // Sync activeOrders با orders
  // --------------------
  useEffect(() => {
    setActiveOrders(orders);
  }, [orders]);

  // --------------------
  // فیلتر و مرتب‌سازی
  // --------------------
  useEffect(() => {
    let filteredOrders = [...orders];

    // --- فیلتر سرچ ---
    if (searchValue !== "") {
      filteredOrders = filteredOrders.filter((item) =>
        item.orderIdentifier.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // --- فیلتر فاز / نوع ---
    const activeFilters = Object.keys(filterStatus).filter(
      (key) => filterStatus[key] === 1
    );
    if (activeFilters.length > 0) {
      filteredOrders = filteredOrders.filter((order) =>
        activeFilters.some((key) =>
          key === "6" ? order.type === 2 : order.phase === Number(key)
        )
      );
    }

    // --- مرتب‌سازی ---
    if (sortStatus === "newest") {
      filteredOrders.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    } else if (sortStatus === "oldest") {
      filteredOrders.sort(
        (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
      );
    } else if (sortStatus === "price") {
      filteredOrders.sort((a, b) => (b.expertPrice || -Infinity) - (a.expertPrice || -Infinity));
    } else if (sortStatus === "items") {
      filteredOrders.sort((a, b) => {
        const itemsA = Array.isArray(a.items) ? a.items.length : Number(a.items) || 0;
        const itemsB = Array.isArray(b.items) ? b.items.length : Number(b.items) || 0;
        return itemsB - itemsA;
      });
    }

    setActiveOrders(filteredOrders);

    // 🚀 وقتی سرچ یا فیلتر تغییر می‌کند، صفحه همیشه به ۱ برمی‌گردد
    setActivePage(1);
  }, [searchValue, sortStatus, filterStatus, orders]);

  // --------------------
  // Context value
  // --------------------
  const value = {
    orders,
    setOrders,
    activeOrders,
    setActiveOrders,
    activeOrdersLength,
    setActiveOrdersLength,
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
    isFilterOpen,
    setIsFilterOpen,
    filterStatus,
    setFilterStatus,
  };

  return (
    <orderContext.Provider value={value}>{children}</orderContext.Provider>
  );
};
