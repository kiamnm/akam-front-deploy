"use client";
import React, { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import getOneOrder from "@/utils/userpanel/order/fetchGetOneOrder";

export const wizardProcessContext = createContext();

export const WizardProcessProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const orderObjid = searchParams.get("orderId");

  const [order, setOrder] = useState(null);
  const [manualFormItems, setManualFormItems] = useState([]);
  const [uploadFormExplenation, setUploadFormExplenation] = useState("");
  const [orderType, setOrderType] = useState("1");
  const [cartItems,setCartItems]=useState([])

  ///gereftane data order dar marhale vorod be step
  useEffect(() => {
    const getData = async () => {
      const response = await getOneOrder(orderObjid);
      console.log(response);
      if (response) {
        setOrder(response);
        setOrderType(response.type);
        if (response.type === "2") {
          setUploadFormExplenation(response.explanation);
        }
        if(response.type==="3"){
          setCartItems(response.items)
        }
      } else {
        setOrder(false);
      }
    };
    if (orderObjid) {
      getData();
    }
  }, [orderObjid, searchParams,pathname]);
  ///gereftane data order dar marhale vorod be step

  const value = {
    order,
    setOrder,
    manualFormItems,
    setManualFormItems,
    orderType,
    uploadFormExplenation,
    setUploadFormExplenation,
    cartItems,setCartItems
  };

  return (
    <wizardProcessContext.Provider value={value}>
      {children}
    </wizardProcessContext.Provider>
  );
};
