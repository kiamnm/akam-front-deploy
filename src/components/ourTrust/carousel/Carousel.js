"use client";
import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Tooltip from "@mui/material/Tooltip";
import "swiper/css/navigation";

export default function Carousel() {
  
  const data = [
    
{ name: "کویر کاشان فولاد", imgSrc: "/images/colleague/1.svg" },
{ name: "ذوب آهن اصفهان", imgSrc: "/images/colleague/2.svg" },
{ name: "آرین فولاد ", imgSrc: "/images/colleague/3.png" },
{ name: "فایکو", imgSrc: "/images/colleague/4.png" },
{ name: "صبا فولاد", imgSrc: "/images/colleague/5.png" },
{ name: "فولاد تهران", imgSrc: "/images/colleague/6.png" },
{ name: "پروفیل صنعت ماهان", imgSrc: "/images/colleague/7.png" },
{ name: " نورد فولاد بارثاوا", imgSrc: "/images/colleague/8.png" },
{ name: "فولاد ناب تبریز", imgSrc: "/images/colleague/9.png" },
{ name: "شرکت فولاد جاوید بناب", imgSrc: "/images/colleague/10.png" },
{ name: "فولاد پارسه کاوه", imgSrc: "/images/colleague/11.png" },



  ];
  return (
    <Swiper
      // اینجا ref مقداردهی میشه

      breakpoints={{
        0: { slidesPerView: 3, spaceBetween: 10 }, // برای موبایل

        992: { slidesPerView: 5, spaceBetween: 20 }, // برای دسکتاپ‌های
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {data.map((item, index) => (







        <SwiperSlide key={index}>
          











          <Tooltip
                title={item.name}
                placement="bottom"
                PopperProps={{
                  
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      fontFamily: "anjomanRegular",
                      fontSize: "12px",
                    },
                  },
                }}
              >
                {" "}
                <div className="slide-container  rounded-2  d-flex align-items-center justify-content-center px-2 py-2" >
            <img src={item.imgSrc} alt={`${item.name}`} className="slide-image" />
          </div>
              </Tooltip>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
