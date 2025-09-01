import DesktopMenu from "@/components/desktopMenu/DesktopMenu";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import HomeHeaderBanner from "@/components/homeHeaderBanner/HomeHeaderBanner";
import ProductGallery from "@/components/productGallery/ProductGallery";
import EstelamForm from "@/components/estelamForm/EstelamForm";
// import HomeTable from "@/components/homeTable/HomeTable";
import Proccess from "@/components/proccess/Proccess";
import Footer from "@/components/footer/Footer";
import HomeBanner from "@/components/homeBanner/HomeBanner";
import HomeChart from "@/components/homeChart/HomeChart";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import OurTrust from "@/components/ourTrust/OurTrust";
import News from "@/components/news/News";
import HomeBlog from "@/components/homeBlog/HomeBlog";
import ProductGallery2 from "@/components/productGallery2/ProductGallery2";
import ArticleRow from "@/components/articleRow/ArticleRow";
import fetchBestArticles from "@/utils/articles/fetchBestArticles";
import HomeTableWrapper from "@/components/homeTable/HomeTableWrapper";
import BestArticles from "@/components/bestArticles/BestArticles";
import "./style.css"
const bestArticleTitle={title:"برترین مقالات آکام",href:"/blog",btnTitle:"وبلاگ"}
export default async function Home() {
  const bestArticles=await fetchBestArticles()
  return (
    <div className="bg_color_body w-100 home-page-container">

<DesktopMenu></DesktopMenu>
<MobileMenu></MobileMenu>

<div className="home-header-banner  home-header-space">
<HomeHeaderBanner></HomeHeaderBanner>
</div>
<div className="product-gallery-space" >
  <ProductGallery2></ProductGallery2>
{/* <ProductGallery></ProductGallery> */}
</div>
<div className="home-table-space">
<HomeTableWrapper></HomeTableWrapper>
</div>
<div className="estelam-form-space">
<EstelamForm></EstelamForm>
</div>
<div className="proccess-space">
<Proccess></Proccess>
</div>

<div className="homebanner-space">
<HomeBanner></HomeBanner>
</div>
{/* <div className="chart-space">
<HomeChart></HomeChart>
</div> */}

<div className="new-costumer-space">
  <ClientLayout>
<div className="d-flex justify-content-between flex-column flex-lg-row costumers-news-container">
<OurTrust></OurTrust>
<News></News>
</div>
</ClientLayout>
</div>


  

    <div className="best-article-space">
          <BestArticles></BestArticles>
        </div>
  
          
     
<div >
<Footer></Footer>
</div>

    </div>
  );
}
