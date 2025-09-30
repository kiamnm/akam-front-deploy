



import { LuClock10 } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";

import { BsExclamationCircle } from "react-icons/bs";







const getOrderPhaseUi = (phase) => {
    switch (phase) {
      case "1":
        return {
          text: "در انتظار تایید کاربر",
          className: "phase-1-status-ui",
          icon: <BsExclamationCircle  style={{ fontSize: "18px",strokeWidth: 0.3 }} />,
        };
      case "2":
        return {
          text: "در انتظار تایید کاربر",
          className: "phase-2-status-ui",
          icon: <BsExclamationCircle  style={{ fontSize: "18px" }} />,
        };
      case "3":
        return {
          text: "در انتظار بررسی کارشناس",
          className: "phase-3-status-ui",
          icon: <LuClock10    style={{ fontSize: "18px" }} />,
        };
      case "4":
        return {
          text: "در انتظار تایید کاربر",
          className: "phase-4-status-ui",

          icon: <BsExclamationCircle  style={{ fontSize: "18px" }} />,
        };
      case "5":
        return {
          text: "در انتظار پرداخت",
          className: "phase-5-status-ui",

          icon: <BsExclamationCircle  style={{ fontSize: "18px" }} />,
        };
        case "6":
        return {
          text: "در انتظار بررسی کارشناس",
          className: "phase-6-status-ui",

          icon: <LuClock10    style={{ fontSize: "18px" }} />,
        };
        case "7":
        return {
          text: "خرید موفق",
          className: "phase-7-status-ui",

          icon: <FaRegCircleCheck style={{ fontSize: "18px" }} />,
        };
        case "8":
        return {
          text: "لغو سفارش",
          className: "phase-8-status-ui",

          icon: <RxCrossCircled style={{ fontSize: "18px" }} />,
        };
        case "9":
        return {
          text: "سفارش منقضی شد",
          className: "phase-9-status-ui",

          icon: <RxCrossCircled    style={{ fontSize: "18px" }} />,
        };
      default:
        return { text: "نامشخص", className: "bg-secondary" };
    }
  }

export default getOrderPhaseUi;

















































