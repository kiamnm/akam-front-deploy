"use client";
import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import fetchPriceHistory from "@/utils/priceHistory/fetchPriceHistory";
import { IoIosArrowDown } from "react-icons/io";
import { Spinner } from "@geist-ui/core";
import { IoClose } from "react-icons/io5";

export default function ChartWrapper({ productId, range,onClose,haveType }) {
  const [data, setData] = useState([]);
  const [type, setType] = useState(productId);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchPriceHistory(type, range, setPending);
      if (res) {
        setData(res);
      }
    };
    getData();
  }, [type]);
  
    return (
      <div className="chartWrapper d-flex flex-column  align-items-start position-relative">
        {pending && (
          <div className="position-absolute overlay d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center flex-column gap-2">
              <Spinner
                scale={2}
                style={{
                  borderTopColor: "#FF5050", // رنگ دلخواه
                  borderColor: "#ccc", // رنگ بقیه حاشیه‌ها
                }}
              />
              <p className="fs_14 anjoman_regular color_white">
                لطفا صبر کنید ...
              </p>
            </div>
          </div>
        )}
<div className="d-flex justify-content-between align-items-center w-100">
  <div className="position-relative">
    {haveType && (
      <><select
            className="chart fs_14 anjoman_regular cursor_pointer me-4 mt-3 rounded-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="683453677e3ae18490998c14">میلگرد</option>
            <option value="68345a997e3ae18490998c16">تیرآهن</option>
          </select> 
          <IoIosArrowDown
            style={{
              position: "absolute",
              left: "8px",
              top: "50%",

              pointerEvents: "none", // آیکون کلیک‌پذیر نباشه
              color: "#555",
            }}
          />
      </>
       
    )}
         

          {/* آیکون فلش پایین */}
         
        </div>
        {onClose && (
          <div className="ms-3 mt-3 ">
          <IoClose onClick={()=>{onClose()}} style={{cursor:"pointer",fontSize:"24px"}} />
        </div>
        )}
        
        
</div>
        

        <Chart data={data}></Chart>
      </div>
    );
 
}
