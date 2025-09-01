import React from "react";
import "./style.css";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import OrdersStatus from "@/components/userPanel/ordersStatus/OrdersStatus";
import OrderTable from "@/components/userPanel/orderTable/OrderTable";
import OrderPagination from "@/components/userPanel/orderPagination/OrderPagination";
import { OrderProvider } from "@/context/userPanel/Order";
import OrderActions from "@/components/userPanel/orderActions/OrderActions";

export default function page() {
  
  return (
    <OrderProvider>
    <div className="order-tab-container px-3 pt-3 d-flex flex-column  flex-grow-1">
      <OrdersStatus></OrdersStatus>
      <OrderActions></OrderActions>
      <OrderTable ></OrderTable>
      <OrderPagination></OrderPagination>
      
    </div>
    </OrderProvider>
  );
}
