import React from "react";
import "./style.css";

export default function ArticleSidebar({data}) {
  
  return (
    <div className="article-sidebar-component-container ">
      <span className="fs_14 anjoman_medium  p-0 m-0 color_white d-flex justify-content-center align-items-center">مقالات اخیر</span>
      {data.map((item,index)=>{
        return (
            <div key={index} className="each-article-container">
        <img src={item.coverSrc} alt="" />
        <h4 className="fs_14 anjoman_medium pt-3 p-0 m-0 color_text">
{item.title}        </h4>
        <p className="fs_14 anjoman_light m-0 pb-4 color_text">
          {item.shortDescription}
        </p>
      </div>
        )
      })}
    </div>
  );
}
