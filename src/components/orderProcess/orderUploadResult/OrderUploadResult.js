import React,{useContext} from 'react'
import "./style.css"
import { wizardProcessContext } from '@/context/userPanel/wizardProcess'
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuFileSymlink } from "react-icons/lu";

export default function OrderUploadResult() {
    const {order}=useContext(wizardProcessContext)
  return (
     <div className="file-detail-container d-flex justify-content-between align-items-center ">
           <div className="left d-flex justify-content-center align-items-center"> 
            <span className="d-flex align-items-center justify-content-center">
              <LuFileSymlink style={{ fontSize: "22px", color: "#4b4b4b" }} />
            </span>
            <p className="p-0  m-0 fs_13 anjoman_regular color_text">{order.
uploadFile}</p>
           
          </div>
          <div className="right d-flex">
            
    
            <span className="cursor_pointer" >
              <Tooltip
                title="دانلود"
                placement="bottom"
                PopperProps={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, 4], // مقدار دوم فاصله عمودی رو کم یا زیاد می‌کنه
                      },
                    },
                  ],
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      fontFamily: "anjomanRegular",
                      fontSize: "12px",
                    },
                  },
                }}
              >
                {" "}
                <MdOutlineFileDownload
                  style={{ fontSize: "24px", color: "#4b4b4b" }}
                />
              </Tooltip>
            </span>
          </div>
         
        </div>
  )
}
