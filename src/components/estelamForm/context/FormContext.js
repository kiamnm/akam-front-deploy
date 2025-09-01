import React, { createContext, useState } from "react";

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dynamicItems, setDynamicItems] = useState([
    { productName: "", amount: "" },
  ]);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dynamicError, setDynamicError] = useState([{ name: "", amount: "" }]);
  const [explanation, setExplanation] = useState("");
  const [explenationError, setExplanationError] = useState("");
  const [file, setFile] = useState(null);
  const [sixDigitShow, setSixDigitShow] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [isOtpShow, setIsOtpShow] = useState(false);
  const [uploadErr,setUploadErr]=useState("")
  
     const [isModalShow,
     setIsModalShow]=useState("")
     

  const value = {
    name,
    setName,
    phone,
    setPhone,
    dynamicItems,
    setDynamicItems,
    nameError,
    setNameError,
    phoneError,
    setPhoneError,
    dynamicError,
    setDynamicError,
    file,
    setFile,
    explenationError,
    setExplanationError,
    explanation,
    setExplanation,
    sixDigitShow,
    setSixDigitShow,
    otp,
    setOtp,
    otpError,
    setOtpError,
    isOtpShow,
     setIsOtpShow,
     isModalShow,
     setIsModalShow,
     uploadErr,
     setUploadErr

     
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
