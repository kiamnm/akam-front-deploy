import React from "react";
import "./style.css";
import Link from "next/link";

export default function BreadCrumbs({ breadCrumbsData }) {
  return (
    <div className="bread-crumb d-flex py-1 py-md-2">
      {breadCrumbsData.map((item, index) => {
        return (
          <div className="d-flex" key={index}>
            <Link
              className={`fs_12 anjoman_regular text-decoration-none ${
                index + 1 == breadCrumbsData.length
                  ? "color_orange"
                  : "color_black"
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
            {index + 1 < breadCrumbsData.length && <p className="px-2 p-0 m-0">/</p>}
          </div>
        );
      })}
    </div>
  );
}
