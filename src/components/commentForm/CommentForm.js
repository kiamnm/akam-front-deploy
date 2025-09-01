"use client";
import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { LuUserRound } from "react-icons/lu";
import formValidation from "./validation";
import { AuthContext } from "@/context/AuthContext";
import { successNotif, failNotif } from "@/utils/notif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseOutline } from "react-icons/io5";

import FullScreenOtp from "../fullScreenOtp/FullScreenOtp";
import fetchPhoneForm from "@/utils/login/fetchPhoneForm";
import fetchCreateComment from "@/utils/comments/fetchCreateComment";
import ProFullScreenOtp from "../proFullScreenOtp/ProFullScreenOtp";
export default function CommentForm({
  articleObjId,
  cmObjId,
  setIsAnswerBoxOpen,
  author,
}) {
  const { checkAuth } = useContext(AuthContext);
  const [isOtpShow, setIsOtpShow] = useState(false);
  const [wasOtpTrue, setWasOtpTrue] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [commentErr, setCommentErr] = useState("");
  const [pending, setPending] = useState(false);
  const sendCmToServer = async () => {
    const result = await fetchCreateComment(comment, articleObjId, cmObjId,name);

    if (result) {
      successNotif("کامنت با موفقیت ثبت شد");
      setComment("");
      setName("");
      setPhone("");
    } else {
      failNotif("خطایی رخ داده است !");
    }
  };
  // useEffect(() => {
  //   if (wasOtpTrue) {
  //     console.log("آماده ایم که کامنت را ارسال کنیم");
  //     sendCmToServer();
  //     setWasOtpTrue(false);
  //   }
  // }, [wasOtpTrue]);
  const handleSubmit = async () => {
    const isValidate = formValidation(
      name,
      phone,
      comment,
      setNameErr,
      setPhoneErr,
      setCommentErr
    );

    if (isValidate) {
      const authUser = await checkAuth();
      if (authUser && authUser.phone !== phone) {
        setPhoneErr("لطفا شماره موبایل خودتان را وارد کنید!");
      } else if (!authUser) {
        const isOtpSent = await fetchPhoneForm(phone, setPhoneErr, setPending);
        if (isOtpSent) {
          setIsOtpShow(true);
        } else {
          failNotif("خطایی در ارسال فرم رخ داد!");
        }
      } else {
        sendCmToServer();
      }
    }
  };
  return (
    <div
      className={`comment-form-container bg_color_white ${
        cmObjId ? "py-3" : "py-4"
      } px-4`}
    >
      {cmObjId && (
        <div className="text-start pb-4">
          <IoCloseOutline
            onClick={() => setIsAnswerBoxOpen(false)}
            style={{ fontSize: "24px", cursor: "pointer" }}
          />
        </div>
      )}

      <div className="top d-block d-md-flex gap-4   align-items-start">
        <div className="icon-title d-flex align-items-center gap-2 mb-3 mb-md-0   pb-md-0">
          <span className="author-icon ">
            <LuUserRound style={{ fontSize: "22px" }} />
          </span>
          <p className="fs_14 anjoman_semibold p-0 m-0 text-nowrap">
            {author ? `پاسخ به ${author}` : "دیدگاه جدید"}
          </p>
        </div>
        <div className="inputs-container d-flex flex-column flex-md-row  gap-3 gap-md-4 w-100 ">
          <div className="w-100 w-md-50">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-100 comment"
              type="text"
              placeholder="نام"
            />
            {nameErr.length > 0 && (
              <p className="color_orange fs_12 anjoman_light pt-1 m-0">
                {nameErr}
              </p>
            )}
          </div>
          <div className="w-100 w-md-50">
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="w-100 comment"
              type="text"
              placeholder="شماره تلفن"
            />
            {phoneErr.length > 0 && (
              <p className="color_orange fs_12 anjoman_light pt-1 m-0">
                {phoneErr}
              </p>
            )}
          </div>
        </div>
      </div>
      <textarea
        className="comment mt-3 mt-md-4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="متن کامنت"
        name=""
        id=""
      ></textarea>
      {commentErr.length > 0 && (
        <p className="color_orange fs_12 anjoman_light pt-1 m-0">
          {commentErr}
        </p>
      )}

      <div className="text-start anjoman_regular pt-3">
        <button
          onClick={handleSubmit}
          className="bg_color_orange btn  fs_14 anjoman_bold color_white"
          disabled={pending}
        >
          {pending ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "ارسال"
          )}
        </button>

        {/* {isOtpShow && (
          <div className="">
            <FullScreenOtp
              setIsOtpShow={setIsOtpShow}
              phoneNumber={phone}
              setWasOtpTrue={setWasOtpTrue}
            ></FullScreenOtp>
          </div>
        )} */}
        {isOtpShow && (
          <ProFullScreenOtp
            setIsOtpShow={setIsOtpShow}
            handleIsOtpTrue={sendCmToServer}
            phoneNumber={phone}
          ></ProFullScreenOtp>
        )}
      </div>
    </div>
  );
}
