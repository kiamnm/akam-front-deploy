import React from 'react'
import "./style.css"
import AboutUs from '@/components/aboutUs/AboutUs'
import ClientLayout from '@/components/clientLayout/ClientLayout'
import AboutCarousel from '@/components/aboutCarousel/AboutCarousel'
import Broshour from '@/components/broshour/Broshour'
import AboutInfo from '@/components/aboutInfo/AboutInfo'

export default function page() {
  return (
    <div className='aboutus-page-container mt-4 mt-md-5'>
      <AboutUs></AboutUs>
      <ClientLayout>
        <div className='mt-4 mt-md-5'>
          <h2 className='fs_16 anjoman_bold'>به ما اعتماد کرده‌اند</h2>
      </div>
      </ClientLayout>
      <div className='mt-3'>
        <ClientLayout>
        <AboutCarousel></AboutCarousel>
      </ClientLayout>
      </div>
      <div className='mt-4 mt-md-5'>
        <ClientLayout>
        <Broshour></Broshour>
      </ClientLayout>
      </div>
      <div className='mt-4 mt-md-5'>
        <ClientLayout>
        <AboutInfo></AboutInfo>
      </ClientLayout>
      </div>
      
      
    </div>
  )
}
