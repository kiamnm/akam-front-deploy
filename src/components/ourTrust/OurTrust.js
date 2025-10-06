import React from 'react'
import "./style.css"
import Carousel from './carousel/Carousel'

export default function OurTrust() {
  return (
    <div className='  our-trust-container d-flex flex-column '>
        <div className="title d-flex align-items-end   ">
            <img className='title-logo'  src="/images/costumers-icon.svg" alt="" />
            <p className='m-0 p-0 fs_16 anjoman_semibold '>کارخانه‌ها</p>
        </div>
        <div className='content-container  w-100 d-flex justify-content-center align-items-center  '>
            <Carousel></Carousel>
            
        </div>
            
        
        
    </div>
  )
}
