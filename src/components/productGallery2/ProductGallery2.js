import React from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";
import Link from "next/link";
import galleryData from "./data";

export default function ProductGallery2() {
  return (
    <div className="product-gallery-container">
      <ClientLayout>
        <h2 className="anjoman_bold fs_20 color_text "> مقاطع آکام آهن</h2>
        <div className="gallery-container  d-flex flex-wrap row ">
          {galleryData.map((item, index) => {
            return (
              <div key={index} className="col-4 col-md-3   ">
                <Link
                  href={item.href}
                  className={`item-container  text-decoration-none ${item.specialClass} `}
                >
                  {item.svg}
                  <p className="p-0 m-0 anjoman_semibold fs_16  color_text">
                    {item.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </ClientLayout>
    </div>
  );
}
