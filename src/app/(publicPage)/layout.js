import DesktopMenu from "@/components/desktopMenu/DesktopMenu";

import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Footer from "@/components/footer/Footer";
// import "./style.css"


export default function RootLayout({ children }) {
  return (
        <div className="bg_color_body w-100 client-wrapper-layout  d-flex flex-column">
            <DesktopMenu></DesktopMenu>
            <MobileMenu></MobileMenu>
          
              {children}
           
            
            <div className="">
              <div className="py-5  w-100 ">
            <Footer></Footer>
            </div>
            
            
            
            </div>
        </div>
      
  );
}
