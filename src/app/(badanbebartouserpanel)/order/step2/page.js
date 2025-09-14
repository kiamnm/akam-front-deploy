import React from "react";
import Title from "@/components/orderProcess/title/Title";
import WizardStepper from "@/components/orderProcess/wizardStepper/WizardStepper";
import "./style.css";

export default function page() {
  return (
    <div className="step2 step-page-container bg_color_white rounded-2 flex-grow-1 px-3 py-4 d-flex flex-column">
      <Title step={2} stepName={"اطلاعات مشتری"}></Title>
      <WizardStepper phase={2}></WizardStepper>
      <div className="order-detail-container bg_color_light_gray w-100 mt-5 rounded-2 p-0 p-md-3 flex-grow-1 d-flex flex-column">
        <div className="order-detail-sub-container bg_color_white p-0 p-md-3 rounded_2 flex-grow-1">
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
                className="bg_color_light_gray w-100 rounded-1 px-2 anjoman_regular color_text"
                type="text"
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
                className="bg_color_light_gray w-100 rounded-1 px-2 anjoman_regular color_text"
                type="text"
              />
            </div>
          </div>
          <div className="txt-atrea-container d-flex flex-column mt-3">
            <label className="fs_14 anjoman_regular color_text mb-2" htmlFor="">توضیحات</label>
          <textarea placeholder="آیا نکته یا شرایط خاصی وجود دارد که باید در مورد شما بدانیم؟" className="p-2 fs_14 anjoman_regular rounded-1 bg_color_light_gray " name="" id=""></textarea>
          </div>
          
        </div>
      </div>
    </div>
  );
}
