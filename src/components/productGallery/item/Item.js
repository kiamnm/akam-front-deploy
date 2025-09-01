import React from "react";
import "./style.css";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import Image from "next/image";

export default function Item({ item }) {
  return (
    <div className="col-6 col-md-4 col-xl-3">
      <div className="item ">
        <div className="img-container p-0 m-0 bg-success">
          {/* <img className="bg-danger p-0 m-0" src={item.src} alt="" /> */}
          <Image
            src={item.src}
            alt={item.title || "image"}
            width={400} // یا هر عددی که می‌خوای
            height={200} // یا هر عددی که می‌خوای
            className="bg-danger p-0 m-0"
          />
        </div>
        <Link
          href={item.href}
          className="title-container d-flex justify-content-center align-items-center text-decoration-none color_white "
        >
          <p className="p-0  m-0 color_white fs_16 anjoman_regular">
            {item.title}
          </p>

          <div className="pe-2">
            <RiArrowLeftSLine style={{ fontSize: "24px" }} />
          </div>
        </Link>
      </div>
    </div>
  );
}
