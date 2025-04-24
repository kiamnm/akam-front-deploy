
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function RootLayout({ children }) {
  return (
    <html lang="en " dir="rtl">
      <body >
        {children}
      </body>
    </html>
  );
}
