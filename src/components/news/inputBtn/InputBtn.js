"use client"
import React,{useState,useContext} from 'react'
import "./style.css"
import formValidation from "./validation";
import fetchRegisterNews from '@/utils/news/fetchRegisterNews';
import fetchPhoneForm from '@/utils/login/fetchPhoneForm';
import { successNotif, failNotif } from "@/utils/notif";
import { AuthContext } from "@/context/AuthContext"
import ProFullScreenOtp from "@/components/proFullScreenOtp/ProFullScreenOtp";
export default function InputBtn() {
  
    const { checkAuth } = useContext(AuthContext);
  const [phone,setPhone]=useState("")
  const [phoneErr,setPhoneErr]=useState("")
  const [pending,setPending]=useState(false)
  const [isOtpShow,setIsOtpShow]=useState(false)
  const handleClickSubmit=async()=>{
    const isValidate = formValidation(
      phone,
      setPhoneErr
    );
    if (isValidate === true) {
      const user = await checkAuth();
      if (!user) {
        const isOtpSent = await fetchPhoneForm(
          phone,
          setPhoneErr,
          setPending
        );
        if (isOtpSent) {
          setIsOtpShow(true);
        } else {
          failNotif("خطایی در ارسال فرم رخ داد!");
        }
      } else if (user.phone !== phone) {
        setPhoneErr("لطفا شماره تماس خودتان را وارد کنید ");
      } else {
        await sendDataToServer();
      }
    }
  }
  const sendDataToServer=async()=>{
    const result = await fetchRegisterNews(
      phone
    );
    if (result) {
      setPhone("")
      setPhoneErr("")
      successNotif("شما با موفقیت عضو شدید.")
    } else {
      failNotif("خطایی در ارسال فرم رخ داد!");
    }
  }
  return (
    <div className='news-inputbtn-container d-flex flex-column flex-lg-row'>
      <div className='input'>
         <div className="  ">
            <input value={phone} onChange={(e)=>{
              setPhone(e.target.value)
            }} type="text" placeholder='شماره موبایل خود را وارد کنید.' />
        </div>
        <p className='err color_orange fs_12 anjoman_light pt-2 m-0'>{phoneErr}</p>
      </div>
       
        <button className='bg_color_orange color_white anjoman_medium fs_14' onClick={handleClickSubmit}>
           {pending ? (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          "عضویت"
        )}
        </button>
         {isOtpShow && (
                <ProFullScreenOtp
                  setIsOtpShow={setIsOtpShow}
                  handleIsOtpTrue={sendDataToServer}
                  phoneNumber={phone}
                ></ProFullScreenOtp>
              )}
    </div>
  )
}
