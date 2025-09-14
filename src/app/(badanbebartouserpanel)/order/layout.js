"use client"
import React,{useState} from "react";
import DesktopMenu from "@/components/desktopMenu/DesktopMenu";

import "./style.css"
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import { WizardProcessProvider } from "@/context/userPanel/wizardProcess";






export default function RootLayout({ children }) {
  
  return (
    <WizardProcessProvider>
        <div className="order-page  bg_color_body d-flex flex-column">
          <div className="d-none d-md-block">
            <DesktopMenu></DesktopMenu>
          </div>
          
          <MobileMenu></MobileMenu>
          
<ClientLayout>
    <div className="order-content-layout flex-grow-1 mt-3">
            {children}
          </div>
</ClientLayout>
 </div>
        </WizardProcessProvider>
         
          
          
         
          
        
        
          
          
           
       
      
  );
}
