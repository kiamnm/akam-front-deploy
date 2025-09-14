import React,{useContext} from 'react'
import { wizardProcessContext } from '@/context/userPanel/wizardProcess'
import "./style.css"

export default function OrderUploadExplenation() {
    const {order,uploadFormExplenation,setUploadFormExplenation}=useContext(wizardProcessContext)
  return (
    <div className='order-upload-explenation d-flex flex-column mt-3'>
        <label className=' fs_14 anjoman_regular mb-2' htmlFor="explenation">توضیحات</label>
       <textarea 
       onChange={(e)=>{setUploadFormExplenation(e.target.value)}}
       value={uploadFormExplenation}
    placeholder='توضیحات' className=' fs_14 rounded-1 p-2 anjoman_regular' name="" id="explenation" ></textarea>
    </div>
  )
}
