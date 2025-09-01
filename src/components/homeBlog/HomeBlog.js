import React from 'react'
import "./style.css"
import ClientLayout from '../clientLayout/ClientLayout'
import Link from 'next/link'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ArticleRow from '../articleRow/ArticleRow';



export default function HomeBlog() {
    const articleData=[
        {title:"تاثیر نوسانات بازار آهن",time:"01 / 02 / 1403", href:"/test", imgSrc:"/images/blog-test.png",description:"با توجه به نوسنات اخیر میتوان انتظار داشت ...."},
        {title:"تاثیر نوسانات بازار آهن",time:"01 / 02 / 1403", href:"/test", imgSrc:"/images/blog-test.png",description:"با توجه به نوسنات اخیر میتوان انتظار داشت ...."},
        {title:"تاثیر نوسانات بازار آهن",time:"01 / 02 / 1403", href:"/test", imgSrc:"/images/blog-test.png",description:"با توجه به نوسنات اخیر میتوان انتظار داشت ...."},
        {title:"تاثیر نوسانات بازار آهن",time:"01 / 02 / 1403", href:"/test", imgSrc:"/images/blog-test.png",description:"با توجه به نوسنات اخیر میتوان انتظار داشت ...."},
        {title:"تاثیر نوسانات بازار آهن",time:"01 / 02 / 1403", href:"/test", imgSrc:"/images/blog-test.png",description:"با توجه به نوسنات اخیر میتوان انتظار داشت ...."},
        {title:"تاثیر نوسانات بازار آهن",time:"01 / 02 / 1403", href:"/test", imgSrc:"/images/blog-test.png",description:"با توجه به نوسنات اخیر میتوان انتظار داشت ...."},
    ]
    const titleData={title:"مقالات آکام گستر",btnTitle:"مشاهده بیشتر",href:"/blog"}
  return (
    <div className='w-100'>
        <ClientLayout>
            <ArticleRow articleData={articleData} titleData={titleData}></ArticleRow>
        </ClientLayout>
        
    </div>
  )
}
