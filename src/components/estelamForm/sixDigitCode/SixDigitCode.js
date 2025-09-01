"use client"
import React,{useContext,useEffect,useState} from 'react'
import "./style.css"
import { FormContext } from '../context/FormContext'
import { MdClose } from "react-icons/md";
import Digits from './digits/Digits';
import fetchPhoneOtp from '@/utils/login/fetchPhoneOtp';
import { AuthContext } from '@/context/AuthContext';
import fetchCreateOrderManualForm from '@/utils/order/fetchCreateOrderManualForm';
import { ToastContainer, toast } from "react-toastify";
import fetchPhoneForm from '@/utils/login/fetchPhoneForm';


export default function SixDigitCode() {
    const {phone,name,setPhone,setName,dynamicItems,sixDigitShow,setSixDigitShow,otp,setOtpError,otpError,number,setDynamicItems,setIsOtpShow}=useContext(FormContext)
    document.body.style.overflow = 'hidden';    
    const [otpErr,setOtpErr]=useState("")
    const [pending,setPending]=useState(false)
    const {setUser,setIsLogin,setUserRole}=useContext(AuthContext)
    const [counter,setCounter]=useState(20)
    useEffect(()=>{
        if(sixDigitShow){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
          };
    },[sixDigitShow])

const sendOtpAgain=async()=>{

const isOtpSend = await fetchPhoneForm(phone, false, setPending);
if(isOtpSend){
  setCounter(20)
  toast.success("کد جدید ارسال شد", {
          position: "bottom-right",
        });
}else{
  toast.error("خطایی رخ داده است !", {
          position: "bottom-right",
        });
}

}
 const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
};
const handleClickSubmit=async()=>{
    const isComplete = otp.every(digit => digit !== "");
    if(!isComplete){
        setOtpError("* لطفا کد را وارد نمایید.")
    }else{
        const user=await fetchPhoneOtp(phone,otp,setOtpErr,setPending)
        
      if(user){
        setUser(user)
        setIsLogin(true)
        setUserRole("user")
        
        const formResult=await fetchCreateOrderManualForm(user._id,
          name,
          phone,
          dynamicItems,
          setPending)
          if(formResult){
            setSixDigitShow(false)
setName("");
          setPhone("");
          setDynamicItems([
    { productName: "", amount: "" },
  ])
  toast.success("فرم با موفقیت ثبت شد", {
              position: "bottom-right",
            });
          }else{
toast.error("خطایی رخ داده است !", {
            position: "bottom-right",
          });
          }
      }
        // setOtpError("")
        // console.log("آماده ارسال به بکند");
        // setSixDigitShow(false)
    }
}

useEffect(() => {
  if (counter === 0) return;

  const timer = setInterval(() => {
    setCounter((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [counter]);
  return (
    <div className={`${sixDigitShow?"d-flex":"d-none"} estelam-form-sixdigit-container d-flex justify-content-center align-items-center`}>
<div className="layout">

</div>
<div className='six-digit-modal-container  py-3 py-md-4 px-4 d-flex flex-column justify-content-center'>
    <span onClick={()=>{setSixDigitShow(false)}} className='mb-4 cursor_pointer'><MdClose style={{fontSize:"20px"}} /></span>

<p className='fs_14 anjoman_bold m-0 mb-2'>کد تایید را وارد کنید</p>
<p className='anjoman_light fs_14 m-0 mb-4'>لطفا کد ارسال شده به شماره {number} را وارد کنید.</p>
<div className="digits m-0 align-self-center mb-3"><Digits></Digits></div>
<p className='fs_12 anjoman_regular color_orange '>{otpError}</p>

<p className="fs_12 anjoman_light m-0 mb-4">
          {counter>1 && (
             <span>
            {formatTime(counter)} مانده تا دریافت کد جدید
          </span>
          )}
          {counter<1 && (
             <span className="color_orange cursor_pointer underline">
            <span onClick={sendOtpAgain}>دریافت کد جدید</span>کدی دریافت نکردید؟
          </span>
          )}
         
          
          
         
        </p>
<button onClick={handleClickSubmit} className='fs_14 anjoman_light w-100 py-2 bg_color_orange color_white'>{pending ? (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          "ادامه"
        )}</button>
<p className='fs_14 anjoman_light m-0 mt-3 align-self-center cursor_pointer color_orange underline' onClick={()=>{setSixDigitShow(false)}}>ویرایش شماره</p>
</div>
    </div>
  )
}
