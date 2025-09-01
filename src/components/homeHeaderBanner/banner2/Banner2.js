import React from 'react'
import "./style.css"

export default function Banner2() {
  return (
    <div className='banner2-container d-flex justify-content-between'>
        <div className='d-flex justify-content-center align-items-center w-100'>
            <div>
                <h2 className='anjoman_bold px-2 text-center '>
                حمل و فروش مقاطع فولادی
            </h2>
            <p className='anjoman_semibold fs_16 color_text px-3 text-center'>خرید دسته اول انواع مقاطع فولادی</p>
            <div className='text-start'>
               <button className='anjoman_medium fs_16 px-2 px-md-3 py-2 rounded-3 bg_color_orange color_white'>مشاهده تمام محصولات</button> 
            </div>
            
            </div>
            
        </div>
        <div className='img-container'>
           <img src="./images/test-banner-3.png" alt="" />
        
        </div>
         
        
       
    </div>
  )
}
