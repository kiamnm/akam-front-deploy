"use client";
import React, { useEffect, useState,useRef } from "react";
import "./style.css";
import { BiSupport } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import fetchGetOneTicket from "@/utils/userpanel/ticket/fetchGetOneTicket";
import { CiFileOn } from "react-icons/ci";
import convertToShamsi from "@/utils/convertToShamsi";
import { LuFile } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";
import ProModal from "@/components/proModal/ProModal";
import { IoWarningOutline } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";
import fetchContinueTicket from "@/utils/userpanel/ticket/fetchContinueTicket";
import { successNotif, failNotif } from "@/utils/notif";
import fetchCloseTikcet from "@/utils/userpanel/ticket/fetchCloseTicket";
import Link from "next/link";
import ProUpload from "@/components/proUpload/ProUpload";

export default function Page() {
  const searchParams = useSearchParams();
  const ticketObjid = searchParams.get("ticketId");
  const [ticket, setTicket] = useState(null);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [uploadErr, setUploadErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [isUploadErrModalShow, setIsUploadErrModalShow] = useState(false);
  const [isMessageErrShow, setIsMessageErrShow] = useState(false);
  const [isCloseTicketShow,setIsTicketShow]=useState(false)
  const [pending,setPending]=useState(false)
  const [isTicketClose,setIsTicketClose]=useState(false)
  const fileInputRef = useRef(null);
   const handleFileClick = () => {
    fileInputRef.current.click(); // شبیه‌سازی کلیک روی input
  };
  const handleFileChange = (e) => {
  const files = e.target.files;

  if (!files || files.length === 0) return;

  // فقط یک فایل
  if (files.length > 1) {
    setUploadErr("لطفا تمام موارد را در داخل یک فایل ارسال کنید!");
    setIsUploadErrModalShow(true)
    setFile(null);
    return;
  }

  const selectedFile = files[0];

  // فقط zip
  if (!selectedFile.name.toLowerCase().endsWith(".zip")) {
    setUploadErr("لطفا یک فایل با فرمت .ZIP آپلود کنید");
    setIsUploadErrModalShow(true)
    setFile(null);
    return;
  }

  // حداکثر حجم 20 مگابایت
  const maxSize = 20 * 1024 * 1024; // بایت
  if (selectedFile.size > maxSize) {
    setUploadErr("حداکثر حجم مجاز برای آپلود فایل 20 مگابایت می‌باشد");
    setIsUploadErrModalShow(true)
    setFile(null);
    return;
  }

  // اگر همه‌چیز اوکی بود
  setUploadErr("");
  setFile(selectedFile);
  console.log("Selected file:", selectedFile);
};

const handleClickSubmit=async()=>{
  setMessageErr("")
  if(message.length<1){
    setMessageErr("متن تیکت نمی‌تواند خالی باشد!")
    setIsMessageErrShow(true)
  }else if(message.length>1000){
    setIsMessageErrShow(true)
    setMessageErr("تعداد کاراکتر ‌های تیکت بیشتر از حد مجاز می‌باشد.")
  }else{
    const result=await fetchContinueTicket(message,file,setPending,ticketObjid)
    if(result){
        successNotif(" تیکت با موفقیت ارسال شد")

    }else{
        failNotif("خطا در ارتباط با سرور ....");

    }
  }
}

const handleCloseTicket=async()=>{
const result=await fetchCloseTikcet(ticketObjid)
if(result){
successNotif("تیکت با موفقت بسته شد")
}else{
failNotif("خطا در بستن تیکت")
}
}


  useEffect(() => {
    const getData = async () => {
      const result = await fetchGetOneTicket(ticketObjid);
      console.log(result);
      if (result) {
        setTicket(result);
        if(result.status===3){
          setIsTicketClose(true)
        }
      } else {
        ///befrest be safe err
      }
    };
    if (ticketObjid) {
      getData();
    }
  }, [ticketObjid]);

  if (ticket) {
    return (
      <div className="px-3 py-3 ticket-message-page-container  d-flex flex-column">
        <div className="px-3 py-3 bg_color_white rounded-2 sub-container flex-grow-1 d-flex flex-column justify-content-between">
          <div className="title-container d-flex justify-content-between pb-2 mb-4">
            <div className="right d-flex gap-3 align-items-center">
              <span className="support d-flex  justify-content-between bg_color_light_gray rounded-circle p-2">
                <BiSupport style={{ fontSize: "30px" }} />
              </span>
              <div className="d-flex justify-content-between flex-column ">
                <p className="fs_16 anjoman_medium m-0 ">{ticket.subject}</p>
                <p className="fs_14 anjoman_regular color_text m-0">
                  #{ticket.identifier}
                </p>
              </div>
            </div>
            <div className="left  d-flex align-items-center gap-3 ">
              {!isTicketClose && (
                <div onClick={handleCloseTicket} className="closse align-items-center d-flex px-2 py-1 rounded-1 cursor_pointer ">
                {" "}
                <p className="fs_14 anjoman_regular m-0 ">بستن تیکت</p>
              </div>
              )}
               {isTicketClose && (
                <div  className="closse align-items-center d-flex px-2 py-1 rounded-1  ">
                {" "}
                <p className="fs_14 anjoman_regular m-0 "> تیکت بسته شده</p>
              </div>
              )}
              <Link href="/userpanel/ticket" className="back d-flex align-items-center gap-1   cursor_pointer color_black text-decoration-none">
                <p className="fs_14 anjoman_regular m-0 ">بازگشت</p>
                <span className="d-flex align-items-center">
                  <IoChevronBack />
                </span>
              </Link>
            </div>
          </div>

          <div className="messages-container pb-2 flex-grow-1">
            {ticket.messages.map((message, index) => {
              return (
                <div
                  className={`d-flex mb-3 ${
                    message.sender === "admin"
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                  key={index}
                >
                  <div
                    className={`px-3 pt-3 pb-2 message-container d-flex flex-column justify-content-between gap-3 ${
                      message.sender === "admin"
                        ? "adminmsg bg_color_dark color_white"
                        : "bg_color_light_gray usermsg"
                    }`}
                  >
                    <div className="msg-file-container d-flex flex-column gap-2">
                      <p className="fs_14 anjoman_regular m-0">
                        {message.message}
                      </p>
                      {message.filename && (
                        <div className="d-flex">
                          <div className="file-container d-flex align-items-center rounded-1 gap-2 px-2 py-1">
                            <span className="d-flex align-items-center">
                              <LuFile style={{ fontSize: "20px" }} />
                            </span>
                            <p className="m-0 anjoman_regular fs_14">
                              فایل پیوست
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="time-container d-flex justify-content-end">
                      <p className="fs_12 anjoman_num_regular m-0">
                        {convertToShamsi(message.time).shamsiDate}
                      </p>
                      <p className="m-0">-</p>
                      <p className="fs_12 anjoman_num_regular m-0">
                        {convertToShamsi(message.time).shamsiTime}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="type-msg-container py-3 px-0 px-md-4 ">
            <div className="box-container p-3 d-flex justify-content-between align-items-center rounded-2 gap-3">
              <textarea
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}
                placeholder="متن تیکت خود را بنویسید ..."
                className="flex-grow-1 anjoman_regular"
                name=""
                id=""
              ></textarea>
              <div className="btn-container d-flex justify-content-between align-items-center gap-2">
                {!file && (
                  <div onClick={handleFileClick} className="upload d-flex align-items-center gap-2 px-1 px-md-3 py-1 rounded-1 cursor_pointer">
                  <span className="d-flex align-items-center">
                    <MdOutlineFileUpload style={{ fontSize: "22px" }} />
                  </span>
                  <p className="m-0 anjoman_regular fs_14">آپلود پیوست</p>
                   <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
                </div>
                )}
                {file && (
                 < div className="upload-file d-flex align-items-center gap-2 px-1 px-md-3 py-1 rounded-1 ">
                  <span onClick={()=>setFile(null)} className="d-flex align-items-center color_orange cursor_pointer">
                    <FiTrash2 style={{ fontSize: "22px" }} />
                    

                  </span>
                  <p className="m-0 anjoman_regular fs_14">  {file.name}</p>
                 </div>
                )}
                
                <div onClick={handleClickSubmit} className="send-response px-1 px-md-3 py-1 anjoman_regular rounded-1 bg_color_orange color_white cursor_pointer">
                  ارسال پاسخ
                </div>
              </div>
            </div>
          </div>
        </div>




{isMessageErrShow && (
                  <ProModal
                    text={
                      messageErr
                    }
                    onlyBtnText={"متوجه شدم"}
                    title={"خطا در  ارسال تیکت"}
                    isModalShow={isMessageErrShow}
                    setIsModalShow={setIsMessageErrShow}
                    icon={
                      <IoWarningOutline
                        style={{ fontSize: "34px", color: "#ff0707ff" }}
                      />
                    }
                  ></ProModal>
                )}






        {isUploadErrModalShow && (
                  <ProModal
                    text={
                      uploadErr
                    }
                    onlyBtnText={"متوجه شدم"}
                    title={"خطا در  آپلود فایل"}
                    isModalShow={isUploadErrModalShow}
                    setIsModalShow={setIsUploadErrModalShow}
                    icon={
                      <IoWarningOutline
                        style={{ fontSize: "34px", color: "#ff0707ff" }}
                      />
                    }
                  ></ProModal>
                )}
      </div>
    );
  } else {
    return <div>باید صبر کنی</div>;
  }
}
