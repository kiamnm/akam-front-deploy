"use client";
import React, { useState,useContext,useEffect } from "react";
import "./style.css";
import Title from "@/components/orderProcess/title/Title";
import WizardStepper from "@/components/orderProcess/wizardStepper/WizardStepper";
import { GoCopy } from "react-icons/go";
import { IoIosWarning } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import PaymentUploadBox from "@/components/orderProcess/paymentUploadBox/PaymentUploadBox";
import ProModal from "@/components/proModal/ProModal";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { successNotif, failNotif } from "@/utils/notif";
import fetchGoPrevious5 from "@/utils/userpanel/order/fetchGoPrevious5";
import { BsExclamationCircle } from "react-icons/bs";
import fetchGoStep5 from "@/utils/userpanel/order/fetchGoStep5";
import { IoWarningOutline } from "react-icons/io5";
import NextPreviousBtn from "@/components/orderProcess/nextPreviousBtn/NextPreviousBtn";
import { FaRegCopy } from "react-icons/fa6";
import { wizardProcessContext } from "@/context/userPanel/wizardProcess";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";


export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userObjid = searchParams.get("userId");
  const orderObjid = searchParams.get("orderId");
  const [file, setFile] = useState(null);
  const [uploadErr, setUploadErr] = useState("");
  const [isUploadErrModalShow, setIsUploadErrModalShow] = useState(false);
  const [isPreviousModalShow, setIsPreviuosModalShow] = useState(false);
  const [isNextModalShow,setIsNextModalShow]=useState(false)
  const [pending, setPending] = useState(false);
  const {order}=useContext(wizardProcessContext)
  const [total, setTotal] = useState(0);
  const [selectedBank, setSelectedBank] = useState("melat");
  
const previousAction=()=>{
  setIsPreviuosModalShow(true);
}
  const handleAcceptGoPreviuos = async () => {
    const result = await fetchGoPrevious5(orderObjid, setPending);
    if (result) {
      router.replace(`/order/step4?userId=${userObjid}&orderId=${orderObjid}`);
      successNotif("در حال انتقال به مرحله قبل ...");
      setIsPreviuosModalShow(false);
    } else {
      failNotif("خطا در ارتباط با سرور ....");
      setIsPreviuosModalShow(false);
    }
  };

  const nextAction=()=>{
    if(!file){
      setUploadErr("لطفا فایل خود را آپلود کنید")
    }else{
if(uploadErr===""){
setIsNextModalShow(true)
    }else{
      setIsUploadErrModalShow(true)
    }
    }
    
  }

  const handleAcceptGoNext=async()=>{
    setIsNextModalShow(false)
const result=await fetchGoStep5(file,orderObjid,setPending)
        if(result){
            router.replace(`/order/step6?userId=${userObjid}&orderId=${orderObjid}`);
                    successNotif("در حال انتقال به مرحله بعد ...")
                    setIsNextModalShow(false)
        }else{
                failNotif("خطا در ارتباط با سرور ....")
                setIsNextModalShow(false)
              }
}
const handleCopy = () => {
    navigator.clipboard.writeText(total)
      .then(() => {
        
      })
      .catch(() => {
        
      });
  };
