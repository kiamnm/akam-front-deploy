import React from "react";
import "./style.css";
import { MdOutlineDone } from "react-icons/md";



export default function WizardStepper({phase}) {
  return (
    <div className="wizard-stepper-container d-flex align-items-center mt-2  ">
      <div className="line-container position-relative first line-active">

      </div>
      <div className={`circle-container position-relative d-flex justify-content-center align-items-center ${phase>1?"wizard-done":"wizard-active" } `}>
         <p className="m-0 anjoman_num_bold fs_24">
            {phase>1?<MdOutlineDone style={{color:"white",fontSize:"30px"}} />:1}
            
            </p>           
      </div>


      <div className={`line-container position-relative ${phase>1?"line-active":""}`}>

      </div>
      <div className={`circle-container position-relative d-flex justify-content-center align-items-center ${phase > 2 ? "wizard-done" : phase === 2 ? "wizard-active" : ""} `}>
         <p className="m-0 anjoman_num_bold fs_24">
            {phase>2?<MdOutlineDone style={{color:"white",fontSize:"30px"}} />:2}
            </p>           
      </div>



     <div className={`line-container position-relative ${phase>2?"line-active":""}`}>

      </div>
      <div className={`circle-container position-relative d-flex justify-content-center align-items-center ${phase > 3 ? "wizard-done" : phase === 3 ? "wizard-active" : ""} `}>
         <p className="m-0 anjoman_num_bold fs_24">
            {phase>3?<MdOutlineDone style={{color:"white",fontSize:"30px"}} />:3}
            </p>           
      </div>


      <div className={`line-container position-relative ${phase>3?"line-active":""}`}>

      </div>
      <div className={`circle-container position-relative d-flex justify-content-center align-items-center ${phase > 4 ? "wizard-done" : phase === 4 ? "wizard-active" : ""} `}>
         <p className="m-0 anjoman_num_bold fs_24">
            {phase>4?<MdOutlineDone style={{color:"white",fontSize:"30px"}} />:4}
            </p>           
      </div>



      <div className={`line-container position-relative ${phase>4?"line-active":""}`}>

      </div>
      <div className={`circle-container position-relative d-flex justify-content-center align-items-center ${phase > 5 ? "wizard-done" : phase === 5 ? "wizard-active" : ""} `}>
         <p className="m-0 anjoman_num_bold fs_24">
            {phase>5?<MdOutlineDone style={{color:"white",fontSize:"30px"}} />:5}
            </p>           
      </div>



      <div className={`line-container position-relative ${phase>5?"line-active":""}`}>

      </div>
      <div className={`circle-container position-relative d-flex justify-content-center align-items-center ${phase > 6 ? "wizard-done" : phase === 6 ? "wizard-active" : ""} `}>
         <p className="m-0 anjoman_num_bold fs_24">
        {phase>6?<MdOutlineDone style={{color:"white",fontSize:"30px"}} />:6}    
        </p>           
      </div>


      <div className={`line-container position-relative ${phase>6?"line-active":""}`}>

      </div>
      <div className={`circle-container position-relative d-flex justify-content-center align-items-center ${phase===7 ?"wizard-done":""} `}>
         <p className="m-0 anjoman_num_bold fs_24">
            {phase===7?<MdOutlineDone style={{color:"white",fontSize:"30px"}} />:7}
            </p>           
      </div>
      <div className={`line-container position-relative last ${phase===7?"line-active":""}`}>

      </div>
    </div>
  );
}
