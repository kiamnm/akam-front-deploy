import React from "react";
import "./style.css";
import HomeTable from "./HomeTable";
import ClientLayout from "../clientLayout/ClientLayout";
import fetchHomeProducts from "@/utils/products/fetchHomeProducts";


const data=await fetchHomeProducts()
console.log(data);
console.log(data);
export default function HomeTableWrapper() {
  return (
    <div className="home-table-wrapper">
      <ClientLayout>
        <h2 className="anjoman_bold fs_20 color_text ">قیمت مقاطع فولادی</h2>
      </ClientLayout>
      
      <HomeTable data={data}></HomeTable>
    </div>
  );
}
