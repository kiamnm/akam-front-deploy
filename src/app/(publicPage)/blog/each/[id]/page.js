import React from "react";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import { LuUserRound } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import ArticleSidebar from "@/components/articleSidebar/ArticleSidebar";
import ArticleRow from "@/components/articleRow/ArticleRow";
import CommentForm from "@/components/commentForm/CommentForm";
import Comments from "@/components/comments/Comments";
import fetchEachArticle from "@/utils/articles/fetchEachArtile";
import fetchRelatedArticles from "@/utils/articles/fetchRelatedArticles";
import fetchNewestArticles from "@/utils/articles/fetchNewestArticles";
import convertToShamsi from "@/utils/convertToShamsi";
import fetchArticleComment from "@/utils/comments/fetchArticleComment";
import { FaRegUser } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


import "./style.css";
const relatedArticleTitle={title:"مقالات مرتبط"}
export default async function page(props) {
  const {id}=await props.params
  const article=await fetchEachArticle(id)
  console.log(article);
  const relatedArticle=await fetchRelatedArticles(id)
  const newestArticle=await fetchNewestArticles()
  const comments=await fetchArticleComment(id)
  if(!article){
    ///redirect to 404 page
  }
  const breadCrumbsData = [
    { title: "آهن آکام", href: "/" },
    { title: "وبلاگ", href: "/blog" },
    { title: `${article.title}`, href: `/blog/each/${id}` },
  ];
  
  return (
    <div className="each-article-page-container">
      <ClientLayout>
        <div className="title pt-3">
          <BreadCrumbs breadCrumbsData={breadCrumbsData} />
          {/* <h1 className="fs_22 anjoman_bold"> {article.title}</h1>
          <img src="/images/test-banner-1.jpg" alt="" /> */}
        </div>
        
       
        <div className="article-sidebar-container d-flex gap-4 ">
          {/* <div className="artcile-container " dangerouslySetInnerHTML={{ __html: article.body }}> */}
            <div className="artcile-container " >
           <img src="/images/test-banner-1.jpg" alt="" className="title" />
           <h1 className="fs_24 anjoman_bold mt-3 lh_40">آیا تنش های اخیر خاورمیانه باعث افزایش قیمت آهن میشود؟</h1>


<div className="article-info d-flex gap-0 gap-md-5 justify-content-between justify-content-md-start  pb-2 pb-md-3 mt-2">
          <div className="author d-flex align-items-center gap-1 gap-md-2">
            <span className="author-icon d-flex align-items-center">
              <FaUser  style={{ fontSize: "18px" }} />
              
            </span>
            <p className="p-0 m-0 anjoman_medium color_text fs_14">مدیر وبسایت</p>
          </div>

          <div className="time-container d-flex align-items-center gap-1 gap-md-2 ">
            <span className="m-0 p-0  d-flex align-items-center">
              <GoClockFill style={{ fontSize: "18px" }} />
            </span>
            <p className="p-0 m-0 anjoman_num_medium color_text fs_14 ">
              {/* {convertToShamsi(article.updatedAt).shamsiDate} */}
              7 دقیقه مطالعه
              </p>
          </div>



          <div className="time-container d-flex align-items-center gap-1 gap-md-2 ">
            <span className="m-0 p-0  d-flex align-items-center  ">
              <FaCalendarAlt style={{ fontSize: "18px" }} />
              
            </span>
            <p className="p-0 m-0 anjoman_num_medium color_text  fs_14">
              {/* {convertToShamsi(article.updatedAt).shamsiDate} */}
              2 سال پیش
              </p>
          </div>
        </div>
<p className="m-0 anjoman_regular fs_14 article-paragraph color_text">به‌گزارش آهن آکام در هفته‌های اخیر، تحولات جهانی در صنعت فولاد با سیگنال‌هایی متفاوت از شرق آسیا، اروپا و آمریکا همراه بوده که هر یک به‌نوعی مسیر آینده بازار جهانی فولاد و آهن‌آلات را تحت تأثیر قرار داده‌اند. از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه جدیدی برای بازیگران این صنعت کلیدی است.</p>
<h2 className="fs_20 anjoman_ultrabold mt-2  lh_40">
  رونق چشمگیر فولاد چین؛ بازیابی پس از رکود سنگین
</h2>
<p className="m-0 anjoman_regular fs_14 article-paragraph color_text">به‌گزارش آهن آکام در هفته‌های اخیر، تحولات جهانی در صنعت فولاد با سیگنال‌هایی متفاوت از شرق آسیا، اروپا و آمریکا همراه بوده که هر یک به‌نوعی مسیر آینده بازار جهانی فولاد و آهن‌آلات را تحت تأثیر قرار داده‌اند. از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه جدیدی برای بازیگران این صنعت کلیدی است.</p>
<p className="m-0 anjoman_regular fs_14 article-paragraph color_text">به‌گزارش آهن آکام در هفته‌های اخیر، تحولات جهانی در صنعت فولاد با سیگنال‌هایی متفاوت از شرق آسیا، اروپا و آمریکا همراه بوده که هر یک به‌نوعی مسیر آینده بازار جهانی فولاد و آهن‌آلات را تحت تأثیر قرار داده‌اند. از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه ج از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه ج از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه ج جدیدی برای بازیگران این صنعت کلیدی است.</p>
<img src="/images/test-banner-1.jpg" alt="" className="title mt-4" />
<h2 className="fs_20 anjoman_ultrabold mt-4 lh_40">
  رونق چشمگیر فولاد چین؛ بازیابی پس از رکود سنگین
</h2>
<p className="m-0 anjoman_regular fs_14 article-paragraph color_text">به‌گزارش آهن آکام در هفته‌های اخیر، تحولات جهانی در صنعت فولاد با سیگنال‌هایی متفاوت از شرق آسیا، اروپا و آمریکا همراه بوده که هر یک به‌نوعی مسیر آینده بازار جهانی فولاد و آهن‌آلات را تحت تأثیر قرار داده‌اند. از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه ج از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه ج از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه ج جدیدی برای بازیگران این صنعت کلیدی است.</p>
<p className="m-0 anjoman_regular fs_14 article-paragraph color_text">به‌گزارش آهن آکام در هفته‌های اخیر، تحولات جهانی در صنعت فولاد با سیگنال‌هایی متفاوت از شرق آسیا، اروپا و آمریکا همراه بوده که هر یک به‌نوعی مسیر آینده بازار جهانی فولاد و آهن‌آلات را تحت تأثیر قرار داده‌اند. از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه جدیدی برای بازیگران این صنعت کلیدی است.</p>
<p className="m-0 anjoman_regular fs_14 article-paragraph color_text">به‌گزارش آهن آکام در هفته‌های اخیر، تحولات جهانی در صنعت فولاد با سیگنال‌هایی متفاوت از شرق آسیا، اروپا و آمریکا همراه بوده که هر یک به‌نوعی مسیر آینده بازار جهانی فولاد و آهن‌آلات را تحت تأثیر قرار داده‌اند. از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه جدیدی برای بازیگران این صنعت کلیدی است.</p>
<h2 className="fs_20 anjoman_ultrabold mt-2 lh_40">
  رونق چشمگیر فولاد چین؛ بازیابی پس از رکود سنگین
</h2>
<p className="m-0 anjoman_regular fs_14 article-paragraph last color_text">به‌گزارش آهن آکام در هفته‌های اخیر، تحولات جهانی در صنعت فولاد با سیگنال‌هایی متفاوت از شرق آسیا، اروپا و آمریکا همراه بوده که هر یک به‌نوعی مسیر آینده بازار جهانی فولاد و آهن‌آلات را تحت تأثیر قرار داده‌اند. از کاهش سود صنایع معدنی چین تا بازنگری اروپا در مناسبات تجاری با آمریکا، و از افزایش قیمت محصولات طویل در چین تا تدوین استراتژی سبز بریتانیا، زنجیره‌ای از اخبار و تصمیمات در حال ترسیم نقشه جدیدی برای بازیگران این صنعت کلیدی است.</p>

          </div>
          {newestArticle && (
            <div className="sidebar-container d-none d-md-block bg_color_white px-3 ">
            <ArticleSidebar data={newestArticle}></ArticleSidebar>
          </div>
          )}
          
        </div>
        {relatedArticle && (
          <div className="mt-4 mt-md-5">
          <ArticleRow
            articleData={relatedArticle}
            titleData={relatedArticleTitle}
          ></ArticleRow>
        </div>
        )}
        
        <div className="mt-4 mt-md-5">
         
            <CommentForm articleObjId={id}></CommentForm>
        
          
        </div>
{comments && <div className="mt-4 mt-md-5">
  {console.log("comentsy",comments)}
          <Comments commentsData={comments} articleObjId={id}></Comments>
        </div>}
        {(!comments || comments.length===0) && ""}
        
        
      </ClientLayout>
    </div>
  );
}
