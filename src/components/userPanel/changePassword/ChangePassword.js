"use client";
import React,{useState,useContext,useEffect} from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./style.css";
import validation from "./validation";
import { AuthContext } from '@/context/AuthContext'
import ProFullScreenOtp from '@/components/proFullScreenOtp/ProFullScreenOtp';
import fetchChangePassword from '@/utils/userpanel/fetchChangePassword';
import { ToastContainer, toast } from "react-toastify";
import fetchPhoneForm from '@/utils/login/fetchPhoneForm';

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordErr,setPasswordErr]=useState("")
  const [repeatedPasswordErr,setRepeatedPasswordErr]=useState("")
  const [isOtpShow,setIsOtpShow]=useState(false)
  const [isPending,setIsPending]=useState(false)
   const {user,checkAuth}=useContext(AuthContext)


const handleIsOtpTrue=async()=>{
  const result=await fetchChangePassword(password,setIsPending)
  if(result){
    toast.success("رمز عبور با موفقیت تغییر یافت شد", {
                position: "bottom-right",
              });
              setPassword("")
              setRepeatPassword("")
  }else{
    toast.error("خطایی رخ داده است !", {
                position: "bottom-right",
              });
  }
}
  const handleClickChange=async()=>{
    setPasswordErr("")
    setRepeatedPasswordErr("")
    const isValid=validation(password,repeatPassword,setPasswordErr,setRepeatedPasswordErr)
    if(isValid){
      
      const isAuth=await checkAuth()
      if(isAuth){
        const phone=user.phone
        const isOtpSent=await fetchPhoneForm(phone, false, setIsPending);
        if(isOtpSent){
           setIsOtpShow(true)
        }else{
          alert("خطایی رخ داده")
        }

        
      }else{
        ///redirect to login
      } 
    }
  }
  return (
    <div className="change-password-container px-2 px-lg-5 d-flex justify-content-between flex-wrap">
      <h2 className="fs_18 anjoman_medium mb-4 col-12">تغییر رمز عبور</h2>
      <div className="input-container ">
        <label className="fs_14 anjoman_regular" htmlFor="">
          کلمه عبور جدید
        </label>
        <input
          className="anjoman_num_regular"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={showPassword ? "text" : "password"}
        />
        <span
          className="password-toggle-icon "
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        <p className="fs_12 anjoman_light color_orange">
         {passwordErr}
        </p>
      </div>

      <div className="input-container ">
        <label className="fs_14 anjoman_regular" htmlFor="">
          تکرار کلمه عبور جدید
        </label>
        <input
          className="anjoman_num_regular"
          value={repeatPassword}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
          type={showRepeatPassword ? "text" : "password"}
        />
        <span
          className="password-toggle-icon "
          onClick={() => setShowRepeatPassword((prev) => !prev)}
        >
          {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        <p className="fs_12 anjoman_light color_orange">
          {repeatedPasswordErr}
        </p>
      </div>
      <div className=" w-100 text-center text-lg-start">
        <button onClick={handleClickChange} className="anjoman_regular change-password fs_14 bg_color_orange color_white px-3 py-2 rounded-1 ">
          تغییر کلمه عبور
        </button>
      </div>
      {isOtpShow &&(
        <ProFullScreenOtp setIsOtpShow={setIsOtpShow} handleIsOtpTrue={handleIsOtpTrue} phoneNumber={user.phone}></ProFullScreenOtp>
      )}
    </div>
  );
}
