"use client"
import React from 'react'
import "./style.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
    const data=[
        
        "/images/test2-trust.svg",
        "/images/test3-trust.svg",
        
        "/images/test2-trust.svg",
        "/images/test3-trust.svg",
        
        "/images/test2-trust.svg",
        "/images/test3-trust.svg",
        
    ]
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
                
                {data.map((imgSrc, index) => (
          <SwiperSlide  key={index}>
            
              <img src={imgSrc} alt={`slide-${index}`} className="slide-image"  />
              
            
          </SwiperSlide>
        ))}
                 
              </Swiper>
    
  )
}
