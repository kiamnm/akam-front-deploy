"use client";
import React, { useState, useContext } from "react";
import "./style.css";
import { FormContext } from "../../context/FormContext";
import { FiMinus } from "react-icons/fi";

import { GoPlus } from "react-icons/go";

export default function DynamicInputs() {
  const { dynamicItems, setDynamicItems, dynamicError, setDynamicError } =
    useContext(FormContext);

  const handleChange = (index, field, value) => {
    const newItems = [...dynamicItems];
    newItems[index][field] = value;
    setDynamicItems(newItems);
  };
  const handleAdd = () => {
    setDynamicItems([...dynamicItems, { productName: "", amount: "" }]);
    setDynamicError([...dynamicError, { name: "", amount: "" }]);
  };
  const handleRemove = (index) => {
    const newdynamicItems = [...dynamicItems];
    newdynamicItems.splice(index, 1);
    setDynamicItems(newdynamicItems);
    const newErrors = dynamicError.filter((_, i) => i !== index); // حذف عضو با index مشخص
    setDynamicError(newErrors);
  };
  return (
    <div className="dynamic-inputs-container">
      {dynamicItems.map((item, index) => {
        return (
          <div
            key={index}
            className="inputs-container d-flex flex-wrap justify-content-center "
          >
            <div className="item-container ">
              <label className="fs_14 anjoman_regular color_text " htmlFor="product-name">
                نام کالا
              </label>
              <input
                className="m-0"
                value={item.productName}
                onChange={(e) =>
                  handleChange(index, "productName", e.target.value)
                }
                placeholder="نام کالا"
                id="product-name"
                type="text"
              />
              {dynamicError[index].name && (
                <p className="color_orange fs_12 anjoman_light pt-2 m-0">
                  {dynamicError[index].name}
                </p>
              )}
            </div>
            <div className="item-container ">
              <label className="fs_14 anjoman_regular color_text " htmlFor="phone">
                تعداد/مقدار
              </label>
              <input
                className="m-0 num"
                value={item.amount}
                onChange={(e) => handleChange(index, "amount", e.target.value)}
                placeholder="تعداد/مقدار"
                id="phone"
                type="text"
              />
              {dynamicError[index].amount && (
                <p className="color_orange fs_12 anjoman_light pt-2 m-0 ">
                  {dynamicError[index].amount}
                </p>
              )}

              {index > 0 && (
                <div
                  className="  d-flex align-items-center cursor_pointer justify-content-end remove-product"
                  onClick={() => handleRemove(index)}
                >
                  <span className="d-flex justify-content-center align-items-center">
                    <FiMinus
                    style={{
                     
                      color: "white",
                      
                      fontSize: "18px",
                      
                    }}
                  />
                  </span>
                  
                  <p className="p-0 pe-2 m-0 fs_12 anjoman_semibold">حذف کالا</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div
        className=" add-product  d-flex w-100 align-items-center cursor_pointer "
        onClick={handleAdd}
      >
        <span className="d-flex align-items-center justify-content-center ">
          <GoPlus
          style={{
            
            color: "white",
            fontSize: "18px",
            
          }}
        />
        </span>
        
        <p className=" m-0 fs_12 anjoman_semibold">افزودن کالا</p>
      </div>
    </div>
  );
}
