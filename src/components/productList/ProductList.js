import React from "react";
import "./style.css";
import TableMenu from "../tableMenu/TableMenu";
import { LuClock5 } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuPrinter } from "react-icons/lu";
import ProductTable from "./../productTable/ProductTable"
import ProductTableTitleInfo from "../productTableTitleInfo/ProductTableTitleInfo";

export default function ProductList() {
  const data = [
    { title: "میلگرد", iconSrc: "/images/tir-icon.svg", key: "" },
    { title: "نبشی", iconSrc: "/images/tir-icon.svg", key: "" },
    { title: "تیرآهن", iconSrc: "/images/tir-icon.svg", key: "" },
  ];
  return (
    <div className="product-list-container">
      <div className="mt-4">
        <ProductTable ></ProductTable>
      </div>
      

    </div>
  );
}
