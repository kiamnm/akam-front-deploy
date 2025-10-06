"use client"
import React,{useContext, useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FaRegCircleCheck } from "react-icons/fa6";
import Title from "@/components/orderProcess/title/Title";
import WizardStepper from "@/components/orderProcess/wizardStepper/WizardStepper";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ProModal from "@/components/proModal/ProModal";
import { BsExclamationCircle } from "react-icons/bs";
import { successNotif,failNotif } from "@/utils/notif";
import fetchGoPrevious3 from "@/utils/userpanel/order/fetchGoPrevious3";
import NextPreviousBtn from "@/components/orderProcess/nextPreviousBtn/NextPreviousBtn";
import { FaCircle } from "react-icons/fa";


import "./style.css";
import { style } from "d3-selection";

export default function Page() {
   const router = useRouter();
      const searchParams = useSearchParams();
      const userObjid = searchParams.get("userId");
        const orderObjid = searchParams.get("orderId");
  const [isPreviousModalShow,setIsPreviuosModalShow]=useState(false)
  const [pending,setPending]=useState(false)


  const handleAcceptGoPreviuos=async()=>{
const result=await fetchGoPrevious3(orderObjid,setPending)
if(result){
            router.replace(`/order/step2?userId=${userObjid}&orderId=${orderObjid}`);
                    successNotif("در حال انتقال به مرحله قبل ...")
                    setIsPreviuosModalShow(false)
        }else{
                failNotif("خطا در ارتباط با سرور ....")
                setIsPreviuosModalShow(false)
              }
}

const previousAction=()=>{
  setIsPreviuosModalShow(true)
}
  return (
    <div className="step3 step-page-container bg_color_white rounded-2 flex-grow-1 px-3 py-4 d-flex flex-column">
      <Title step={3} stepName={"بررسی کارشناس"}></Title>
      <WizardStepper phase={3}></WizardStepper>

      <div className="order-detail-container bg_color_light_gray w-100 mt-4 mt-md-5 rounded-2 p-0 p-md-3 flex-grow-1 d-flex flex-column">
        <div className="order-detail-sub-container bg_color_white p-0 p-md-3 rounded-2 flex-grow-1">
          <div className=" d-flex justify-content-center">
            <FaRegCircleCheck style={{ color: "#28A745", fontSize: "34px" }} />
          </div>
          <p
            style={{ color: "#28A745" }}
            className="text-center anjoman_bold fs_16 mb-0 mt-4"
          >
            سفارش شما با موفقیت ثبت شد.
          </p>

          <p className="fs_14 anjoman_regular color_text mt-2 text-center mb-1">
            مشتری گرامی،
          </p>

          <p className="fs_14 anjoman_regular color_text mt-2 text-center mb-1">
            سفارش شما با موفقیت در سامانه ثبت گردید و جهت بررسی به کارشناسان
            فروش شرکت تجارت فولاد آکام گستر ارجاع داده شد.
          </p>

          <p className="fs_14 anjoman_num_regular color_text mt-2 text-center">
            کارشناسان ما در اسرع وقت درخواست شما را جهت استعلام قیمت و صدور
            پیش‌فاکتور بررسی خواهند کرد. این فرآیند در ساعات کاری حداکثر تا 1 ساعت 
            زمان می‌برد. به محض آماده شدن پیش‌فاکتور، از طریق همین سامانه به شما
            اطلاع‌رسانی خواهد شد.
          </p>

          <div className="tip-container rounded-1 p-3">
            <div className="title-container d-flex align-items-center gap-1">
              <span className="d-flex justify-content-center align-items-center">
                <IoMdInformationCircleOutline
                  style={{ color: "#0C5460", fontSize: "24px" }}
                />
                
              </span>
              <p className=" fs_14 anjoman_regular m-0">نکات مهم :</p>
            </div>

            <p className="fs_14 anjoman_regular mt-2 d-flex align-items-baseline gap-2 text_justify">
  <span className="d-flex align-items-center">
    <FaCircle style={{ fontSize: "7px" }} />
  </span>
  ویرایش سفارش: در صورتی که پیش از صدور پیش‌فاکتور قصد ویرایش سفارش
  خود را دارید، کافیست روی دکمه مرحله قبل کلیک کرده، تغییرات لازم
  را اعمال نمایید و مجدداً با کلیک بر روی مرحله بعد فرآیند را
  ادامه دهید.
</p>
            <p className="fs_14 anjoman_regular mb-0 d-flex align-items-baseline gap-2 text_justify">
  <span className="d-flex align-items-center">
    <FaCircle style={{ fontSize: "7px" }} />
  </span>
  لغو سفارش: برای لغو کامل سفارش در هر یک از مراحل، می‌توانید از
  گزینه لغو سفارش که در بالای صفحه (سمت چپ) قرار دارد، استفاده
  کنید.
</p>
          </div>
          <p className="fs_14 anjoman_regular text-center mt-4">از شکیبایی شما سپاسگذاریم.</p>
        </div>




        



        <div className="px-0 px-md-3 mt-4">
        <NextPreviousBtn previosText={"مرحله قبل ( ویرایش اطلاعات )"} nextText={"مرحله بعد "} isPreviousEnable={true} isNextEnable={false} previousAction={previousAction} ></NextPreviousBtn>
                </div>
      </div>







      {isPreviousModalShow && (
                      <ProModal
                        text="    بازگشت به مرحله ویرایش اطلاعات سفارش
            "
                        firstBtnText="مرحله قبل"
                        secondBtnText="ماندن در صفحه"
                        title={"مرحله بعد"}
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
    </div>
  );
}
