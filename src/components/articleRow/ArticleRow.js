"use client";
import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import Title from "./title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Item from "./item/Item";



export default function ArticleRow({articleData,titleData}) {
    
    const swiperRef = useRef(null); // ریفرنس به Swiper
      const [isBeginning, setIsBeginning] = useState(true); // آیا در ابتدای اسلاید هستیم؟
      const [isEnd, setIsEnd] = useState(false); // آیا به انتهای اسلاید رسیدیم؟
    
      const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
      };
    
      const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
      };
    
      // به روز رسانی وضعیت کمرنگ بودن فلش‌ها
      useEffect(() => {
        if (swiperRef.current) {
          swiperRef.current.on("slideChange", () => {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
          });
        }
      }, []);
  return (
    <div className="article-row-container  ">
      <div className="title-container">
        <Title titleData={titleData}></Title>
      </div>
      
      <div
        className="carousel-container d-flex justify-content-between align-items-center "
        style={{ width: "100%" }}
      >
        <div
          className="arrow-right"
          onClick={handleNext}
          style={{
            
            cursor: "pointer",
            opacity: isEnd ? 0.6 : 1, // اگر به انتها رسیدیم کمرنگ کن
            pointerEvents: isEnd ? "none" : "auto", // غیرفعال کن
          }}
        >
          <MdKeyboardArrowRight style={{ fontSize: "36px", color: "black" }} />
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // اینجا ref مقداردهی میشه
          slidesPerView={3}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 }, // برای موبایل
            576: { slidesPerView: 2, spaceBetween: 16 }, // برای تبلت‌ها
            1200: { slidesPerView: 3, spaceBetween: 24 }, // برای دسکتاپ‌های کوچک
            1400: { slidesPerView: 4, spaceBetween: 32}, // برای دسکتاپ‌های بزرگ
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {articleData?.length > 0 &&
            articleData.map((itemData, index) => (
              <SwiperSlide key={index}>
                <Item item={itemData} />
              </SwiperSlide>
            ))}
        </Swiper>

        <div
          className="arrow-left"
          onClick={handlePrev}
          style={{
            cursor: "pointer",
            opacity: isBeginning ? 0.3 : 1, // اگر به ابتدای اسلاید رسیدیم کمرنگ کن
            pointerEvents: isBeginning ? "none" : "auto", // غیرفعال کن
          }}
        >
          <MdKeyboardArrowLeft style={{ fontSize: "36px", color: "black" }} />
        </div>
      </div>
    </div>
  );
}
