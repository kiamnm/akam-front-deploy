import React from 'react'
import "./style.css"
import { RiDownloadLine } from "react-icons/ri";



export default function Broshour() {
  return (
    <div className="broshour-container d-flex flex-column flex-md-row justify-content-between w-100 ">
        <div className="img-container">
            <img src="./images/broshour.png" alt="درباره آهن آکام" />
          </div>
          <div className="text-container d-flex flex-column justify-content-between">
            <div>
                <h2 className="fs_16 anjoman_bold pt-3 pt-md-0">دانلود بروشور آکام</h2>
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
            {/* //vase onclick va handle ssr component bayad btn ye component joda beshe */}
            <button className=' py-2 bg_color_orange fs_14 anjoman_regular color_white rounded-2 align-self-end'><RiDownloadLine style={{fontSize:"18px"}} /><span className='pe-2'>دانلود</span></button>
          </div>

          
        </div>
  )
}
