import React from "react";
import "./style.css";
import FormWrapper from "./formWrapper/FormWrapper";

export default function ContactForm() {
  return (
    <div className="contact-form-container bg_color_white px-2 px-md-4 py-4">
      <h2 className="fs_16 anjoman_bold m-0 ">فرم تماس با ما</h2>
      <FormWrapper></FormWrapper>
    </div>
  );
}
