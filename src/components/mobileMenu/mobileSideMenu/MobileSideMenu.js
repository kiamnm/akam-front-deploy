"use client"
import React,{useRef,useEffect,useState} from 'react'
import "./style.css"
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { ItemWithSub } from './data';
import { ItemWithoutSub } from './data';
import Link from 'next/link';



export default function MobileSideMenu({isSideMenuOpen,setIsSideMenuOpen}) {
  const[isDropDownOpen,setIsDrowpDownOpen]=useState(false)
  const [openIndex, setOpenIndex] = useState(null);
  const sideMenuRef=useRef(null)


  const handleClickOutsideMenu=(e)=>{
    if (
      isSideMenuOpen &&
      !sideMenuRef.current.contains(e.target) 
    ) {
      setIsSideMenuOpen(false);
    }
  }
  useEffect(()=>{
    if (isSideMenuOpen) {
      document.body.style.overflow = "hidden"; // اسکرول را غیرفعال می‌کند
    } else {
      document.body.style.overflow = "auto"; // اسکرول را فعال می‌کند
    }
    document.addEventListener("click",handleClickOutsideMenu)
    return ()=>{document.removeEventListener("click",handleClickOutsideMenu)}
  },[isSideMenuOpen])









 
  const toggleSubMenu = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };
  return (
    <div className='mobile-side-menu-container' >
      <div className={`overlay ${isSideMenuOpen?"d-block":"d-none"}`}></div>




      <div ref={sideMenuRef} className={`mobile-side-container d-flex flex-column justify-content-between  ${isSideMenuOpen?"open":"close"}`}>

        <div>
           <div className="logo-container d-flex justify-content-start align-items-center bg_color_gray">
          <img src="/images/logo-black.svg" alt="" />
          <p className='p-0  m-0 anjoman_bold fs_16'>آکام آهن</p>
        </div>
<div>
  {ItemWithSub.map((item, index) => (
          <div key={index} className='item-container pt-3 w-100'>
            <div
              onClick={() => toggleSubMenu(index)}
              className='item color_white w-100 d-flex justify-content-between align-items-center fs_14 anjoman_bold'>
              {item.title}
              <MdKeyboardArrowDown
                className={`rotate ${openIndex === index ? "rotate-open" : ""}`}
                style={{ fontSize: "24px" }}
              />
            </div>
            <div
              className={`px-3 mt-2 sub-container d-flex flex-column bg_color_white py-3 ${openIndex === index ? "d-flex" : "d-none"}`}
            >
              {item.subItems.map((subItem, subIndex) => (
                <Link onClick={()=>{setIsSideMenuOpen(false)}} href={subItem.href} key={subIndex} className='p-0 m-0 fs_12 color_black text-decoration-none anjoman_bold'>{subItem.title}</Link>
              ))}
            </div>
          </div>
        ))}

{ItemWithoutSub.map((item,index)=>
          <div key={index} className='item-container pt-3 w-100'>
          <Link
          onClick={()=>{setIsSideMenuOpen(false)}}
            href={item.href}
            className='item color_white w-100  fs_14 anjoman_bold text-decoration-none'>
            {item.title}
            
          </Link>
          
        </div>
        )}
</div>
        </div>
       
        

        <div className="social-icon-container w-100 d-flex justify-content-between align-items-center pt-5 ">
        <FiInstagram style={{color:"white",fontSize:"26px"}} />
        <PiTelegramLogoLight style={{color:"white",fontSize:"26px"}} />
        <BsWhatsapp style={{color:"white",fontSize:"26px"}} />
        <IoLogoLinkedin style={{color:"white",fontSize:"26px"}} />
        



        </div>

          


      </div>
    </div>
    
    
  )
}
