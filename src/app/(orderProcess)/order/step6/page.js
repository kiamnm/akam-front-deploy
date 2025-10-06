import React from "react";
import "./style.css";
import Title from "@/components/orderProcess/title/Title";
import WizardStepper from "@/components/orderProcess/wizardStepper/WizardStepper";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsExclamationCircle } from "react-icons/bs";
import NextPreviousBtn from "@/components/orderProcess/nextPreviousBtn/NextPreviousBtn";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
export default function Page() {
  return (
    <div className="step6 step-page-container bg_color_white rounded-2 flex-grow-1 px-3 py-4 d-flex flex-column">
      <Title step={6} stepName={"آپلود رسید پرداخت"}></Title>
      <WizardStepper phase={6}></WizardStepper>
      <div className="order-detail-container bg_color_light_gray w-100 mt-4 mt-md-5 rounded-2 p-0 p-md-3 flex-grow-1 d-flex flex-column">
        <div className="bg_color_white p-0 p-md-3 rounded-2 flex-grow-1">
          <div className="d-flex justify-content-center">
            <FaRegCircleCheck style={{ color: "#28A745", fontSize: "34px" }} />
          </div>
          <h3 className="text-center anjoman_bold fs_16 mb-0 mt-4">
            رسید شما با موفقیت ارسال شد.
          </h3>
          <p className="fs_14 anjoman_regular color_text mt-2 text-center mb-1">
            مشتری گرامی،
          </p>
          <p className="fs_14 anjoman_regular color_text mt-2 text-center mb-1">
            رسید پرداخت شما دریافت شد و جهت بررسی به واحد مالی شرکت ارجاع گردید.
            کارشناسان ما در اسرع وقت صحت پرداخت را بررسی خواهند کرد. این فرآیند
            معمولا بین ۱ تا ۲ ساعت کاری زمان می‌برد. به محض تایید پرداخت، فاکتور
            نهایی شما صادر شده و از طریق همین سامانه به شما اطلاع‌رسانی خواهد
            شد.
          </p>
          <div className="tips-container rounded-1 p-3">
            <div className="title-container d-flex align-items-center gap-1">
             <span className="d-flex justify-content-center align-items-center">
                             <IoMdInformationCircleOutline
                               style={{ color: "#0C5460", fontSize: "24px" }}
                             />
                             
                           </span>
              <p className="fs_14 anjoman_regular m-0">نکات مهم</p>
            </div>
            <p className="fs_14 anjoman_regular mt-2 d-flex align-items-baseline gap-2 text_justify">
              
              <span className="d-flex align-items-center"><FaCircle style={{fontSize:"7px"}} />
              </span>
              در این مرحله نیازی به اقدام از سوی شما نیست. لطفا تا زمان تایید پرداخت توسط کارشناسان شکیبا باشید.</p>
            <p className="fs_14 anjoman_regular mb-0 d-flex align-items-baseline gap-2 text_justify">
              <span className="d-flex align-items-center"><FaCircle style={{fontSize:"7px"}} />
              </span>
              در صورت وجود هرگونه مغایرت در اطلاعات پرداخت، کارشناسان ما از طریق اطلاعات تماس ثبت شده با شما ارتباط خواهند گرفت.</p>
          </div>
          <p className="fs_14 anjoman_regular text-center color_text mt-4">از شکیبایی شما سپاسگذاریم.</p>
        </div>







        <div className="px-0 px-md-3 mt-4">
                                <NextPreviousBtn previosText={"مرحله قبل "} nextText={"مرحله بعد"} isPreviousEnable={false} isNextEnable={false} ></NextPreviousBtn>
                                        </div>
      </div>
    </div>
  );
}
