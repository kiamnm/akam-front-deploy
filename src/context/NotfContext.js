"use client"
import React,{createContext,useEffect,useState} from 'react'


export const NotifContext=createContext()

export const NotifProvider=({children})=>{

const [notifs,setNotifs]=useState([])
const value={notifs,setNotifs}
useEffect(()=>{
    setNotifs([
        {title:"پیشرفت در روند خرید",text:"سفارش شما با موضوع هرید آهن به مرحله 2 رسید.",date:'2025-05-28T11:18:34.933Z'}
    ])
},[])
    return(
            <NotifContext.Provider value={value}>
          {children}
        </NotifContext.Provider>
        )
}
