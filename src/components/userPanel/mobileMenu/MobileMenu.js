"use client"
import React,{useState} from 'react'
import { usePathname } from 'next/navigation'
import { FaRegEdit } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";
import { BsCartCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import "./style.css"
import Link from 'next/link'
import ClientLayout from '@/components/clientLayout/ClientLayout';
export default function MobileMenu() {
    const [activeTab,setActiveTab]=useState("profile")
     const pathname = usePathname();
  return (
   
<div className=" d-flex align-items-center justify-content-start  user-panel-mobile-menu mt-3 ">
          

          
            <Link
              href={"/userpanel/orders"}
              className={`item-container d-flex align-items-center px-3 px-md-4 py-2 cursor_pointer text-decoration-none ${
                pathname.includes("orders")? "active" : "not-active"
              }`}
              
            >
             
                <div className="p-0 m-0">
                   
                            <BsCartCheck
                                          style={{ color: "white", fontSize: "20px" }}
                                        ></BsCartCheck>
                          
                </div>
              
              <p className="p-0 m-0 me-2 color_white fs_14 anjoman_light title">
               سفارشات
              </p>
            </Link>





            <Link
              href={"/userpanel/ticket"}
              className={`item-container d-flex align-items-center px-3 px-md-4 py-2 cursor_pointer text-decoration-none ${
                pathname.includes("ticket")? "active" : "not-active"
              }`}
              
            >
             
                <div className="p-0 m-0">
                   
                            <TiMessage style={{ color: "white", fontSize: "20px" }}></TiMessage>
                          
                </div>
              
              <p className="p-0 m-0 me-2 color_white fs_14 anjoman_light title">
                تیکت‌ها
              </p>
            </Link>





            <Link
              href={"/userpanel/profile"}
              className={`item-container d-flex align-items-center px-3 px-md-4 py-2 cursor_pointer text-decoration-none ${
                pathname.includes("profile")? "active" : "not-active"
              }`}
              
            >
             
                <div className="p-0 m-0">
                   
                            <FaRegEdit style={{ color: "white", fontSize: "20px" }}></FaRegEdit>
                          
                </div>
              
              <p className="p-0 m-0 me-2 color_white fs_14 anjoman_light title">
                ویرایش پروفایل
              </p>
            </Link>
        
        </div>
    
  )
}
