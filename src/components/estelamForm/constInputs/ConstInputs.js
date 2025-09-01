"use client";
import React, { useState,useContext } from "react";
import { FormContext } from "../context/FormContext";
import "./style.css";

export default function ConstInputs() {
  const {name,setName,phone,setPhone,nameError,phoneError}=useContext(FormContext)
 
  return (
    <div className="estelam-const-input-container">
      <div className="inputs-container d-flex flex-wrap justify-content-center ">
        <div className="item-container   ">
          <label className="fs_14 anjoman_regular color_text" htmlFor="name">
            نام و نام خانوادگی/شرکت
          </label>
          <input
          className="m-0 "
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="نام و نام خانوادگی"
            id="name"
            type="text"
          />
          {nameError && (
            <p className="color_orange fs_12 anjoman_light pt-2 m-0">
            {nameError}
          </p>
          )}
          
        </div>
        <div className="item-container ">
          <label className="fs_14 anjoman_regular color_text" htmlFor="phone">
            شماره موبایل
          </label>
          <input
          className="m-0 num"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="شماره موبایل"
            id="phone"
            type="text"
          />
          {phoneError && (
            <p className="color_orange fs_12 anjoman_light pt-2 m-0">
            {phoneError}
          </p>
          )}
          
        </div>
      </div>
    </div>
  );
}
