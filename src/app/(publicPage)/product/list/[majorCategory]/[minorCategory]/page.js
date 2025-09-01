import React from "react";
import ClientLayout from "@/components/clientLayout/ClientLayout";
import { IoDocumentOutline } from "react-icons/io5";
import fetchSpecialCategoryProduct from "@/utils/products/fetchSpecialCategoryProduct";
import TableMenu from "@/components/tableMenu/TableMenu";
import ProductTableTitleInfo from "@/components/productTableTitleInfo/ProductTableTitleInfo";
import ProductTable from "@/components/productTable/ProductTable";
import createMenuItems from "@/utils/products/createMenuItems";
import akmDictionary from "@/utils/akamDictionary";
import "./style.css"


export default async function page(props) {
  
  let { majorCategory, minorCategory } = await props.params;
  let majorCategoryPersian=akmDictionary(majorCategory)
  let minorCategoryPersian=akmDictionary(minorCategory)

  const menuItems = createMenuItems(majorCategory);

  const productsGroup = await fetchSpecialCategoryProduct(
    majorCategoryPersian,
    minorCategoryPersian
  );

  if (!productsGroup) {
    return (
      <ClientLayout>
        <div className="empty-product-list-page-container d-flex flex-column "> 
          <div className="">
            <div className="title d-flex align-items-center gap-2 mt-3">
          <span className="d-flex align-items-center">
            <IoDocumentOutline style={{ fontSize: "22px" }} />
          </span>
          <h1 className="fs_16 anjoman_bold p-0 m-0">قیمت {majorCategoryPersian}</h1>
        </div>

        <div className="mt-3">
          <TableMenu
            majorCategory={majorCategory}
            minorCategory={minorCategory}
            data={menuItems}
            activeDefult={minorCategory}
          />
        </div>
          </div>
      
        <div className="text-center anjoman_bold fs_16  flex-grow-1 d-flex justify-content-center align-items-center ">
          محصولی یافت نشد
        </div>
       </div>
      </ClientLayout>
      
    )
  }

  return (
    <ClientLayout>
      <div  className="product-list-page-container">
        <div className="title d-flex align-items-center gap-2 mt-3">
          <span className="d-flex align-items-center">
            <IoDocumentOutline style={{ fontSize: "22px" }} />
          </span>
          <h1 className="fs_16 anjoman_bold p-0 m-0">قیمت {majorCategoryPersian}</h1>
        </div>

        <div className="mt-3">
          <TableMenu
            majorCategory={majorCategory}
            minorCategory={minorCategory}
            data={menuItems}
            activeDefult={minorCategory}
          />
        </div>

        <div className="mt-2">
          {productsGroup.map((item, index) => (
            <div className="mb-5" key={index}>
              {console.log(item.products,"biow miow")}
              <ProductTableTitleInfo
                majorCategory={majorCategoryPersian}
                minorCategory={minorCategoryPersian}
                factory={item.factory}
                time={item.lastUpdate}
                dataForExcell={item.products}
              />
              <div className="mt-3 test">
                {console.log("productssssssssss",item.products)}
                <ProductTable products={item.products} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ClientLayout>
  );
}
