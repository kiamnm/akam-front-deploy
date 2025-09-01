import React from "react";
import "./style.css";
import Image from "next/image";
import { SlClock } from "react-icons/sl";
import convertToShamsi from "./../../utils/convertToShamsi"
import Link from "next/link";

export default function BlogHeader({articleData}) {
  return (
    <div className="blog-header-container w-100 d-flex flex-column flex-md-row">
      <Link href={`/blog/each/${articleData[0]._id}`} className="right">
        <div className="layout"></div>

        <Image
          className="test"
          src={articleData[0].coverSrc}
          alt="بنر"
          fill
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
        <div className="position-absolute w-100 color_white z-2 d-flex justify-content-between info-container px-2 px-lg-4 ">
          <p className=" z-2 fs_18 anjoman_regular m-0">
              {articleData[0].title}
          </p>
          <div className=" align-items-center d-none d-md-flex" >
            <SlClock style={{ fontSize: "16px" }} />
            <p className="m-0 anjoman_num_regular fs_12 pe-2 text-nowrap"> {convertToShamsi(articleData[0].updatedAt).shamsiDate} </p>
          </div>
        </div>
      </Link>
      <div className="left d-flex flex-column">
        <Link href={`/blog/each/${articleData[1]._id}`} className="top">
          <div className="layout"></div>
          <Image
            src={articleData[1].coverSrc}
            alt="بنر"
            fill
            style={{ objectFit: "cover", borderRadius: "6px" }}
          />
          <div className="position-absolute w-100 color_white z-2 d-flex justify-content-between info-container px-2 px-lg-4 ">
            <p className=" z-2 fs_18 anjoman_regular m-0">
              {articleData[1].title}
            </p>
            <div className="d-none d-md-flex align-items-center text-nowrap d-none">
              <SlClock style={{ fontSize: "16px" }} />
              <p className="m-0 anjoman_num_regular fs_12 pe-2">
                {convertToShamsi(articleData[1].updatedAt).shamsiDate}
              </p>
            </div>
          </div>
        </Link>
        <Link href={`/blog/each/${articleData[2]._id}`} className="bottom">
          <div className="layout"></div>
          <Image
            src={articleData[2].coverSrc}
            alt="بنر"
            fill
            style={{ objectFit: "cover", borderRadius: "6px" }}
          />
          <div className="position-absolute w-100 color_white z-2 d-flex justify-content-between info-container px-2 px-lg-4 ">
            <p className=" z-2 fs_18 anjoman_regular m-0">
              {articleData[2].title} 
            </p>
            <div className="d-flex align-items-center text-nowrap d-none d-md-flex ">
              <SlClock style={{ fontSize: "16px" }} />
              <p className="m-0 anjoman_num_regular fs_12 pe-2">
                {convertToShamsi(articleData[2].updatedAt).shamsiDate}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
