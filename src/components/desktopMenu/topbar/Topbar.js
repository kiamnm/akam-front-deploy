import React from 'react'
import "./style.css"
import Button from './button/Button'
import Link from 'next/link'
import { FiPhoneCall } from "react-icons/fi";
export default function Topbar() {
  return (
    <div className='topbar-container d-flex justify-content-between align-items-center  '>
      <div className="right  ">
        <Link className='d-flex align-items-center color_dark text-decoration-none' href="/">
        <div className='p-0 m-0'>
          <img   src="/images/logo-black.svg" alt="" />
        </div>
        
        <p className='  m-0 anjoman_bold fs_18'>آکام آهن</p>
        </Link>
        
      </div>
      <div className="left d-none d-md-block">
      <Button></Button>
      </div>


<div className="left d-flex d-md-none align-items-center ">
          <p className="m-0 anjoman_bold fs_16"> 91001083- </p>
          <p className="m-0 anjoman_bold fs_14 ps-2"> 021 </p>
          <FiPhoneCall style={{color:"#FF5050",fontSize:"26px"}} />
        </div>



    </div>
  )
}
