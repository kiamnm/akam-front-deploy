"use client"
import React from 'react'
import ClientLayout from '../../clientLayout/ClientLayout'
import "./style.css"
import Link from 'next/link'
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { IoHomeSharp } from "react-icons/io5";




export default function DownMenu({setIsSideMenuOpen}) {
  return (
    <div className=' down-menu-container pt-1'>
       
        <ClientLayout>
            <div className='d-flex justify-content-between align-items-center item-container px-2'>
                
                <div className='d-flex flex-column justify-content-center align-items-center' >
                    <Link className='text-decoration-none color_white fs_22' href="/test"><IoHomeSharp /></Link>
                    <p className='fs_12 active anjoman_regular'>خانه</p>
                </div>
               <div className='d-flex flex-column justify-content-center align-items-center'>
<div className='text-decoration-none color_white fs_22' onClick={()=>setIsSideMenuOpen(true)}><SlMenu /></div>
<p className='fs_12 not-active anjoman_regular'>منو</p>
               </div>
               <div className='d-flex flex-column justify-content-center align-items-center'>
                 <Link className='text-decoration-none color_white fs_22' href="/test"><BsCart2 /></Link>
                 <p className='fs_12 not-active anjoman_regular'>سبد خرید</p>
               </div>
               <div className='d-flex flex-column justify-content-center align-items-center'>
                 <Link className='text-decoration-none color_white fs_22' href="/test"><FiUser /></Link>
                 <p className='fs_12 not-active anjoman_regular'>ورود</p>
               </div>
               
               
               
                 
                
            </div>
        </ClientLayout>
    </div>
  )
}
