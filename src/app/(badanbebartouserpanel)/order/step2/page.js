"use client"
import React,{useContext, useEffect, useState} from "react";
import { useSearchParams } from "next/navigation";
import Title from "@/components/orderProcess/title/Title";
import WizardStepper from "@/components/orderProcess/wizardStepper/WizardStepper";
import "./style.css";
import { AuthContext } from "@/context/AuthContext";
import { wizardProcessContext } from "@/context/userPanel/wizardProcess";
import ProModal from "@/components/proModal/ProModal";
import { BsExclamationCircle } from "react-icons/bs";
import fetchGoStep3 from "@/utils/userpanel/order/fetchGoStep3";
import { successNotif,failNotif } from "@/utils/notif";
import { useRouter } from "next/navigation";
import fetchGoPrevious2 from "@/utils/userpanel/order/fetchGoPrevious2";
import { IoWarningOutline } from "react-icons/io5";
import NextPreviousBtn from "@/components/orderProcess/nextPreviousBtn/NextPreviousBtn";
import { IoIosArrowDropright } from "react-icons/io";




export default function page() {
      const router = useRouter();
    const searchParams = useSearchParams();
    const userObjid = searchParams.get("userId");
      const orderObjid = searchParams.get("orderId");
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [isValidationModalShow,setIsValidationModalShow]=useState(false)
    const [isNextStepModalShow,setIsNextStepModalShow]=useState(false)
    const [isPreviousModalShow,setIsPreviuosModalShow]=useState(false)
    const [pending,setPending]=useState(false)
    const {user}=useContext(AuthContext)
    
    const {order,contactExplenation,setContactExplenation}=useContext(wizardProcessContext)
    console.log("from step 2",user);

    const nextAction=()=>{
        if(name.length<1){
            setIsValidationModalShow(true)
        }else{
            setIsNextStepModalShow(true)
        }
    }
    const handleAcceptGoNext=async()=>{
        const result=await fetchGoStep3(name,contactExplenation,orderObjid,setPending)
        if(result){
            router.replace(`/order/step3?userId=${userObjid}&orderId=${orderObjid}`);
                    successNotif("در حال انتقال به مرحله بعد ...")
                    setIsNextStepModalShow(false)
        }else{
                failNotif("خطا در ارتباط با سرور ....")
                setIsNextStepModalShow(false)
              }
    }
const handleAcceptGoPreviuos=async()=>{
const result=await fetchGoPrevious2(orderObjid,setPending)
if(result){
            router.replace(`/order/step1?userId=${userObjid}&orderId=${orderObjid}`);
                    successNotif("در حال انتقال به مرحله قبل ...")
                    setIsPreviuosModalShow(false)
        }else{
                failNotif("خطا در ارتباط با سرور ....")
                setIsPreviuosModalShow(false)
              }
}
    
    
    useEffect(()=>{
        if(order){
            console.log("from page khod",order);
          setContactExplenation(order.contactExplenation)  
        }
        
        if(user){
            setName(user.name)
            setPhone(user.phone)
        }
        
    },[user,order])
    const previousAction=()=>{
      setIsPreviuosModalShow(true)
    }
  return (
    <div className="step2 step-page-container bg_color_white rounded-2 flex-grow-1 px-3 py-4 d-flex flex-column">
      <Title step={2} stepName={"اطلاعات مشتری"}></Title>
      <WizardStepper phase={2}></WizardStepper>
      <div className="order-detail-container bg_color_light_gray w-100 mt-4 mt-md-5 rounded-2 p-0 p-md-3 flex-grow-1 d-flex flex-column">
        <div className="order-detail-sub-container bg_color_white p-0 p-md-3 rounded-2 flex-grow-1">
          <div className="img-container d-flex justify-content-center">
            <img src="/images/circle-phone.svg" alt="" />
          </div>
          <p className="text-center anjoman_medium fs_16 mb-0 mt-2">
            اطلاعات تماس
          </p>
          <p className="fs_14 anjoman_regular color_text mt-2 text-center">
            اطلاعات تماس خود را وارد کنید تا در تمام مراحل کارشناسان ما به شما
            دسترسی داشته باشند.
          </p>
          <div className="inputs-container d-flex flex-column flex-md-row gap-2 gap-md-4 ">
            <div className="input-container flex-grow-1">
              <label
                className="fs_14 anjoman_regular color_text mb-2"
                htmlFor=""
              >
                نام و نام خانوادگی / نام شرکت
              </label>
              <input
                className="bg_color_light_gray w-100 rounded-2 px-2 anjoman_regular color_text"
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="input-container flex-grow-1">
              <label
                className="fs_14 anjoman_regular color_text mb-2"
                htmlFor=""
              >
                شماره تماس
              </label>
              <input
                className="bg_color_light_gray w-100 rounded-2 px-2 anjoman_num_regular color_text"
                type="text"
                value={phone}
                disabled
              />
            </div>
          </div>
          <div className="txt-atrea-container d-flex flex-column mt-3 ">
            <label value={contactExplenation} onChange={(e)=>{setContactExplenation(e.target.value)}} className="fs_14 anjoman_regular color_text mb-2" htmlFor="">
              توضیحات
            </label>
            <textarea
              placeholder="آیا نکته یا شرایط خاصی وجود دارد که باید در مورد شما بدانیم؟"
              className="p-2 fs_14 anjoman_regular rounded-1 bg_color_light_gray "
              name=""
              id=""
              onChange={(e)=>{setContactExplenation(e.target.value)}}
              value={contactExplenation}
            ></textarea>
          </div>
          <div className="px-0 px-md-3 mt-4">
<NextPreviousBtn previosText={"مرحله قبل ( ویرایش سفارش )"} nextText={"مرحله بعد ( بررسی کارشناس )"} isPreviousEnable={true} isNextEnable={true} previousAction={previousAction} nextAction={nextAction}></NextPreviousBtn>
        </div>
        </div>
       




        
      </div>







      {isNextStepModalShow && (
                <ProModal
                  text="    با تایید، سفارش شما به همراه اطلاعات تماس، برای بررسی و اعلام قیمت به کارشناسان ما ارسال می‌شود
      "
                  firstBtnText="تایید و ادامه"
                  secondBtnText="ماندن در صفحه"
                  title={"ارسال سفارش برای کارشناس"}
                  isModalShow={isNextStepModalShow}
                  setIsModalShow={setIsNextStepModalShow}
                  icon={
                    <BsExclamationCircle
                      style={{ fontSize: "34px", color: "#28A745" }}
                    />
                  }
                  clickFirstBtn={handleAcceptGoNext}
                ></ProModal>
              )}

              {isPreviousModalShow && (
                <ProModal
                  text=" با بازگشت به مرحله قبل، می‌توانید جزئیات سفارش خود را ویرایش کنید. توجه: سفارش شما تا زمانی که اطلاعات تماس این مرحله را تکمیل و تایید نکنید، برای کارشناسان ارسال نمی‌شود. 
      "
                  firstBtnText="مرحله قبل"
                  secondBtnText="ماندن در صفحه"
                  title={"بازگشت به مرحله ویرایش سفارش"}
                  isModalShow={isPreviousModalShow}
                  setIsModalShow={setIsPreviuosModalShow}
                  icon={
                    <IoIosArrowDropright
                      style={{ fontSize: "34px", color: "#FFC107" }}
                    />
                  }
                  clickFirstBtn={handleAcceptGoPreviuos}
                ></ProModal>
              )}
      
              {isValidationModalShow && (
                <ProModal
                  text={
                    "مقدار نام نمیتواند خالی باشد."
                  }
                  onlyBtnText={"متوجه شدم"}
                  title={"خطا در تکمیل اطلاعات"}
                  isModalShow={isValidationModalShow}
                  setIsModalShow={setIsValidationModalShow}
                  icon={
                    <IoWarningOutline
                      style={{ fontSize: "34px", color: "#ff0707ff" }}
                    />
                  }
                ></ProModal>
              )}
    </div>
  );
}
