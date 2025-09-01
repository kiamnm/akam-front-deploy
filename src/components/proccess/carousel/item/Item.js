import React from 'react'
import "./style.css"

export default function Item({data}) {
  return (
    <div className='bg_color_white  d-flex flex-column align-items-center align-items-md-start  proccess-carousel-item'>
        <img src={data.iconSrc} alt="" />
        <p className='fs_14 anjoman_bold m-0 title '>{data.title}</p>
        <p className='fs_14 anjoman_regular text-justify m-0 align-self-center color_text text'>{data.detail}</p>
    </div>
  )
}
