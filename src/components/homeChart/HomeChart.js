
import React from "react";
import "./style.css";
import ClientLayout from "../clientLayout/ClientLayout";
import Chart from "./chart/Chart";
import ChartWrapper from "./chart/ChartWrapper";



export default function HomeChart() {
 

  return (
    <div>
      <ClientLayout>
        <div className="home-chart-container text-center bg_color_white rounded-3">
        <ChartWrapper productId={"683453677e3ae18490998c14"} range={"week"} haveType={true}></ChartWrapper>
        
       
        </div>
      </ClientLayout>
    </div>
  );
}
