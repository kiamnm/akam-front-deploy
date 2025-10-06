import React from "react";
import "./style.css";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import HomeChart from "@/components/homeChart/HomeChart";
import ProductPriceHistory from "@/components/productPriceHistory/ProductPriceHistory";
import { IoMdAdd } from "react-icons/io";
import fetchEachProduct from "@/utils/products/fetchEachProduct";
import fetchProductDescription from "@/utils/products/fetchProductDescription";
import AddToBasketBtn from "@/components/addToBasketBtn/AddToBasketBtn";

export default async function Page(props) {
  
  const objId=await props.params.id

  
  const product=await fetchEachProduct(objId)
  const description=await fetchProductDescription(objId)

  if(!product){
    ///redirect to error page
  }
  const breadCrumbsData = [
    { title: "آهن آکام", href: "/" },
    { title: "محصولات", href: "/product/list/ورق" },
    { title: "ورق", href: "/product/list/ورق گالوانیزه" },
    { title: (product.eachProductName), href: "/product/each/objid" },
  ];
    return (
    <div className="each-product-page-container">
      <ClientLayout>
        <div className=" mt-3 ">
          <div className="header-container d-flex flex-column flex-md-row gap-0 gap-xl-4 gap-md-3 ">
            <div className="d-block d-md-none">
              <BreadCrumbs breadCrumbsData={breadCrumbsData}></BreadCrumbs>
              <h1 className="fs_20 anjoman_bold p-0 m-0 mb-3 ">
               {product.eachProductName}
              </h1>
            </div>
            <div className="img-container">
              <img src={product.imgSrc} alt="ورق 16 ذوب آهن اصفهان" />
            </div>
            <div className="descript-container d-flex flex-column">
              <div className="d-none d-md-block">
                <BreadCrumbs breadCrumbsData={breadCrumbsData}></BreadCrumbs>
                <h1 className="fs_20 anjoman_bold p-0 m-0 my-2">
                 {product.eachProductName}
                </h1>
              </div>

              <div className="w-100 mt-3 mt-md-2 mb-2 mb-md-3 ">
                <table className="table table-responsive table-bordered text-center align-middle table-rounded ">
                  <thead className="table-light">
                    {/* بخش 1: مشخصات محصول */}
                    <tr>
                      <th
                        colSpan="8"
                        className="text-center  text-white fs_14 anjoman_medium mega-title"
                      >
                         محصول
                      </th>
                    </tr>
                    <tr className="fs_14 anjoman_regular">
                      <th className="align-cell" > عنوان</th>
                      <th className="align-cell">حالت</th>
                      <th className="align-cell">سایز</th>
                      <th className="align-cell">طول شاخه</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="fs_14 anjoman_light">
                      <td>{product.majorCategory}</td>
                      <td>{product.minorCategory}</td>
                      <td className="anjoman_num_regular">{product.dimention} </td>
                      <td className="anjoman_num_regular">{product.length} </td>
                    </tr>

                    {/* بخش 2: ویژگی‌ها */}
                    <tr>
                      <th
                        colSpan="8"
                        className="text-center bg-secondary text-white fs_14 anjoman_medium mega-title"
                      >
                        ویژگی‌ها
                      </th>
                    </tr>
                    <tr className="fs_14 anjoman_regular table-light">
                      <th className="align-cell">وزن هر شاخه</th>
                      <th className="align-cell">کارخانه</th>
                      <th className="align-cell">استاندارد</th>
                      <th  className="price align-cell">قیمت</th>
                    </tr>
                    <tr className="fs_14 anjoman_light align-cell">
                      <td className="align-cell anjoman_num_regular">{product.unitWeight}</td>
                      <td className="anjoman_num_regular">{product.factory}</td>
                      <td className="align-cell anjoman_num_regular">{product.standard} </td>
                      <td className="anjoman_num_regular align-cell">{Number(product.price).toLocaleString()} تومان</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <AddToBasketBtn product={product} productName={product.eachProductName} productId={objId}></AddToBasketBtn>
            </div>
          </div>
        </div>
      </ClientLayout>

      <div className="mt-4 mt-md-5">
        <ClientLayout>
          <h2 className="fs_18 anjoman_bold mb-3 mb-md-4">
            نمودار قیمت {product.eachProductName}{" "}
          </h2>
        </ClientLayout>
        <HomeChart></HomeChart>
      </div>

      <div className="mt-4 mt-md-5">
        <ClientLayout>
          <h2 className="fs_18 anjoman_bold mb-3 mb-md-4">تاریخچه قیمت</h2>
          <ProductPriceHistory productId={objId}></ProductPriceHistory>
        </ClientLayout>
      </div>

      <div className="mt-4 mt-md-5 ">
        <ClientLayout>
          {description &&(
            <div className="expelenation-box bg_color_white px-3 py-4" >
              <h2 className="fs_18 anjoman_bold mb-3">درباره&nbsp;{product.majorCategory}&nbsp;{product.minorCategory}&nbsp;{product.factory}</h2>
              <div dangerouslySetInnerHTML={{ __html: description }}>

              </div>
            
            <h3 className="anjoman_semibold fs_12">مشخصات مهندسی محصول</h3>
            <p className="anjoman_regular fs_12 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازمی ایجاد کرد، در این صورت می توان امید
              داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
              پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
              جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد.
            </p>
            <h3 className="anjoman_semibold fs_12">مشخصات مهندسی محصول</h3>
            <p className="anjoman_regular fs_12  ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چا سوالات
              پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          ) }
          
        </ClientLayout>
      </div>
    </div>
  );
}




