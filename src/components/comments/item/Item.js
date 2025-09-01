"use client"
import React,{useState,useEffect} from "react";
import "./style.css";
import { FiUser } from "react-icons/fi";
import { VscReply } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { GoReply } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { getTimeAgo } from "@/utils/getTimeAgo";
import CommentForm from "@/components/commentForm/CommentForm";
import fetchLikeCm from "@/utils/comments/fetchLikeCm";
import { FaHeart } from "react-icons/fa6";


export default function Item({ articleObjId,item,user }) {
  // const [isAnswerBoxOpen,setIsAnswerBoxOpen]=useState(false)
  // const [cmObjId,setCmObjId]=useState("123456789")
  const [isLiked,setIsLiked]=useState(false)
  const [likeCount,setLikeCount]=useState(item.likes)
  useEffect(()=>{
    console.log("from cmm page",user);
    if(user){
      const isLikedBefor=user.likedCm.includes(item._id)
      setIsLiked(isLikedBefor)
      
    }
  },[user])


  const handleLike=async()=>{
    if(user){
      const result=await fetchLikeCm(item._id)
      if(result){
        setIsLiked(true)
        setLikeCount((prev)=>{
        return (prev+1)
      })
      }
    }
    
  }
  return (
    <div className="mb-4">


      <div className="comment-container px-3 py-3  d-flex flex-column flex-md-row justify-content-between align-items-center gap-0 gap-md-4">
      <div className="d-flex align-items-center gap-3 gap-md-5 align-self-start ">
         <div className="author-detail d-flex align-items-center gap-2">
        <span className="user-icon d-inline-flex justify-content-center align-items-center">
          <FiUser style={{ fontSize: "20px" }} />
        </span>
        <div className="d-flex flex-column justify-content-between text-nowrap">
          <p>{item.author.name}</p>
          <p className="fs_12 anjoman_num_regular  ">{getTimeAgo(item.createdAt)}</p>
        </div>
      </div>
      <div className="comment-text">
        <p className="fs_14 anjoman_regular m-0 comment-text">{item.text}</p>
      </div>
      </div>
     
      <div className="actions d-flex align-items-center gap-2 align-self-end align-self-md-center">
        {/* <span className="p-0 m-0 d-flex align-items-center">
          <GoReply onClick={()=>setIsAnswerBoxOpen(prev=>!prev)} style={{ fontSize: "20px",cursor:"pointer" }} />
        </span> */}
        <span onClick={handleLike} className="d-flex align-items-center gap-2 p-0 m-0">
          <FaHeart style={{ fontSize: "20px",cursor:"pointer",color:(isLiked?"red":"gray") }} />
          <p className="p-0 m-0 anjoman_num_regular fs_12">{likeCount}</p>
        </span>
      </div>
      
    </div>
    {/* <div className={`${isAnswerBoxOpen?"d-block":"d-none"} mt-5`}>
      <CommentForm articleObjId={articleObjId} cmObjId={item._id} setIsAnswerBoxOpen={setIsAnswerBoxOpen} author={item.author.name}></CommentForm>
    </div> */}
    
    </div>
    
  );
}
