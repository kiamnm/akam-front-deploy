import React from "react";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import BlogHeader from "@/components/blogHeader/BlogHeader";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import ArticleRow from "@/components/articleRow/ArticleRow";
import fetchHeaderArticles from "@/utils/articles/fetchHeaderArticles";
import fetchBestArticles from "@/utils/articles/fetchBestArticles";
import fetchNewestArticles from "@/utils/articles/fetchNewestArticles";



const breadCrumbsData=[
    {title:"آهن آکام",href:"/"},
    {title:"وبلاگ",href:"/blog"}
]

    const bestArticleTitle={title:"برترین مقالات آکام"}
    const newestArticleTitle={title:"جدیدترین مقالات آکام"}
export default async function Page() {
  const bestArticles=await fetchBestArticles()
  const headerArticles=await fetchHeaderArticles()
  const newestArticles=await fetchNewestArticles()
  if(!headerArticles){
    ////redirect be safe not found
  }
  
  return (
    <ClientLayout>
      <div className="blog-page-container">
        <div className="title d-flex align-items-center pt-3 pb-2">
          <p className="fs_16 anjoman_bold p-0 m-0">وبلاگ</p>
          <h1 className="fs_16 anjoman_bold p-0 m-0">آهن آکام</h1>
        </div>
        <BreadCrumbs breadCrumbsData={breadCrumbsData}></BreadCrumbs>
        {headerArticles && (
          <BlogHeader articleData={headerArticles} ></BlogHeader>
        )}
        
        {bestArticles && (
          <div className="pt-4">
          <ArticleRow articleData={bestArticles} titleData={bestArticleTitle}></ArticleRow>
        </div>
        )}
        {newestArticles && (
          <div className="pt-4">
          <ArticleRow articleData={newestArticles} titleData={newestArticleTitle}></ArticleRow>
        </div>
        ) }
         
        
        
      </div>
    </ClientLayout>
  );
}
