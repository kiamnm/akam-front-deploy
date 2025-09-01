"use client";
import React, { createContext, useState, useEffect } from "react";
import { addItemtoLocalStorage,getAll } from "@/utils/cart/handleLocalStorage";
import fetchPrice from "@/utils/cart/fetchPrice"; 

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
const [cartItems,setCartItems]=useState([])
const [listCount,setListcount]=useState(0)
const [addToBasketModalShow,setAddToBasketModalShow]=useState(false)

const addToBasket = (item) => {
    item.amount=500
    addItemtoLocalStorage(item._id,500)
  setCartItems((prev) => [...prev, item]);
};

useEffect(()=>{

  if(cartItems){
    setListcount(cartItems.length)
  }

},[cartItems])
useEffect(() => {
  const fetchData = async () => {
    const localStorageItems = getAll();
    if (localStorageItems) {
      const newPrice = await fetchPrice(localStorageItems);
      
      setCartItems(newPrice)
    }
  };

  fetchData();
}, []);
const value={
cartItems,
setCartItems,
listCount,addToBasket,addToBasketModalShow,setAddToBasketModalShow
}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
