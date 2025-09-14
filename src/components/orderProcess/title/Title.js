import React from "react";
import "./style.css";
import getOrderPhaseUi from "@/utils/userpanel/getOrderPhaseUi";

export default function Title({status,canCansel,step,stepName,orderIdentification}) {
  const phase = getOrderPhaseUi("1");
  return (
    <div className="header-container">
      <div className="row align-items-center">
        <div className="col-6 col-md-4 text-end order-1 d-flex flex-column gap-2">
          <p className="fs_14 anjoman_medium m-0 d-none d-md-block">وضعیت فعلی</p>
          <div className={`fs_10 anjoman_medium  d-flex`}>
            <div className={`py-1 rounded-2 gap-1 d-flex align-items-center  ${phase.className} pe-1`}>
              {phase.icon}
              <div className="w-100 px-1 d-flex align-item-center beg">{phase.text}</div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 text-center order-3 order-md-2 d-flex flex-column gap-1">
          <p className="m-0 fs_14 anjoman_num_light">مرحله {step} از 7</p>
          <p className="m-0 fs_16 anjoman_num_medium">مرحله  {stepName}</p>
          <p className="m-0 fs_12 anjoman_num_light">A15S155115</p>
        </div>

        <div className="col-6 col-md-4 text-start order-2 order-md-3 d-flex justify-content-end">
          <div className="cansle-button fs_12 anjoman_medium px-3 py-1 rounded-1 cursor_pointer">لغو سفارش</div>

        </div>
      </div>
    </div>
  );
}
