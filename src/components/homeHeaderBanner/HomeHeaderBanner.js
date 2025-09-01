"use client"
import React from 'react'
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Link from 'next/link';

import 'swiper/css'; // استایل‌های اصلی Swiper
import ClientLayout from '../clientLayout/ClientLayout'
import Banner1 from './banner1/Banner1';
import Banner2 from './banner2/Banner2';
export default function HomeHeaderBanner() {
   
  return (
    <div className='w-100 home-header-banner-container'>
        <ClientLayout>
           
        
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        modules={[Autoplay, Pagination]}
      >
       
          <SwiperSlide >
            
           <Banner1></Banner1>
          </SwiperSlide>


          <SwiperSlide >
            
           <Banner2></Banner2>
          </SwiperSlide>
      </Swiper>
    
        </ClientLayout>
    </div>
  )
}
