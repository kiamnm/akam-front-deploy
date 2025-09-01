import React from "react";
import "./style.css";
import { LuPhone } from "react-icons/lu";

export default function AboutInfo() {
  const data = [
    {
      icon: <LuPhone style={{fontSize:"30px"}} />,
      num: "24",
      title: "ساعته",
      description: "پاسخگوی فعال به شما",
    },
    {
       icon: <LuPhone style={{fontSize:"30px"}} />,
      num: "24",
      title: "ساعته",
      description: "پاسخگوی فعال به شما",
    },
    {
       icon: <LuPhone style={{fontSize:"30px"}} />,
      num: "24",
      title: "ساعته",
      description: "پاسخگوی فعال به شما",
    },
    {
       icon: <LuPhone style={{fontSize:"30px"}} />,
      num: "24",
      title: "ساعته",
      description: "پاسخگوی فعال به شما",
    },
  ];
  return (
    <div className="about-info-container d-flex flex-wrap justify-content-between align-items-center pt-0 pt-md-5 ">
      {data.map((item, index) => {
        return (
          <div key={index} className="item-container col-6 col-md-3 text-center pt-4 pt-md-0">
            <div className="top d-flex justify-content-center align-items-center">
              {item.icon}
              <p className="p-0 m-0 pe-1 anjoman_num_bold fs_22 color_orange">{item.num}</p>
              <p className="p-0 pe-1 m-0 fs_14 anjoman_regular">{item.title}</p>
            </div>
            <div className="bottom">
              <p className="p-0 m-0 fs_12 anjoman_regular">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
