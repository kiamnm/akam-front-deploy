"use client"
import React,{useState,useEffect,useContext} from "react";
import "./style.css";
import Item from "./item/Item";
import { AuthContext } from "@/context/AuthContext";


export default function Comments({articleObjId,commentsData}) {
 const {user,checkAuth}=useContext(AuthContext)
 useEffect(()=>{
checkAuth()
 },[])
    
  return (
    
      <div className="comments-list-container ">
        {commentsData && commentsData.map((item,index)=>{
            return  <Item user={user} item={item} articleObjId={articleObjId} key={index} ></Item>
        })}
       
      </div>
   
  );
}
