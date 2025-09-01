"use client"
import React,{useState,useEffect} from 'react'
import "./style.css"
import { MdOutlineClose } from "react-icons/md";

export default function AcceptstionModal({isModalShow,setIsModalShow,isPending,text,clickOk}) {
    useEffect(()=>{
            if(isModalShow){
                document.body.style.overflow = 'hidden';
            }else{
                document.body.style.overflow = 'auto';
            }
            return () => {
                document.body.style.overflow = 'auto';
              };
        },[isModalShow])
  return (
    <div className='acceptation-modal-container d-flex justify-content-center align-items-center'>
        <div className="overlay"></div>
        <div className="modal-container">
            <div className="close cursor_pointer" onClick={()=>{setIsModalShow(false)}}>
                <MdOutlineClose />
            </div>
            <div className="text">{text}</div>
            <div className="button-container w-100 d-flex justify-content-between">
                <button onClick={()=>{clickOk()}}>{isPending?"لطفا صبر کنید ":"بله"}</button>
                <button onClick={()=>{setIsModalShow(false)}}>لغو</button>
            </div>
        </div>
    </div>
  )
}
