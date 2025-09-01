"use client";
import React, { useEffect, useState,useContext } from "react";
import { RegisterContext } from "@/context/RegisterContext";

export default function Counter() {
    
    const {secondsLeft, setSecondsLeft}=useContext(RegisterContext)

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);
  return (
    <span className="anjoman_num_regular">
        
    </span>
  )
}
