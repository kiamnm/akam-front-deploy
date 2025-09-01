import React from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";
import Link from "next/link";

export default function Footer() {
  const social=
[
  {iconSrc:"/images/insta-logo.svg",href:"https://www.instagram.com/ahanakamco",title:"instagram"},
  {iconSrc:"/images/telegram-logo.svg",href:"https://t.me/foladakamgostar",title:"telegram"},
  {iconSrc:"/images/whatsapp-logo.svg",href:"https://wa.me/989203051906",title:"whatsapp"},
  {iconSrc:"/images/linkdin-logo.svg",href:"https://rubika.ir/Tejaratfooladakamgostar",title:"linkdin"},
]
const menu=[
  {        title:"صفحه اصلی",href:"test"},
  {        title:"استعلام قیمت",href:"test"},
  {        title:"تماس با ما",href:"test"},
  {        title:"صفحه اصلی",href:"test"},
  {        title:"استعلام قیمت",href:"test"},
  {        title:"تماس با ما",href:"test"}
        ]
const access=[
          {        title:"صفحه اصلی",href:"test"},
          {        title:"استعلام قیمت",href:"test"},
          {        title:"تماس با ما",href:"test"},
          {        title:"صفحه اصلی",href:"test"},
          {        title:"استعلام قیمت",href:"test"},
          {        title:"تماس با ما",href:"test"}
                ]
                const contactInfo=[
                  {iconSrc:"/images/email-logo.svg",title:"ایمیل",info:"info.akamgostar@gmail.com"},
                  {iconSrc:"/images/phone-logo.svg",title:"تماس با ما",info:"021-91001083"},
                  {iconSrc:"/images/location-logo.svg",title:"آدرس",info:"تهران - خیابان پاسداران - خیابان وفامنش - خیابان رضاییان -  پلاک88 - واحد 1"},
                 

                ]
  
              
  return (
    <div className="w-100 footer-component-container ">
      
 <ClientLayout>
  
        <div className="footer_container d-flex flex-column-reverse flex-md-row justify-content-between w-100">
          <div className="right-container d-flex flex-column flex-md-row justify-content-start">
            <div className="logo-container d-none d-md-block ">
              <div className="logo d-flex align-items-center  ">
                <img src="/images/logo-black.svg" alt="" />
                <p className="m-0 fs_16 anjoman_medium">فولاد آکام گستر</p>
              </div>
              <div className="social d-flex justify-content-between ">
                {social.map((item,index)=>{
                  return(
                     <a target="_blank"
                  rel="noopener noreferrer"   key={index} href={item.href}><img src={item.iconSrc} alt={item.title} /></a>
                  )
                })}
               
              </div>
            </div>
            <div className="menu-container d-flex flex-column ">
              <p className="anjoman_bold fs_14 m-0">منوی سایت</p>
              {menu.map((item,index)=>{
                return (
                  <Link className="text-decoration-none color_black fs_14 anjoman_regular cursor_pointer"  key={index} href={item.href}>{item.title}</Link>
                )
              })}
            </div>
            
            <div className="access-container d-flex flex-column ">
              <p className="anjoman_bold fs_14 m-0">دسترسی سریع</p>
              {access.map((item,index)=>{
                return (
                  <Link className="text-decoration-none color_black fs_14 anjoman_regular cursor_pointer" key={index} href={item.href}>{item.title}</Link>
                )
              })}
            </div>
            <div className="logo-container d-block d-md-none">
              <div className="logo d-flex align-items-center">
                <img src="/images/logo-black.svg" alt="" />
                <p className="m-0 fs_16 anjoman_regular">فولاد آکام گستر</p>
              </div>
              <div className="social d-flex justify-content-between">
                {social.map((item,index)=>{
                  return(
                     <a 
                   key={index} href={item.href}><img src={item.iconSrc} alt={item.title} /></a>
                  )
                })}
               
              </div>
            </div>
          </div>
          <div className="left-container d-flex flex-column ">
            {contactInfo.map((item,index)=>{
              return (
                <div key={index} className="footer-contact d-flex align-items-center ">
                <img  src={item.iconSrc} alt={item.title} />
                <p className="m-0 fs_14 anjoman_semibold ">{item.title}: </p>
                <p className={`m-0 fs_14 anjoman_num_regular text-decoration align-self-center info ${item.info==="021-91001083"?"phone":""}`}>{item.info}</p>
            </div>
              )
            })}
          </div>
          
        </div>
        <p className="w-100 text-center  fs_14 anjoman_regular company-right ">کلیه حقوق این وبسایت متعلق به شرکت تجارت فولاد آکام گستر می‌باشد.</p>
      </ClientLayout>
    </div>
  );
}
