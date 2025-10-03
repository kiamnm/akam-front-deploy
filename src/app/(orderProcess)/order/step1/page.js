"use client";
import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";
import Title from "@/components/orderProcess/title/Title";
import WizardStepper from "@/components/orderProcess/wizardStepper/WizardStepper";
import getOneOrder from "@/utils/userpanel/order/fetchGetOneOrder";
import { wizardProcessContext } from "@/context/userPanel/wizardProcess";
import ManualForm from "@/components/orderProcess/manualForm/ManualForm";
import ProModal from "@/components/proModal/ProModal";
import { IoWarningOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";
import validationStep1 from "@/utils/userpanel/order/validationStep1";
import OrderUploadResult from "@/components/orderProcess/orderUploadResult/OrderUploadResult";
import OrderUploadExplenation from "@/components/orderProcess/orderUploadExplenation/OrderUploadExplenation";
import BasketOrderTable from "@/components/orderProcess/basketOrderTable/BasketOrderTable";
import fetchUpdateItems from "@/utils/userpanel/order/fetchUpdateItems";
import { successNotif, failNotif } from "@/utils/notif";
import fetchUpdateExplenation from "@/utils/userpanel/order/fetchUpdateExplenation";
import NextPreviousBtn from "@/components/orderProcess/nextPreviousBtn/NextPreviousBtn";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderObjid = searchParams.get("orderId");
  const userObjid = searchParams.get("userId");
  const {
    order,
    setOrder,
    manualFormItems,
    orderType,
    cartItems,
    uploadFormExplenation,
  } = useContext(wizardProcessContext);
  const [isPreviousModalShow, setIsPreviousModalShow] = useState(false);
  const [isNextModalShow, setIsNextModalShow] = useState(false);
  const [isNextValidationModalShow, setIsNextValidationModalShow] =
    useState(false);
  const [validationErr, setValidationErr] = useState("");
  const [pending, setPending] = useState(false);
  const handleAcceptGoPreviuos = () => {
    router.replace("/userpanel/orders");
  };

  

  const handleAcceptGoNext = async () => {
    if (orderType === "1") {
      const result = await fetchUpdateItems(
        orderObjid,
        manualFormItems,
        setPending
      );
      console.log(result);
      if (result) {
        router.replace(
          `/order/step2?userId=${userObjid}&orderId=${orderObjid}`
        );
        successNotif("در حال انتقال به مرحله بعد ...");
        setIsNextModalShow(false);
      } else {
        failNotif("خطا در ارتباط با سرور ....");
        setIsNextModalShow(false);
      }
    }
    if (orderType === "2") {
      const result = await fetchUpdateExplenation(
        orderObjid,
        uploadFormExplenation,
        setPending
      );
      console.log(result);
      if (result) {
        router.replace(
          `/order/step2?userId=${userObjid}&orderId=${orderObjid}`
        );
        successNotif("در حال انتقال به مرحله بعد ...");
        setIsNextModalShow(false);
      } else {
        failNotif("خطا در ارتباط با سرور ....");
        setIsNextModalShow(false);
      }
    }
    if (orderType === "3") {
      const result = await fetchUpdateItems(orderObjid, cartItems, setPending);
      console.log(result);
      if (result) {
        router.replace(
          `/order/step2?userId=${userObjid}&orderId=${orderObjid}`
        );
        successNotif("در حال انتقال به مرحله بعد ...");
        setIsNextModalShow(false);
      } else {
        failNotif("خطا در ارتباط با سرور ....");
        setIsNextModalShow(false);
      }
    }
  };
  const previousAction=()=>{
setIsPreviousModalShow(true)
  }

  const nextAction=()=>{
if (orderType === "1") {
      const isValidate = validationStep1(1, manualFormItems, setValidationErr);
      if (!isValidate) {
        setIsNextValidationModalShow(true);
      } else {
        setIsNextModalShow(true);
      }
    }
    if (orderType === "2") {
      setIsNextModalShow(true);
    }

    if (orderType === "3") {
      let isok = true;
      cartItems.map((item) => {
        console.log("miatem", item.amount);
        if (!item.amount > 0) {
          console.log("ghalate dg");
          isok = false;
        }
      });
      if (!isok) {
        setIsNextValidationModalShow(true);
      } else {
        setIsNextModalShow(true);
      }
    }
  }

  if (order) {
    return (
      <div className="step1 step-page-container  bg_color_white rounded-2 flex-grow-1 px-3 py-4 d-flex flex-column">
        <Title step={1} stepName={"ثبت سفارش"}></Title>

        <WizardStepper phase={1}></WizardStepper>
        <div className="order-detail-container bg_color_light_gray w-100 mt-4 mt-md-5 rounded-2 p-0 p-md-3 flex-grow-1 d-flex flex-column">
          <div className="order-detail-sub-container bg_color_white p-0 p-md-3 rounded-2 flex-grow-1">
            {orderType === "1" && <ManualForm></ManualForm>}
            {orderType === "2" && (
              <>
                <h2 className="fs_16 anjoman_medium  text-center">
                  استعلام سریع با آپلود فرم
                </h2>
                <p className=" anjoman_regular fs_14 color_text mb-4 mt-3">
                  مجموعه تجارت فولاد آکام گستر به منظور تسهیل بخشیدن به روند
                  خرید مشتریان محترم شرایطی را فراهم نموده تا مشتریان بتوانند با
                  آپلود فایل ZIP.  مشخصات نیازشان از قیمت محصول مطلع شده و پیش
                  فاکتور دریافت نمایند.
                </p>
                <OrderUploadResult></OrderUploadResult>
                <OrderUploadExplenation></OrderUploadExplenation>
              </>
            )}
            {orderType === "3" && <BasketOrderTable></BasketOrderTable>}
          </div>
        </div>
        
        <div className="px-0 px-md-3 mt-4">
<NextPreviousBtn previosText={"پنل کاربری"} nextText={"مرحله بعد ( اطلاعات مشتری )"} isPreviousEnable={true} isNextEnable={true} previousAction={previousAction} nextAction={nextAction}></NextPreviousBtn>
        </div>

        {isPreviousModalShow && (
          <ProModal
            text=" با بازگشت به پنل کاربری و خروج از صفحه، روند خرید نمیه تمام می‌ماند. شما می‌توانید با بازگشت به این صفحه روند خرید خود را تکمیل کنید.
"
            firstBtnText="خروج"
            secondBtnText="ماندن در صفحه"
            title={"بازگشت به پنل کاربری"}
            isModalShow={isPreviousModalShow}
            setIsModalShow={setIsPreviousModalShow}
            icon={
              <BsExclamationCircle
                style={{ fontSize: "34px", color: "#FFC107" }}
              />
            }
            clickFirstBtn={handleAcceptGoPreviuos}
          ></ProModal>
        )}

        {isNextValidationModalShow && (
          <ProModal
            text={
              orderType === "1"
                ? validationErr
                : "لطفا در لیست سفارش مقدار صحیح را وارد کنید!"
            }
            onlyBtnText={"متوجه شدم"}
            title={"خطا در تکمیل سفارش"}
            isModalShow={isNextValidationModalShow}
            setIsModalShow={setIsNextValidationModalShow}
            icon={
              <IoWarningOutline
                style={{ fontSize: "34px", color: "#ff0707ff" }}
              />
            }
          ></ProModal>
        )}

        {isNextModalShow && (
          <ProModal
            text=" آیا از صحت محصولات و مقادیر وارد شده اطمینان دارید؟
لطفاً پیش از رفتن به مرحله بعد، جزئیات سفارش خود را برای آخرین بار بررسی نمایید. 
"
            firstBtnText="تایید سفارش"
            secondBtnText="ویرایش سفارش"
            title={"تایید نهایی سفارش؟"}
            pending={pending}
            isModalShow={isNextModalShow}
            setIsModalShow={setIsNextModalShow}
            icon={
              <IoMdCheckmarkCircleOutline
                style={{ fontSize: "34px", color: "#FFC107" }}
              />
            }
            clickFirstBtn={handleAcceptGoNext}
          ></ProModal>
        )}
      </div>
    );
  } else {
    return <div>لطفا صب کنید یا سفارش مشکل دارد</div>;
  }
}
