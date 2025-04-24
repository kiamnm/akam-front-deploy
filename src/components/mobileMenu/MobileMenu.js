"use client"
import React,{useState} from 'react'
import "./style.css"
import DownMenu from './downMenu/DownMenu'
import MobileSideMenu from './mobileSideMenu/MobileSideMenu'

export default function MobileMenu() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div className='d-block d-md-none' ><DownMenu setIsSideMenuOpen={setIsSideMenuOpen}></DownMenu>
    <MobileSideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen}></MobileSideMenu></div>
  )
}