useEffect(() => {
  console.log(order);
    if (order) {
      const calcSum = order.pishFactor.reduce((sum, item) => {
        return sum + Number(item.price) * Number(item.amount);
      }, 0);

      const calcTax = 0.1 * calcSum;
      const calcTotal = calcSum + calcTax;

      ///be rial ham bayad tabdil konim
      setTotal(calcTotal*10);
    }
  }, [order]);
  return (
    <div className="step5 step-page-container bg_color_white rounded-2 flex-grow-1 px-3 py-4 d-flex flex-column">
      <Title step={5} stepName={"پرداخت و بارگذاری رسید"}></Title>
      <WizardStepper phase={5}></WizardStepper>
      <div className="order-detail-container bg_color_light_gray w-100 mt-4 mt-md-5 rounded-2 p-0 p-md-3 flex-grow-1 d-flex flex-column">
        <div className="title-container d-flex flex-column justify-content-center align-items-center py-4 bg_color_white rounded-2">
          <p className="mb-2 fs_16 anjoman_bold text-color mb-3">
            پرداخت و بارگذاری رسید{" "}
          </p>
          <p className="mb-3 fs_14 anjoman_regular text_color mb-3">
            لطفا مبلغ مشخص شده را واریز و سپس رسید پرداخت را در بخش زیر بارگذاری
            نمایید.
          </p>
          <div className="green-container px-5 py-4 d-flex flex-column align-items-center rounded-1">
            <p className="fs_14 anjoman_semibold ">مبلغ قابل پرداخت:</p>
            <div className="price-container d-flex gap-3">
              {/* in meghdar bayad az samte backend biad */}
              <p className="anjoman_num_bold m-0">{total.toLocaleString()} ریال  </p>
              <div className="d-flex align-items-center gap-2">
                <p className="fs_14 anjoman_medium m-0">کپی</p>
                <span onClick={handleCopy} className="cursor_pointer">
                  <FaRegCopy style={{ fontSize: "24px", color: "#155724" }} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="tip-container  bg_color_white rounded-2 p-3 mt-0 mt-md-3">
          <div className="red-tip-container rounded-2  p-3">
            <div className="title d-flex align-items-center gap-1 mb-2">
              <span className="d-flex justify-content-center align-items-center">
                <IoIosWarning style={{ fontSize: "28px" }} />
              </span>
              <p className="m-0 anjoman_medium fs_14">
                نکات  مهم قبل از پرداخت
              </p>
            </div>
            <p className="fs_14 anjoman_regular mb-1 d-flex align-items-baseline gap-2 text_justify">
              <span className="d-flex align-items-center">
                                <FaCircle style={{ fontSize: "7px" }} />
                              </span>

              انجام این پرداخت به منزله تایید نهایی پیش‌فاکتور و تمامی جزئیات آن
              است.
            </p>
            <p className="fs_14 anjoman_regular mb-1 d-flex align-items-baseline gap-2 text_justify">
              <span className="d-flex align-items-center">
                  <FaCircle style={{ fontSize: "7px" }} />
                </span>
              لطفا توجه داشته باشید که پس از واریز وجه، سفارش شما نهایی شده و در
              صورت درخواست لغو، مبلغ ۱۰٪ از کل فاکتور به عنوان هزینه خسارت کسر
              می‌گردد.
            </p>
            <p className="fs_14 anjoman_regular mb-1 d-flex align-items-baseline gap-2 text_justify">
              <span className="d-flex align-items-center">
                  <FaCircle style={{ fontSize: "7px" }} />
                </span>
              لطفا در هنگام واریز، به نام صاحب حساب (شرکت تجارت فولاد آکام گستر)
              و مبلغ نهایی دقت فرمایید. مسئولیت هرگونه واریز اشتباه بر عهده
              مشتری می‌باشد.
            </p>
            <p className="fs_14 anjoman_regular mb-1 d-flex align-items-baseline gap-2 text_justify">
              <span className="d-flex align-items-center">
                  <FaCircle style={{ fontSize: "7px" }} />
                </span>
              در صورت واریز وجه پس از مهلت ۲۴ ساعته، سفارش شما منقضی شده تلقی
              می‌گردد. برای استرداد وجه، لطفا از طریق بخش پشتیبانی تیکت ثبت
              نمایید یا با واحد مالی تماس بگیرید.
            </p>
          </div>
        </div>

        <div className="bank-account-info-container mt-0 mt-md-3 rounded-2 bg_color_white py-4">
          <p className="text-center fs_16 anjoman_bold  mb-2">
            اطلاعات حساب
          </p>
          <p className="text-center fs_14 anjoman_regular">
            ابتدا بانک مورد نظر خود را انتخاب کنید تا اطلاعات حساب آن را به شما
            نمایش دهیم.
          </p>

          <div className="bank-tab-container d-flex justify-content-center gap-3">
            <div onClick={() => setSelectedBank("melat")} className={`melat-tab fs_14 anjoman_semibold py-1 px-3 rounded-1 d-flex align-items-center gap-2 cursor_pointer ${
            selectedBank === "melat" ? "active" : "not-active"
          }`}>
              <img className="bank-icon" src="/images/melat-icon.svg" alt="" />
              <p className="m-0">بانک ملت</p>
            </div>
            <div onClick={() => setSelectedBank("saderat")} className={`saderat-tab fs_14 anjoman_semibold py-1 px-3 rounded-1 d-flex align-items-center gap-2 cursor_pointer ${
            selectedBank === "saderat" ? "active" : "not-active"
          }`}>
              <img
                className="bank-icon"
                src="/images/saderat-icon.svg"
                alt=""
              />
              <p className="m-0">بانک صادرات</p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <img
              className="cart-bank-test"
              src={
            selectedBank === "melat"
              ? "/images/test-bank.png"
              : "/images/saderat-cart.png"
          }
              alt=""
            />
          </div>
        </div>
        <div className="pay-tip-container bg_color_white rounded-2 p-3 mt-0 mt-md-3">
          <div className="green-tip rounded-2  p-3">
            <div className="title d-flex align-items-center gap-1 mb-2">
              <span className="d-flex align-items-center">
                <BsQuestionCircle style={{ fontSize: "24px" }} />
              </span>
              <p className="m-0 anjoman_medium fs_14">پرداخت را انجام داده‌اید؟</p>
            </div>
            <p className="fs_14 anjoman_regular mb-1 d-flex align-items-baseline gap-2 text_justify">
              <span className="d-flex align-items-center">
                                <FaCircle style={{ fontSize: "7px" }} />
                              </span>
              بسیار عالی! اکنون رسید پرداخت خود را در بخش «بارگذاری رسید» آپلود
              کرده و سپس روی دکمه «مرحله بعد (تایید پرداخت)» کلیک کنید تا سفارش
              شما جهت بررسی و تایید نهایی برای کارشناسان ارسال شود.
            </p>
          </div>
        </div>
        <div className="upload-payment-container rounded-2 p-3 mt-0 mt-md-3 bg_color_white">
          <p className="title fs_16 anjoman_semibold  text-center">
            بارگذاری رسید
          </p>
          <div>
            <PaymentUploadBox
              file={file}
              setFile={setFile}
              uploadErr={uploadErr}
              setUploadErr={setUploadErr}
              isModalShow={isUploadErrModalShow}
              setIsModalShow={setIsUploadErrModalShow}
            ></PaymentUploadBox>
          </div>
        </div>

        



         <div className="px-0 px-md-3 mt-4">
                        <NextPreviousBtn previosText={"مرحله قبل ( پیش فاکتور )"} nextText={"مرحله بعد ( تایید پرداخت )"} isPreviousEnable={true} isNextEnable={true} previousAction={previousAction} nextAction={nextAction}></NextPreviousBtn>
                                </div>
             
      </div>

      {isPreviousModalShow && (
        <ProModal
          text="با بازگشت به مرحله قبل می‌توانید مجدد پیش‌فاکتور صادر شده را مشاهده کنید و مجدد برای مشاهده اطلاعات حساب و آپلود مدارک پرداخت به این صفحه بازگردید.  
                  "
          firstBtnText="مرحله قبل"
          secondBtnText="ماندن در صفحه"
          title={" بازگشت به مرحله مشاهده پیش فاکتور"}
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

      {isUploadErrModalShow && (
        <ProModal
          text={
            uploadErr
          }
          onlyBtnText={"متوجه شدم"}
          title={"خطا در آپلود فایل"}
          isModalShow={isUploadErrModalShow}
          setIsModalShow={setIsUploadErrModalShow}
          icon={
            <IoWarningOutline
              style={{ fontSize: "34px", color: "#ff0707ff" }}
            />
          }
        ></ProModal>
      )}




      {isNextModalShow && (
                <ProModal
                  text="لطفاً پیش از ارسال، از صحت و خوانا بودن فایل رسید اطمینان حاصل کنید. 
با تایید شما، رسید برای بررسی و تایید نهایی توسط واحد مالی ارسال شده و نتیجه از طریق همین سامانه به اطلاع شما خواهد رسید."
                  firstBtnText="تایید و ادامه"
                  secondBtnText="ماندن در صفحه"
                  title={"ارسال رسید‌های پرداخت"}
                  pending={pending}
                  isModalShow={isNextModalShow}
                  setIsModalShow={setIsNextModalShow}
                  icon={
                    <FaRegCircleCheck
                      style={{ fontSize: "34px", color: "#FFC107" }}
                    />
                  }
                  clickFirstBtn={handleAcceptGoNext}
                ></ProModal>
              )}
    </div>
  );
}
