import React from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";

import Item from "./item/Item";
import { data } from "./data";


export default function ProductGallery() {

  return (
    <ClientLayout>
      <div className="product-gallery-container">
        <h2 className="anjoman_bold fs_18 mb-0">لیست مقاطع آکام</h2>
        <div className="gallery-container d-flex  row gx-3 gy-3 gx-md-4 gy-md-4 mt-1">
          {data.map((item,index)=>{
            return(
                <Item item={item} key={index}></Item>
            )
          })}
          
        </div>
      </div>
    </ClientLayout>
  );
}
