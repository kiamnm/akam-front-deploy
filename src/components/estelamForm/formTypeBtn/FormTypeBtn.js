import React from 'react'
import "./style.css"

export default function FormTypeBtn({activeForm,setActiveForm}) {
  return (
    <div className="btn-container ">
                <button onClick={()=>{setActiveForm("manual")}} className={`manual color_black fs_14 anjoman_semibold estelam-btn ${activeForm==="manual"?"active":"not-active"}`}>فرم دستی</button>
                <button onClick={()=>{setActiveForm("upload")}} className={`upload color_black fs_14 anjoman_semibold estelam-btn ${activeForm==="upload"?"active":"not-active"}`}>آپلود</button>
          </div>
  )
}
