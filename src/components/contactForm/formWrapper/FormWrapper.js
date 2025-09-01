"use client";
import React, { useState } from "react";
import "./style.css";
import validation from "../validation";
import { ToastContainer, toast } from "react-toastify";

export default function FormWrapper() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [pending, setPending] = useState(false);

  const handleClickSubmit = () => {
    setPending(true);
    const isValid = validation(
      phone,
      name,
      subject,
      message,
      setPhoneErr,
      setNameErr,
      setSubjectErr,
      setMessageErr
    );
    if (isValid) {
      toast.success("فرم با موفقیت ارسال شد.", {
        position: "bottom-right",
      });

      setTimeout(() => {
        setPending(false);
      }, 2000);
    } else {
      toast.error("خطایی رخ داده است !", {
        position: "bottom-right",
      });

      setTimeout(() => {
        setPending(false);
      }, 2000);
    }
  };
  return (
    <div className="input-btn-container d-flex flex-column">
      <div className="pt-4">
        <input
          value={phone}
          placeholder="شماره موبایل *"
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <p className="err fs_12 anjoman_regular color_orange pt-2 m-0">
          {phoneErr}
        </p>
      </div>
      <div className="pt-2">
        <input
          value={name}
          className="m-0"
          placeholder="نام و نام خانوادگی *"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p className="err fs_12 anjoman_regular color_orange pt-2 m-0">
          {nameErr}
        </p>
      </div>
      <div className="pt-2">
        <input
          value={subject}
          placeholder="موضوع *"
          type="text"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <p className="err fs_12 anjoman_regular color_orange pt-2 m-0">
          {subjectErr}
        </p>
      </div>
      <div className="pt-2">
        <textarea
          value={message}
          placeholder="متن پیام *"
          name=""
          id=""
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <p className="err fs_12 anjoman_regular color_orange pt-2 m-0">
          {" "}
          {messageErr}
        </p>
      </div>

      <button
        disabled={pending}
        onClick={handleClickSubmit}
        className="w-100 bg_color_orange fs_14 anjoman_regular color_white mt-3 py-2"
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
      <ToastContainer />
    </div>
  );
}
