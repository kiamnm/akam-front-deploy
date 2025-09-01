"use client";
import React, { useState, useContext } from "react";
import "./style.css";
import { BsCart2 } from "react-icons/bs";
import { FaRegChartBar } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { CartContext } from "@/context/cartContext";
import AddToBaskeModal from "../addToBasketModal/AddToBaskeModal";
import ModalChart from "../modalChart/ModalChart";
import Tooltip from "@mui/material/Tooltip";

export default function ProductTable({ products }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedChart,setSelectedChart]=useState(null)
  const {
    addToBasket,
    cartItems,
    addToBasketModalShow,
    setAddToBasketModalShow,
  } = useContext(CartContext);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isInCart = (objid) => {
  return Array.isArray(cartItems) && cartItems.some((item) => item._id === objid);
};

  const clickAddToBasket = (item) => {
    addToBasket(item);
    setAddToBasketModalShow(item.fullTitle); // ارسال مستقیم عنوان
  };

  return (
    <div className="px-0 w-100 product-table-container">
      {selectedChart &&(
        <ModalChart
    productId={selectedChart}
    onClose={() => setSelectedChart(null)}
  />
      )}
      {addToBasketModalShow && (
        <AddToBaskeModal productTitle={addToBasketModalShow} />
      )}

      <div className="table-responsive">
        <table
          className="table m-0 table-striped"
          style={{ borderCollapse: "separate", borderSpacing: "0" }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <th className="text-center py-3 fs_table_title anjoman_bold">
                عنوان
              </th>
              <th className="text-center py-3 fs_table_title anjoman_bold d-none d-md-table-cell">
                کارخانه
              </th>
              <th className="text-center py-3 fs_table_title anjoman_bold d-none d-md-table-cell">
                ابعاد
              </th>
              <th className="text-center py-3 fs_table_title anjoman_bold d-none d-md-table-cell">
                وزن شاخه
              </th>
              <th className="text-center py-3 fs_table_title anjoman_bold">
                قیمت
              </th>
              <th className="text-center py-3 fs_table_title anjoman_bold col-1">
                سفارش
              </th>
              <th className="text-center py-3 d-none d-md-table-cell fs_table_title anjoman_bold col-1">
                تغییرات
              </th>
              <th className="text-center py-3 fs_table_title anjoman_bold col-1">
                جزئیات
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item, index) => (
                <React.Fragment key={index}>
                  <tr>
                    
                    <td className="text-center fs_12 anjoman_num_medium">
                      <Link
                        href={`/product/each/${item._id}`}
                        className="color_orange text-decoration-none"
                      >
                        <p className="d-none d-md-block">{item.shortTitle}</p>
                        <p className="d-block d-md-none">{item.fullTitle}</p>
                      </Link>
                    </td>
                    <td className="text-center fs_12 anjoman_medium d-none d-md-table-cell">
                      {item.factory}
                    </td>
                    <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell">
                      {item.dimention}
                    </td>
                    <td className="text-center fs_12 anjoman_num_medium d-none d-md-table-cell">
                      <div className="d-flex flex-column">
                        <span>{item.unitWeight}</span>
                        <span>(kg)</span>
                      </div>
                    </td>
                    <td className="text-center fs_12 anjoman_num_medium">
                      <div className="d-flex flex-column">
                        <span>{Number(item.price).toLocaleString()}</span>
                        <span>(تومان)</span>
                      </div>
                    </td>
                    {isInCart(item._id) ? (
                      <td className="text-center fs_12 anjoman_num_medium col-1">
                        <span
                          className={`cart-container p-2 rounded-1 bg_color_black `}
                        >
                          <BsCart2
                            style={{ fontSize: "18px", color: "white" }}
                          />
                        </span>
                      </td>
                    ) : (
                      <td
                        onClick={() => clickAddToBasket(item)}
                        className="text-center fs_12 anjoman_num_medium col-1"
                      >
                        <span
                          className={`cart-container p-2 rounded-1 cursor_pointer bg_color_orange`}
                        >
                          <BsCart2
                            style={{ fontSize: "18px", color: "white" }}
                          />
                        </span>
                      </td>
                    )}

                    <td className="text-center d-none d-md-table-cell col-1">
                      {/* <FaRegChartBar
                      onClick={()=>{setSelectedChart(item._id)}}
                        style={{ fontSize: "22px", color: "#B3B3B3" }}
                      /> */}
                        <Tooltip
                                  title="به زودی"
                                  placement="bottom"
                                  PopperProps={{
                                    modifiers: [
                                      {
                                        name: "offset",
                                        options: {
                                          offset: [0, 4], // مقدار دوم فاصله عمودی رو کم یا زیاد می‌کنه
                                        },
                                      },
                                    ],
                                  }}
                                  componentsProps={{
                                    tooltip: {
                                      sx: {
                                        fontFamily: "anjomanRegular",
                                        fontSize: "12px",
                                      },
                                    },
                                  }}
                                >
                                  {" "}
                                   <FaRegChartBar
                      
                        style={{ fontSize: "22px", color: "#B3B3B3" }}
                      />
                                </Tooltip>
                      
                    </td>
                    <td className="text-center col-1">
                      <span
                        onClick={() => handleToggle(index)}
                        style={{ cursor: "pointer", fontSize: "20px" }}
                      >
                        {openIndex === index ? (
                          <FiChevronUp />
                        ) : (
                          <FiChevronDown />
                        )}
                      </span>
                    </td>
                  </tr>

                  {openIndex === index && (
                    <tr>
                      <td colSpan="12">
                        <div className="   d-flex justify-content-start flex-wrap fs_12 anjoman_light table-row-detail">
                          {item.detail.map((item, index) => {
                            const [key, value] = Object.entries(item)[0];
                            return (
                              <div
                                key={index}
                                className=" anjoman_num_regularfs_12"
                              >
                                <span className="anjoman_semibold fs_12">
                                  {key}:&nbsp;
                                </span>
                                {value}
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
