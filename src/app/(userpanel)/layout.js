"use client"
import React,{useState} from "react";
import DesktopMenu from "@/components/desktopMenu/DesktopMenu";
import Link from 'next/link'
import Sidebar from "@/components/userPanel/sideBar/Sidebar";
import "./style.css"
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import { IoMenu } from "react-icons/io5";





export default function RootLayout({ children }) {
  const [isSideBarMenuOpen,setIsSideBarMenuOpen]=useState(false)
  return (
        <div className="user-panel-page  bg_color_body d-flex flex-column">
          <DesktopMenu></DesktopMenu>
          <MobileMenu></MobileMenu>
          <div className={`overlay side-menu ${isSideBarMenuOpen?"d-block":"d-none"}`}></div>
          {/* <div className=" d-block d-lg-none m-0 p-0  ">
            <ClientLayout>
              <MobileMenu></MobileMenu>
            </ClientLayout>
            
          </div> */}
          
          
         
          
        
         <div className="user-panel-layout position-relative   d-flex flex-column flex-lg-row justify-content-start  justify-content-lg-between flex-grow-1">
           <div className="d-block d-lg-none">
             <ClientLayout>
            <div className="userpanel-mobile-menu-icon d-flex gap-2 align-items-center mt-3">
              <span onClick={()=>{setIsSideBarMenuOpen(true)}} className=" bg_color_white rounded-1 d-inline-block p-1">
               <IoMenu style={{fontSize:"28px"}} />
              </span>
              <p className="fs_14 anjoman_semibold m-0">پنل کاربری</p>
            </div>
          </ClientLayout>
          </div>
            <Sidebar isSideBarMenuOpen={isSideBarMenuOpen} setIsSideBarMenuOpen={setIsSideBarMenuOpen}></Sidebar>
          
           <div className="w-100 user-panel-content flex-grow-1 d-flex flex-column">
          {children}
          
         
         </div>
          </div>
          
          
           
        </div>
      
  );
}
