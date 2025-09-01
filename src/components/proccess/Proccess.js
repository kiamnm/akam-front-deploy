import React from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";
import Carousel from "./carousel/Carousel";



export default function Proccess() {

    const data=[{title:"استعلام قیمت",iconSrc:"/images/proccess-icon.svg",detail:"مشتریان محترم میتوانند تنها با یک کلیک و در کمتر از 30 دقیقه از قیمت‌های لحظه ای مطلع شوند."},{title:"استعلام قیمت",iconSrc:"/images/proccess-icon.svg",detail:"مشتریان محترم میتوانند تنها با یک کلیک و در کمتر از 30 دقیقه از قیمت‌های لحظه ای مطلع شوند."},{title:"استعلام قیمت",iconSrc:"/images/proccess-icon.svg",detail:"مشتریان محترم میتوانند تنها با یک کلیک و در کمتر از 30 دقیقه از قیمت‌های لحظه ای مطلع شوند."},{title:"استعلام قیمت",iconSrc:"/images/proccess-icon.svg",detail:"مشتریان محترم میتوانند تنها با یک کلیک و در کمتر از 30 دقیقه از قیمت‌های لحظه ای مطلع شوند."},{title:"استعلام قیمت",iconSrc:"/images/proccess-icon.svg",detail:"مشتریان محترم میتوانند تنها با یک کلیک و در کمتر از 30 دقیقه از قیمت‌های لحظه ای مطلع شوند."},]
  return (
    <ClientLayout>
 
      <div className="w-100 bg_color_orange   proccess-container">
      <Carousel data={data}></Carousel>
      </div>
    </ClientLayout>
  );
}
