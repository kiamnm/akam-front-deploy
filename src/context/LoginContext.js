"use client"
import React,{createContext,useState} from 'react'


export const LoginContext=createContext()

export const LoginProvider=({children})=>{
  const [phone,setPhone]=useState("")
    const [phoneErr,setPhoneErr]=useState("")
    const [formState,setFormState]=useState("phone")
    const [sixDigitShow,setSixDigitShow]=useState(false)
const [otp, setOtp] = useState(["", "", "", "", "", ""]);
const [secondsLeft, setSecondsLeft] = useState(90); // شروع از 90 ثانیه
// const [sixDigitShow, setSixDigitShow] = useState(false);
// const [phone,setPhone]=useState("")
// const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// const [secondsLeft, setSecondsLeft] = useState(90); // شروع از 90 ثانیه
// const value={sixDigitShow, setSixDigitShow,phone,setPhone,otp, setOtp,secondsLeft, setSecondsLeft}
const value={phone,setPhone,phoneErr,setPhoneErr,formState,setFormState,otp, setOtp,secondsLeft, setSecondsLeft,sixDigitShow,setSixDigitShow}

    return(
            <LoginContext.Provider value={value}>
          {children}
        </LoginContext.Provider>
        )
}
