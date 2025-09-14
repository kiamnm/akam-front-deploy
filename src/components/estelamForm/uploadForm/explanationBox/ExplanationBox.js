import React,{useContext} from 'react'
import { FormContext } from '../../context/FormContext'
import "./style.css"


export default function ExplanationBox() {
    const {explenationError,explanation,setExplanation}=useContext(FormContext)
  return (
    <div className='explenation-box-container d-flex flex-column color_text'>
        <label className=' fs_14 anjoman_regular ' htmlFor="explenation">توضیحات</label>
       <textarea 
       
       value={explanation}
       onChange={(e)=>{setExplanation(e.target.value)}}
    placeholder='توضیحات' className=' fs_14 ' name="" id="explenation" ></textarea>
    <p className='color_orange fs_12 anjoman_light'>{explenationError}</p>
    </div>
  )
}
