import React from "react";
import ClientLayout from "../clientLayout/ClientLayout";
import Topbar from "./topbar/Topbar";
import Navbar from "./navbar/Navbar";
import "./style.css"

export default function DesktopMenu() {
  return (
    <div >
      <ClientLayout bgColor={"bg_color_gray"}>
        <Topbar></Topbar>
        
      </ClientLayout>
      <div className="d-none d-md-block">
        <ClientLayout bgColor={"bg_color_white"}>
      <Navbar ></Navbar>
        
      </ClientLayout>
      </div>
      
      
      
      
    </div>
  );
}
