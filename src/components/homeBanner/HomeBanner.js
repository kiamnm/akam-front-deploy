import React from 'react'
import "./style.css"
import ClientLayout from '../clientLayout/ClientLayout'

export default function HomeBanner() {
  return (
    

<ClientLayout>
    <div className='home-banner-container position-relative '>
       
        <img className='position-absolute' src="/images/homebanner.png" alt="" />
        <div className='position-absolute  h-100 d-flex flex-column align-items-center justify-content-between content-container'>
            <h2 className='color_white anjoman_bold fs_20 align-self-start'>تجارت فولاد آکام گستر</h2>
        <p className='color_white anjoman_regular fs_16 m-0 text_justify'>شرکت تجارت فولاد آکام گستر طی سالیان متمادی در زمینه توزیع و عرضه انواع مقاطع فولادی فعالیت کرده و همواره در تلاش بوده تا اصول صداقت و مشتری مداری را سرلوحه مسیر خود قرار دهد. <span className='d-none d-md-block'>کارشناسان این مجموعه همه همت خویش را به کار بسته‌اند تا خدماتی شایسته و متناسب با نیاز مشتریان را ارائه کنند</span></p>
        <p className='color_white anjoman_regular fs_16 m-0 text_justify'>امروز به خود می‌بالیم که توانسته‌ایم رضایت همراهان محترم آکام گستر در سراسر کشور عزیزمان، ایران را جلب نماییم.</p>
        </div>
        
    </div>
</ClientLayout>
    
  )
}
