"use client";
import React, { useState,useContext } from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";
import FormTypeBtn from "./formTypeBtn/FormTypeBtn";
import ManualForm from "./manualForm/ManualForm";
import UploadForm from "./uploadForm/UploadForm";
import { FormProvider } from "./context/FormContext";



export default function EstelamForm() {
  const [activeForm, setActiveForm] = useState("manual");
  
  return (
    <div id="estelam" className="w-100">
      
      <ClientLayout>
        <FormProvider>
          <div className="estelam-form-container">
            
            <div className="d-flex align-items-center" >
              
              <FormTypeBtn
              activeForm={activeForm}
              setActiveForm={setActiveForm}
            ></FormTypeBtn>
            <h3 className="anjoman_bold color_text estelam fs_20 mb-4 ">استعلام سریع قیمت</h3>
            </div>
            {activeForm==="manual"?(<ManualForm></ManualForm>):(<UploadForm></UploadForm>)}
            
          </div>
        </FormProvider>
      </ClientLayout>
    </div>
  );
}
