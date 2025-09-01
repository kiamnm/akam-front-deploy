"use client"
import React,{useState,useEffect} from 'react'
import "./style.css"
import fetchPriceHistory from '@/utils/priceHistory/fetchPriceHistory';

export default function ProductPriceHistory({productId}) {
    const [showAll, setShowAll] = useState(false);
    const [pemdimg,setPendig]=useState(false)
    const [priceHistory,setPriceHistory]=useState([])
    const visibleRows = showAll ? priceHistory : priceHistory.slice(0, 3);

    useEffect(()=>{
      const getData=async()=>{
        const data=await fetchPriceHistory(productId,"month",setPendig)
        console.log("tiow",data,"datas");
        setPriceHistory(data.reverse())
      }
      getData()
    },[])
  return (
     <div className='price-history-container'>
      <table className="custom-table table-responsive w-100 mt-3">
        <thead>
          <tr>
            <th className='fs_12 anjoman_bold py-3'>تاریخ</th>
            <th className='fs_12 anjoman_bold'>قیمت (تومان)</th>
          </tr>
        </thead>
        <tbody className='fs_12 anjoman_num_regular'>
          {visibleRows.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.price?row.price:"_"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
        <div className="text-center mt-4 anjoman_regular ">
          <button
            className=" bg_color_orange color_white   see-more anjoman_regular fs_14"
            onClick={() => setShowAll((prev)=>!prev)}
          >
            {!showAll?"مشاهده بیشتر":"مشاهده کمتر"}
            
          </button>
        </div>
      


      
    </div>
  )
}
