import React from "react";
import "./style.css";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import ContactForm from "@/components/contactForm/ContactForm";
import ContactInfo from "@/components/contactInfo/ContactInfo";
import ContactBanner from "@/components/contactBanner/ContactBanner";
import ContactMap from "@/components/contactMap/ContactMap";

export default function ContactUs() {
  return (
    <div>
      {/* <svg
    className="position-absolute top-0 left-0 w-100 z-1"
    xmlns="http://www.w3.org/2000/svg"
    width="1280"
    height="500"
    fill="none"
    viewBox="0 0 1280 500"
    style={{
      width: "100%",
      height: "auto",
      display: "block"
    }}
  >
    <path
      fill="#D9D9D9"
      d="M568.363 350C262.028 384.592 119.979 652.863 0 725.283V1523h1274.15L1296.5 0c-91.55 114.848-365.058 309-728.137 350"
    ></path>
  </svg> */}
      <ClientLayout>
        <div className="contactus-page-container position-relative">
          <div className="info-form-container d-flex flex-column-reverse flex-md-row mt-5 justify-content-between">
            <ContactInfo></ContactInfo>
            <ContactForm></ContactForm>
          </div>
          <div className="banner-map-container d-flex flex-column-reverse flex-md-row mt-5 justify-content-between">
            <ContactMap></ContactMap>
            <ContactBanner></ContactBanner>
          </div>
        </div>
      </ClientLayout>
    </div>
  );
}
