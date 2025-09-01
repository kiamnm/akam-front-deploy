import React from 'react'
import "./style.css"
import Link from 'next/link'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Title({titleData}) {
  
  return (
    <div className="title-container d-flex justify-content-between align-items-center">
                    <h3 className='anjoman_bold fs_20 color_text m-0 p-0'>{titleData.title}</h3>
                    <div className='m-0 p-0'>
                      {titleData.href && (
                        <>
                        <Link className='text-decoration-none color_orange fs_16 anjoman_semibold' href={titleData.href}>{titleData.btnTitle}</Link>
                        <MdOutlineKeyboardArrowLeft style={{fontSize:"26px",color:"#FF5050"}} />
                        </>
                      )}
                        

                    </div>
                </div>
  )
}
