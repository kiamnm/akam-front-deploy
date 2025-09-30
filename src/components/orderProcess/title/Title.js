"use client"
import React,{useState,useContext, useEffect} from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";
import getOrderPhaseUi from "@/utils/userpanel/getOrderPhaseUi";
import ProModal from "@/components/proModal/ProModal";
import fetchCanselOrder from "@/utils/userpanel/order/fetchCanselOrder";
import { successNotif,failNotif } from "@/utils/notif";
import { BsExclamationCircle } from "react-icons/bs";
import { wizardProcessContext } from "@/context/userPanel/wizardProcess";


export default function Title({
  status,
  canCansel,
  
  stepName,
  orderIdentification,
}) {
  
  const [isCanselModalShow,setIsCanselModalShow]=useState(false)
  const [pending,setPending]=useState(false)
  const {order}=useContext(wizardProcessContext)
  const [isCanselActive,setIsCanselActive]=useState(false)
 
  
  const searchParams = useSearchParams();
const orderObjid = searchParams.get("orderId");

const isCanselBtnActive = () => {
  
  if(order?.phase === "6" || order?.phase === "7" || order?.phase === "8" ||order?.isCansel===true) {
    
    setIsCanselActive(false)
  }else{
    setIsCanselActive(true)
  }
  
  
}
  const handleAcceptCanselOrder=async()=>{
    const result=await fetchCanselOrder(orderObjid,setPending)
    if(result){
      setIsCanselActive(false)
      setIsCanselModalShow(false)
successNotif("سفارش با موفقیت لغو شد")

    }else{
      setIsCanselModalShow(false)
        failNotif("خطا در ارتباط با سرور ....")

    }

  }
  useEffect(()=>{
isCanselBtnActive()
  },[order])
  if(order){
    return (
    <div className="header-container">
      <div className="row align-items-center">
        <div className="col-6 col-md-4 text-end order-1 d-flex flex-column gap-2">
          <p className="fs_14 anjoman_medium m-0 d-none d-md-block">
            وضعیت فعلی:
          </p>
          <div className={`fs_12 anjoman_medium  d-flex`}>
            <div
              className={`py-1 rounded-1  d-flex align-items-center   ${getOrderPhaseUi(order.phase.toString()).className} px-1`}
            >
              <span className="d-flex align-items-center">
                {getOrderPhaseUi(order.phase.toString()).icon}
              </span>
              
              <div className="w-100 px-1 d-flex align-item-center beg">
                {getOrderPhaseUi(order.phase.toString()).text}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 text-center order-3 order-md-2 d-flex flex-column gap-1">
          <p className="m-0 fs_14 anjoman_num_light">مرحله {order.phase} از 7</p>
          <p className="m-0 fs_16 anjoman_num_medium"> {stepName}</p>
          <p className="m-0 fs_12 anjoman_num_light">A15S155115</p>
        </div>

        <div className="col-6 col-md-4 text-start order-2 order-md-3 d-flex justify-content-end">
         {order && (
  <div 
  
    onClick={() => {
    if (isCanselActive) setIsCanselModalShow(true);
  }}
    className={`cansle-button fs_12 anjoman_medium px-3 py-1 rounded-1  
      ${isCanselActive ? "enable cursor_pointer" : "disable"}`}
  >
    لغو سفارش
  </div>
)}
        </div>
      </div>









      {isCanselModalShow && (
                <ProModal
                  text=" آیا از صحت محصولات و مقادیر وارد شده اطمینان دارید؟
      لطفاً پیش از رفتن به مرحله بعد، جزئیات سفارش خود را برای آخرین بار بررسی نمایید. 
      "
                  firstBtnText="لغو سفارش"
                  secondBtnText="ماندن در صفحه"
                  title={"لغو سفارش"}
                  pending={pending}
                  isModalShow={isCanselModalShow}
                  setIsModalShow={setIsCanselModalShow}
                  icon={
                    <BsExclamationCircle
                      style={{ fontSize: "34px", color: "#FFC107" }}
                    />
                  }
                  clickFirstBtn={handleAcceptCanselOrder}
                ></ProModal>
              )}





    </div>
  );
  }
  
}
