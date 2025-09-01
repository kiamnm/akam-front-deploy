import React from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";

export default function AboutUs() {
  return (
    <div>
      <ClientLayout>
        <div className="aboutus-container d-flex flex-column flex-md-row justify-content-between">
          <div className="text-container ">
            <h1 className="fs_16 anjoman_bold">درباره آهن آکام</h1>
            <p className="fs_14 anjoman_regular">
              شرکت تجارت فولاد آکام گستر طی سالیان متمادی در زمینه توزیع و عرضه
              انواع مقاطع فولادی فعالیت کرده و همواره در تلاش بوده تا اصول صداقت
              و مشتری مداری را سر لوحه مسیر خود قرار دهد.کارشناسان این مجموعه
              همه همت خویش را به کار بسته‌اند تا خدماتی شایسته و متناسب با نیاز
              مشتریان را ارائه کنند. امروز به خود میبالیم که توانسته ایم رضایت
              همراهان محترم آکام گستر در سرتاسر کشور عزیزمان ایران را جلب
              نماییم.
              
            </p>
            <p className="fs_14 anjoman_regular">
            امروز به خود میبالیم که توانسته ایم رضایت
            همراهان محترم آکام گستر در سرتاسر کشور عزیزمان ایران را جلب نماییم
            </p>
          </div>

          <div className="img-container">
            <img src="./images/aboutus.png" alt="درباره آهن آکام" />
          </div>
        </div>
      </ClientLayout>
    </div>
  );
}
