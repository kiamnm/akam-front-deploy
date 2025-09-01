"use client";
import "./style.css"
import React, { useContext } from "react";
import WithPhone from "../loginForm/withPhone/WithPhone";
import WithPass from "../loginForm/withPass/WithPass";
import { LoginContext } from "@/context/LoginContext";
import SixDigit from "../loginForm/sixDigit/SixDigit";

export default function LoginWrapper() {
  // const {sixDigitShow}=useContext(RegisterContext)
  const { formState,sixDigitShow } = useContext(LoginContext);
  return (
    <div>
      
      {(formState === "phone" && !sixDigitShow) && <WithPhone></WithPhone>}

      {(formState === "password" && !sixDigitShow) && <WithPass></WithPass>}

      {sixDigitShow && (
        <div className="phone-validation-container">
          <SixDigit></SixDigit>
        </div>
      )}

      {/* {!sixDigitShow && (
                      <RegisterForm ></RegisterForm>
                    )}
                      
                      <div className='d-flex justify-content-center'>
                        <div className='phone-validation-container  rounded'>
                        <SixDigit  ></SixDigit>
                      </div>
                      </div> */}
    </div>
  );
}
