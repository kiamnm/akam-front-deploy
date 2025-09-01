"use client";
import React, { useState, useEffect } from "react";
import ChartWrapper from "../homeChart/chart/ChartWrapper";
import ClientLayout from "../clientLayout/ClientLayout";
import "./style.css";

export default function ModalChart({ productId, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // وقتی مودال باز شد، overflow رو مخفی کن
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // trigger انیمیشن ورود
    setIsVisible(true);

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleClose = () => {
    // trigger انیمیشن خروج
    setIsVisible(false);
    // بعد از اتمام transition، واقعاً مودال رو ببند
    setTimeout(() => {
      onClose();
    }, 300); // زمان transition با CSS یکی باشه
  };

  return (
    <div className="modal-chart-container d-flex flex-column justify-content-center">
      <div className="overlay modal-overlay" onClick={handleClose}></div>
      <ClientLayout>
        <div className={`chart-container ${isVisible ? "open" : "close"}`}>
          <ChartWrapper
            haveType={false}
            onClose={handleClose}
            productId={productId}
            range="week"
          />
        </div>
      </ClientLayout>
    </div>
  );
}
