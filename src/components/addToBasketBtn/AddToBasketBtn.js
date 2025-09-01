"use client";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { IoMdAdd } from "react-icons/io";
import { CartContext } from "@/context/cartContext";
import AddToBaskeModal from "../addToBasketModal/AddToBaskeModal";

export default function AddToBasketBtn({ product, productId, productName }) {
 
  const {
    addToBasket,
    cartItems,
    addToBasketModalShow,
    setAddToBasketModalShow,
  } = useContext(CartContext);
  useEffect(() => {
    
    console.log("from each", cartItems);
  }, [cartItems]);
  const isInCart = () => {
  return Array.isArray(cartItems) && cartItems.some((item) => item._id === productId);
};
  const clickAddToBasket = () => {
    addToBasket(product);
    setAddToBasketModalShow(productName); // ارسال مستقیم عنوان
  };
  return (
    <div
      
      className="submit-btn align-self-end mt-1 mt-md-2"
    >
      {addToBasketModalShow && (
        <AddToBaskeModal productTitle={productName} />
      )}
      <button disabled={isInCart()} onClick={clickAddToBasket} className={` ${isInCart()?"bg-success":"bg_color_orange"} color_white  anjoman_medium fs_12 d-flex justify-content-center gap-1`}>
        <span className="d-flex align-items-center">
          <IoMdAdd style={{ fontSize: "20px" }} />
        </span>
        <span>{isInCart()?"موجود در سبد":"افزودن به سبد خرید"}</span>
      </button>
    </div>
  );
}
