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

const bestArticleTitle = {
  title: "برترین مقالات آکام",
  href: "/blog",
  btnTitle: "وبلاگ"
};

// ✅ متاتگ‌ها برای صفحه اصلی
export const metadata = {
  title: "قیمت روز مقاطع فولادی | آکام استیل",
  description:
    "قیمت روز میلگرد، تیرآهن، ورق و دیگر مقاطع فولادی از کارخانه‌های معتبر ایران. مشاهده لیست قیمت، ثبت سفارش آنلاین و دریافت مشاوره تخصصی در آکام استیل.",
  keywords: [
    "قیمت میلگرد",
    "قیمت تیرآهن",
    "قیمت ورق فولادی",
    "خرید میلگرد",
    "خرید فولاد",
  ],
  openGraph: {
    title: "قیمت روز مقاطع فولادی | آکام استیل",
    description:
      "خرید میلگرد، تیرآهن و ورق فولادی با بهترین قیمت و پشتیبانی آنلاین.",
    url: "https://example.com/",
    siteName: "آکام استیل",
    images: [
      {
        url: "https://example.com/images/home-banner.jpg",
        width: 1200,
        height: 630,
        alt: "قیمت روز مقاطع فولادی",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "قیمت روز مقاطع فولادی | آکام استیل",
    description:
      "لیست قیمت روز میلگرد، تیرآهن و ورق فولادی از کارخانه‌های معتبر.",
    images: ["https://example.com/images/home-banner.jpg"],
  },
  alternates: {
    canonical: "https://example.com/",
  },
};

export default async function Page() {
  const bestArticles = await fetchBestArticles();
  return (
    <div className="bg_color_body w-100 home-page-container">

      <DesktopMenu />
      <MobileMenu />

      <div className="home-header-banner  home-header-space">
        <HomeHeaderBanner />
      </div>

      <div className="product-gallery-space">
        <ProductGallery2 />
        {/* <ProductGallery /> */}
      </div>

      <div className="home-table-space">
        <HomeTableWrapper />
      </div>

      <div className="estelam-form-space">
        <EstelamForm />
      </div>

      <div className="proccess-space">
        <Proccess />
      </div>

      <div className="homebanner-space">
        <HomeBanner />
      </div>

      {/* <div className="chart-space">
        <HomeChart />
      </div> */}

      <div className="new-costumer-space">
        <ClientLayout>
          <div className="d-flex justify-content-between flex-column flex-lg-row costumers-news-container">
            <OurTrust />
            <News />
          </div>
        </ClientLayout>
      </div>

      <div className="best-article-space">
        <BestArticles />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
