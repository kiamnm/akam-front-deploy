"use client"
import React,{useState,useContext,useEffect} from 'react'
import "./style.css"
import { AuthContext } from '@/context/AuthContext'
import validation from './validation'
import AcceptstionModal from '@/components/acceptationModal/AcceptstionModal'
import fetchEditGeneralInfo from '@/utils/userpanel/fetchEditGeneralInfo'
import { ToastContainer, toast } from "react-toastify";

export default function ChangeGeneralInfo() {
    const {user,checkAuth}=useContext(AuthContext)
     const [name,setName]=useState("")
     
     const [phone,setPhone]=useState("")
     const [email,setEmail]=useState("")
     const [username,setUsername]=useState("")
     const [nameErr,setNameErr]=useState("")
     const [phoneErr,setPhoneErr]=useState("")
     const [emailErr,setEmailErr]=useState("")
     const [usernameErr,setUsernameErr]=useState("")
     const [isModalShow,setIsModalShow]=useState(false)
     const [isPending,setIsPending]=useState(false)

      useEffect(() => {
         if (user) {
           if (user.name) setName(user.name);
           if (user.phone) setPhone(user.phone);
           if (user.email) setEmail(user.email);
           if (user.username) setUsername(user.username);
         }
       }, [user]);
const handleClickEdit=async()=>{
  setNameErr("")
  setEmailErr("")
  setPhoneErr("")
  if((user.name!==name)||(user.email!==email)||(user.username!==username)){
    const isdataValid=validation(name,email,username,setNameErr,setEmailErr,setUsernameErr)
    console.log(isdataValid);
    if(isdataValid){
      const isAuth=await checkAuth()
      if(isAuth){
        console.log("miowes");
        setIsModalShow(true)
      }else{
        ///redirect to login
      }
    }
  }
  
}

const handleAcceptChange=async()=>{
  console.log("fier shod");
  const result=await fetchEditGeneralInfo(name,email,username,setIsPending)
  if(result){
    setIsModalShow(false)
    toast.success("فرم با موفقیت ثبت شد", {
            position: "bottom-right",
          });
  }else{
setIsModalShow(false)
toast.error("خطایی رخ داده است !", {
            position: "bottom-right",
          });
  }
}


  return (
     <div className='d-flex justify-content-between flex-wrap px-2 px-lg-5 pt-4 change-general-info'>
        <h2 className='col-12 fs_18 anjoman_medium mb-4'>ویرایش اطلاعت حساب کاربری</h2>
        <div className="input-container ">
        <label className='fs_14 anjoman_regular' htmlFor="">نام و نام خانوادگی</label>
        <input className='anjoman_num_regular' value={name} onChange={(e)=>{
          setName(e.target.value)
        }}  type="text" />
        <p className='fs_12 anjoman_light color_orange'>{nameErr}</p>
      </div>

      <div className="input-container ">
        <label className='fs_14 anjoman_regular' htmlFor="">شماره تماس</label>
        <input className='anjoman_num_regular' value={phone} onChange={(e)=>{setPhone(e.target.value)}}  type="text" />
        <p className='fs_12 anjoman_light color_orange'>{phoneErr}</p>
      </div>


      <div className="input-container col-4">
        <label className='fs_14 anjoman_regular' htmlFor="">نام کاربری</label>
        <input className='anjoman_num_regular' value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />
        <p className='fs_12 anjoman_light color_orange'>{usernameErr}</p>
      </div>


      <div className="input-container">
        <label className='fs_14 anjoman_regular' htmlFor=""> ایمیل</label>
        <input className='anjoman_num_regular' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" />
        <p className='fs_12 anjoman_light color_orange'>{emailErr}</p>
      </div>

        <div className='w-100 text-center text-lg-start '>
          <button onClick={handleClickEdit} className='anjoman_regular edit-profile fs_14 bg_color_orange color_white px-3 py-2 rounded-1 '>ویرایش حساب کاربری</button>
        </div>
        {isModalShow && (
          <AcceptstionModal isModalShow={isModalShow} setIsModalShow={setIsModalShow} isPending={isPending} text={"آیا از تغییر اطلاعات کاربری مطمئن هستید؟"} clickOk={handleAcceptChange}></AcceptstionModal>
        )}
      </div>
  )
}
