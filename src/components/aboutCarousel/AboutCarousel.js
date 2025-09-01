"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./style.css";

export default function AboutCarousel() {
  const data = [
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
    "/images/parskhazar-logo.svg",
  ];
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
    <div className="about-carousel-container d-flex align-items-center justify-content-between">
      <div
        className="arrow-right"
        onClick={handleNext}
        style={{
          cursor: "pointer",
          opacity: isEnd ? 0.6 : 1, // اگر به انتها رسیدیم کمرنگ کن
          pointerEvents: isEnd ? "none" : "auto", // غیرفعال کن
        }}
      >
        <MdKeyboardArrowRight style={{ fontSize: "30px", color: "black" }} />
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // اینجا ref مقداردهی میشه
        slidesPerView={10}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 }, // برای موبایل
          576: { slidesPerView: 4, spaceBetween: 10 }, // برای تبلت‌ها
          992: { slidesPerView: 6, spaceBetween: 20 }, // برای دسکتاپ‌های کوچک
          1200: { slidesPerView: 8, spaceBetween: 30 }, // برای دسکتاپ‌های بزرگ
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data?.length > 0 &&
          data.map((item,index) => {
            return (
              <SwiperSlide key={index}>
              <div className="each-item py-3">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
            );
          })}
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
        <MdKeyboardArrowLeft style={{ fontSize: "30px", color: "black" }} />
      </div>
    </div>
  );
}
