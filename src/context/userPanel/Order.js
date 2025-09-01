"use client";
import React, { createContext, useState, useEffect } from "react";

import fetchGetAllOrders from "@/utils/userpanel/order/fetchGetAllOrdes";
export const orderContext = createContext();
export const OrderProvider = ({ children }) => {
const [orders,setOrders]=useState([
    {
      type: 1,
      objId: "abskn5566ad5s64",
      orderIdentifier: "GD4738701",
      date: "22/05/1404",
      clock: "02:56",
      items: "103",
      
      phase:3,
      expertPrice:42500000,
      updatedAt:"2025-08-28T08:23:45.123Z",
    },
    {
      type: 1,
      objId: "abskn5566ad5s65",
      orderIdentifier: "GD4738702",
      date: "22/05/1404",
      clock: "02:56",
      items: "107",
      
      phase:2,
      expertPrice:null,
      updatedAt:"2025-08-27T15:12:01.456Z"
    },
    {
      type: 1,
      objId: "abskn556855s6",
      orderIdentifier: "GD4738703",
      date: "22/05/1404",
      clock: "02:56",
      items: "20",
      updatedAt:"2025-09-28T08:23:45.123Z",
      phase:3,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn9666ad5s6",
      orderIdentifier: "GD4738704",
      date: "22/05/1404",
      clock: "02:56",
      items: "20",
      updatedAt:"2025-08-28T08:23:46.123Z",
      phase: 4,
    },
    {
      type: 1,
      objId: "abfgdn5566ad5s6",
      orderIdentifier: "GD4738705",
      date: "22/05/1404",
      clock: "02:56",
      items: "104",
      updatedAt:"2025-08-23T08:23:45.123Z1",
      phase: 4,
    },
    {
      type: 1,
      objId: "absknky5566ad5s6",
      orderIdentifier: "GD4738706",
      date: "22/05/1404",
      clock: "02:56",
      items: "102",
      updatedAt:"2024-08-28T08:23:45.123Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskkil566ad5s6",
      orderIdentifier: "GD4738707",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-28T08:21:45.123Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn5we66ad5s6",
      orderIdentifier: "GD47387070",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-28T08:17:45.123Z",
      phase: 4,
    },
    {
      type: 1,
      objId: "ahtrkn5566ad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-28T08:21:45.123Z",
      phase:2,
      expertPrice:null,
    },
    {
      type: 1,
      objId: "abskn55lui6ad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-28T08:21:52.123Z",
      phase:3,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn86566ad5s6",
      orderIdentifier: "GD47387072",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:4,
    },
    {
      type: 1,
      objId: "abskn55888ad5s6",
      orderIdentifier: "GD47387073",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:3,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abs995566ad5s6",
      orderIdentifier: "GD47387074",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase: 4,
      expertPrice:null
    },
    {
      type: 1,
      objId: "absk6666ad5s6",
      orderIdentifier: "GD47387075",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:1,
      expertPrice:null,
    },
    {
      type: 1,
      objId: "abskn5566a+38s6",
      orderIdentifier: "GD47387076",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:2,
      expertPrice:null,
    },
    {
      type: 1,
      objId: "abskn5posmad5s6",
      orderIdentifier: "GD47387076",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:5,
      expertPrice:null,
    },
    {
      type: 1,
      objId: "absktbx566ad5s6",
      orderIdentifier: "GD47387076",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:5,
      expertPrice:null,
    },
    {
      type: 1,
      objId: "abskqujc66ad5s6",
      orderIdentifier: "GD47387079",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:3,
    },
    {
      type: 1,
      objId: "abqqn5566ad5s6",
      orderIdentifier: "GD47387078",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:3,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abs[]vkl]566ad5s6",
      orderIdentifier: "GD47387",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      
      phase:2,
      expertPrice:null,
    },
    {
      type: 1,
      objId: "abskn559s2ad5s6",
      orderIdentifier: "GD4738707",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-27T15:12:01.456Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "a52m66ad5s6",
      orderIdentifier: "GD4738707",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn5px26ad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn55rgqd5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abshtb566ad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn55nread5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "awtkn5566ad5s6u",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "wetskn5566ad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abs6fs5566ad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn558gfad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn5hfw6ad5s6",
      orderIdentifier: "GD4738707071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:3,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abskn5rt5ad5s6",
      orderIdentifier: "GD47387071",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },
    {
      type: 1,
      objId: "abs34vb566ad5s6",
      orderIdentifier: "GD4738707",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:1,
      expertPrice:null
    },


    {
      type: 2,
      objId: "abskn8shge5s6",
      orderIdentifier: "GD4738707",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      updatedAt:"2025-08-26T20:45:30.789Z",
      phase:2,
      expertPrice:null,
    },
    {
      type: 3,
      objId: "abskn58xgsad5s6",
      orderIdentifier: "GD47387075",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      expertPrice: "300000000",
      phase:3,
      expertPrice:null,
      updatedAt:"2025-08-26T20:45:30.789Z",
    },
    {
      type: 1,
      objId: "absknbq[cad5s6",
      orderIdentifier: "GD47387076",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      expertPrice:"14000000",
      phase: 4,
      updatedAt:"2025-08-26T20:45:30.789Z",
    },
    {
      type: 3,
      objId: "abjyd566ad5s6",
      orderIdentifier: "GD47380747",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      expertPrice: null,
      phase:2,
      expertPrice:null,
      updatedAt:"2025-08-26T20:45:30.789Z",
    },
     {
      type: 3,
      objId: "abskn5566f82s6",
      orderIdentifier: "GD47387078",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      expertPrice: null,
      phase:2,
      expertPrice:null,
      updatedAt:"2025-08-26T20:45:30.789Z",
    },
     {
      type: 3,
      objId: "aa5566ada6",
      orderIdentifier: "GD47387078",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      expertPrice: null,
      phase:2,
      expertPrice:null,
      updatedAt:"2025-08-26T20:45:30.789Z",
    },
     {
      type: 3,
      objId: "abskn5fd8sad5s6",
      orderIdentifier: "GD47387073",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      expertPrice: null,
      phase:2,
      
      updatedAt:"2025-08-26T20:45:30.789Z",
    },
     {
      type: 3,
      objId: "abskn55vnwsid5s6",
      orderIdentifier: "GD47387075",
      date: "22/05/1404",
      clock: "02:56",
      items: "10",
      price: "300000000",
      phase:2,
      expertPrice:null,
      updatedAt:"2025-08-26T20:45:30.789Z",
    },
  ])
  const [serachValue,setSearchValue]=useState("")
  const [activeOrders,setActiveOrders]=useState([])
   const [activePage, setActivePage] = useState(1);
   const [isSortOpen,setIsSortOpen]=useState(false)
   const [isFilterOpen,setIsFilterOpen]=useState(false)
   const [sortStatus,setSortStatus]=useState("newest")
   const [filterStatus,setFilterStatus]=useState({"1":0,"2":0,"3":0,"4":0,"5":0,"6":0})
   const [dataPerPage,setDataPerPage]=useState(6)

  const [activeOrdersLength,setActiveOrdersLength]=useState(0)


