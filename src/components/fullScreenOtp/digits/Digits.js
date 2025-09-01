import React, { useState, useRef,useContext } from 'react';
import "./style.css"


export default function OtpInput({otp,setOtp}) {
  const length = 6; // تعداد رقم
  
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return; // فقط عدد

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // فقط یک رقم آخر

    setOtp(newOtp);

    // اگر عدد وارد شد، برو بعدی
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      }
    } else if (e.key === 'ArrowLeft') {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowRight') {
      if (index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('text').slice(0, length).split('');
    const newOtp = [...otp];
    pastedData.forEach((char, i) => {
      if (/^\d$/.test(char)) {
        newOtp[i] = char;
      }
    });
    setOtp(newOtp);

    // بعد از paste، روی آخرین خانه پر شده فوکوس کنیم
    const nextIndex = pastedData.length < length ? pastedData.length : length - 1;
    inputsRef.current[nextIndex].focus();
  };

  return (
    <div className='d-flex flex-row-reverse' style={{  gap: '8px' }}>
      {otp.map((digit, idx) => (
        <input
        className='estelam-digit-input'
          key={idx}
          ref={el => inputsRef.current[idx] = el}
          type="text"
          inputMode="numeric"
          maxLength="1"
          dir="ltr"
          value={digit}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          onPaste={handlePaste}
          
        />
      ))}
    </div>
  );
}
