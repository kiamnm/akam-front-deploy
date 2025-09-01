import React from 'react'
import "./style.css"
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Banner1() {
  return (
    <div className='banner1-container d-flex justify-content-center align-items-center'>
        <div className="content ">
                <h2 className='anjoman_bold px-0 px-md-5 py-2 m-0 text-center'>تجارت فولاد آکام گستر</h2>
                <div className='bg_color_orange color_white text-center  anjoman_medium rounded-4 py-1 mb-3 test2'>فروش مستقیم انواع مقاطع فولادی</div>
                <div className="button-container d-flex justify-content-center align-items-center gap-3">
                    
                    <span className='bg_color_orange d-flex justify-content-center align-items-center cursor_pointer'><MdKeyboardArrowRight style={{color:"white",fontSize:"45px"}} /></span>
                    <button className='anjoman_medium px-2 px-md-3 py-2 rounded-3 color_text ' >لیست مقاطع</button>
                </div>
        </div>
    </div>
  )
}
