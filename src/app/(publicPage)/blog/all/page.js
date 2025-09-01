import React from 'react'
import "./style.css"
import ClientLayout from '@/components/clientLayout/ClientLayout'
import BreadCrumbs from '@/components/breadCrumbs/BreadCrumbs'
import Item from '@/components/articleRow/item/Item'
import fetchData from './fetchSample'
import ArticlePagination from '@/components/articlePagination/ArticlePagination'

export default async function All(props) {
  const breadCrumbsData = [
    { title: "آهن آکام", href: "/" },
    { title: "وبلاگ", href: "/blog" },
    { title: "آرشیو مقالات", href: "/blog/all" }
  ]

  // ✅ گرفتن مقدار صفحه به‌صورت ایمن
  const searchParams=await props.searchParams
 
  const page = parseInt(searchParams?.page ?? "1")
  const perPage = 10
  const totalCount = 90
  const totalPages = Math.ceil(totalCount / perPage)

  // در صورت نیاز، می‌تونی دیتا رو بر اساس page و perPage برش بزنی
  const articleData = fetchData().slice((page - 1) * perPage, page * perPage)

  return (
    <ClientLayout>
      <div className='all-blog-page-container'>
        <div className="title d-flex align-items-center pt-3 pb-2">
          <p className="fs_16 anjoman_bold p-0 m-0">آرشیو مقالات</p>
          <h1 className="fs_16 anjoman_bold p-0 m-0">آهن آکام</h1>
        </div>

        <BreadCrumbs breadCrumbsData={breadCrumbsData} />

        <div className='d-flex flex-wrap justify-content-start items-container'>
          {articleData.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </div>
<div className="mt-5">
  <ArticlePagination currentPage={page} totalPages={totalPages} />
</div>
        
      </div>
    </ClientLayout>
  )
}
