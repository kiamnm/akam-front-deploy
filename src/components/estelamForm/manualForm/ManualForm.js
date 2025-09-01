import React,{useContext} from "react";
import "./style.css";

import ConstInputs from "../constInputs/ConstInputs";
import DynamicInputs from "./dynamicInputs/DynamicInputs";
import SubmitBtn from "./submitBtn/SubmitBtn";





export default function ManualForm() {
  return (
    
      <div className="manual-form-container w-100 ">
        <p className="fs_14 anjoman_regular p-0 m-0 text_justify">
          مجموعه تجارت فولاد آکام گستر به منظور تسهیل بخشیدن به روند خرید
          مشتریان محترم شرایطی فراهم نموده تا مشتریان بتوانند با ارسال فرم
          استعلام قیمت در کمترین زمان پیش فاکتور خود را دریافت کنند.
        </p>
        <p className="fs_14 anjoman_regular p-0 pt-2 m-0 text_justify">
          همچنین همراهان محترم آکام گستر می‌توانند جهت استعلام قیمت و دریافت
          پیش‌فاکتور فایل لیست سفارش خود را آپلود کنند.
        </p>
        {/* <InputContainer></InputContainer> */}
        <div className="const-input-container ">
          <ConstInputs></ConstInputs>
        </div>
        
        <DynamicInputs></DynamicInputs>
        <div className="">
          <SubmitBtn></SubmitBtn>
        </div>
        
        {/* <div>
          <FullScreenOtp></FullScreenOtp>
        </div> */}
        
      </div>
    
  );
}
