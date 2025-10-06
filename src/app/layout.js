
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotifProvider } from "@/context/NotfContext";
export const metadata = {
  title: "آهن آکام",
  description: "بهترین قیمت آهن‌آلات در ایران",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en " dir="rtl">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <AuthProvider>
        <CartProvider>
          <NotifProvider>
          <body>
            
            {children}
            <ToastContainer  />
          </body>
          </NotifProvider>
        </CartProvider>
      </AuthProvider>
    </html>
  );
}
