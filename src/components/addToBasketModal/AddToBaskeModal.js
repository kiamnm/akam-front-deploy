"use client"
import React,{useState,useEffect,useContext} from 'react'
import "./style.css"
import { IoClose } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CartContext } from '@/context/cartContext';
import Link from 'next/link';

export default function AddToBaskeModal({productTitle}) {
    const {addToBasketModalShow,setAddToBasketModalShow}=useContext(CartContext)
    const closeModal=()=>{
        console.log("close beshe");
        setAddToBasketModalShow(false)
    }
    useEffect(()=>{
                if(addToBasketModalShow){
                    document.body.style.overflow = 'hidden';
                }else{
                    document.body.style.overflow = 'auto';
                }
                return () => {
                    document.body.style.overflow = 'auto';
                  };
            },[addToBasketModalShow])
  return (
    <div className='add-to-basket-modal-container d-flex justify-content-center align-items-center'>
<div className="layout">

</div>
<div className="modal-container   ">
<div className="close-icon  ">
    <IoClose onClick={closeModal} style={{fontSize:"28px",cursor:"pointer"}} />
</div>
<div className="succes-icon text-center" >
    <IoIosCheckmarkCircleOutline style={{fontSize:"40px",color:"green"}} />
</div>
<div className="text">
    <p className='fs_16 anjoman_bold  m-0 text-center color_text'>{productTitle}</p>
    <p className='fs_14 anjoman_regular m-0 text-center color_text'>به سبد خرید اضافه شد!</p>
</div>
<div className="button-container d-flex justify-content-center ">
    <button onClick={closeModal} className='add-more anjoman_regular fs_14'>افزودن کالا</button>
    <Link onClick={closeModal} href="/cart" className='text-decoration-none'>
  <button className='basket  anjoman_regular fs_14 color_white'>
    سبد خرید
  </button>
</Link>
</div>
</div>
    </div>
  )
}