useEffect(()=>{
setActiveOrdersLength(activeOrders.length)
},[activeOrders])
useEffect(()=>{
const fetchOrders = async () => {
    const allOrders = await fetchGetAllOrders();
    setOrders(allOrders)
  };

  fetchOrders();
},[])
useEffect(()=>{
setActiveOrders(orders)
},[])

useEffect(() => {
  let filteredOrders = [...orders];

  // --- فیلتر سرچ ---
  if (serachValue !== "") {
    filteredOrders = filteredOrders.filter(item =>
      item.orderIdentifier.toLowerCase().includes(serachValue.toLowerCase())
    );
  }

  // --- فیلتر status/type ---
  const activeFilters = Object.keys(filterStatus).filter(key => filterStatus[key] === 1);

  if (activeFilters.length > 0) {
    filteredOrders = filteredOrders.filter(order => {
      return activeFilters.some(key => {
        if (key === "6") {
          return order.type === 2;
        } else {
          return order.phase === Number(key);
        }
      });
    });
  }

  // --- مرتب‌سازی ---
  if (sortStatus === "newest") {
    filteredOrders.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  } else if (sortStatus === "oldest") {
    filteredOrders.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
  } else if (sortStatus === "price") {
    filteredOrders.sort((a, b) => {
      const priceA = a.expertPrice ? Number(a.expertPrice) : -Infinity;
      const priceB = b.expertPrice ? Number(b.expertPrice) : -Infinity;
      return priceB - priceA;
    });
  } else if (sortStatus === "items") {
    filteredOrders.sort((a, b) => {
      const itemsA = a.items ? Number(a.items) : -Infinity;
      const itemsB = b.items ? Number(b.items) : -Infinity;
      return itemsB - itemsA;
    });
  }

  setActiveOrders(filteredOrders);

  // 🚀 اینجا همیشه برگرد به صفحه ۱ وقتی سرچ/فیلتر تغییر می‌کنه
  setActivePage(1);

}, [serachValue, sortStatus, filterStatus, orders]);




const value={
activeOrders,setActiveOrders,activeOrdersLength,setActiveOrdersLength,activePage, setActivePage,serachValue,setSearchValue,isSortOpen,setIsSortOpen,sortStatus,setSortStatus,isFilterOpen,setIsFilterOpen,filterStatus,setFilterStatus,dataPerPage,setDataPerPage
}
    return <orderContext.Provider value={value}>{children}</orderContext.Provider>;
}
