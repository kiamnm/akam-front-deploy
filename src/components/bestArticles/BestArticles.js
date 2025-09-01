import React from 'react'
import ArticleRow from '../articleRow/ArticleRow'
import fetchBestArticles from '@/utils/articles/fetchBestArticles'

import ClientLayout from '../clientLayout/ClientLayout'

export default async function BestArticles() {
    const bestArticleTitle={title:"برترین مقالات آکام",href:"/blog",btnTitle:"وبلاگ"}
    const bestArticles=await fetchBestArticles()
  return (
    <ClientLayout>
        <ArticleRow articleData={bestArticles} titleData={bestArticleTitle}></ArticleRow>
    </ClientLayout>
        
   
  )
}
