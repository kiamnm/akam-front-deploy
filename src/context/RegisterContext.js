"use client"
import React,{createContext,useState} from 'react'


export const RegisterContext=createContext()

export const RegisterProvider=({children})=>{

const [sixDigitShow, setSixDigitShow] = useState(false);
const [phone,setPhone]=useState("")
const [otp, setOtp] = useState(["", "", "", "", "", ""]);
const [secondsLeft, setSecondsLeft] = useState(15); // شروع از 90 ثانیه
const [otpError, setOtpError] = useState("");
const value={sixDigitShow, setSixDigitShow,phone,setPhone,otp, setOtp,secondsLeft, setSecondsLeft,otpError,setOtpError}
    return(
            <RegisterContext.Provider value={value}>
          {children}
        </RegisterContext.Provider>
        )
}
