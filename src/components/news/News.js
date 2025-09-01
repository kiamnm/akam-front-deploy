import React from 'react'
import "./style.css"
import InputBtn from './inputBtn/InputBtn'

export default function News() {
  return (
    <div className='news-container d-flex flex-column '>
<div className="title d-flex align-items-end  ">
    <img src="/images/news-icon.svg" alt="" />
    <p className='m-0 fs_16 anjoman_semibold  '>خبرنامه آکام</p>
</div>
<div className='d-flex flex-column  justify-content-center  content-container'>
  <p className='fs_14 anjoman_regular m-0 color_text'>با عضویت در خبرنامه آکام گستر، از جدیدترین اخبار بازار آهن مطلع شوید!</p>
<div className=''>
<InputBtn></InputBtn>
</div>
</div>

    </div>
  )
}
