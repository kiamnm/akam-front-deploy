// "use client";
// import { createContext, useState, useEffect } from "react";
// import baseUrl from "@/utils/baseUrl";
// import getNewAccessToken from "./../utils/fetchNewAccessToken";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [userRole, setUserRole] = useState(null);
//   const [user, setUser] = useState(null);
//   const value = { isLogin, setIsLogin, userRole, setUserRole, user, setUser };

//   useEffect(() => {
//     const checkAuth = async () => {
//       console.log("کاربر وارد سایت شده و رفتیم برای چک کردن لاگین بودنش");
//       try {
//         const res = await fetch(`${baseUrl}auth/me`, {
//           method: "GET",
//           credentials: "include", // مهم
//         });

//         const parseResponse = await res.json();

//         if (res.status === 200) {
//           console.log("کاربر اکسس توکن معتبر داره و لاگینش اوکی شده");
//           const userInfo = parseResponse.user;
//           console.log(userInfo);
//           setUser(userInfo);
//           setUserRole(userInfo.role);
//           setIsLogin(true);
//         } else if (res.status === 401 && parseResponse.expired === true) {
//           console.log("کاربر اکسس توکن داره ولی اعتبار نداره");
//           const isNewAccessTokenSet = await getNewAccessToken();
//           if (isNewAccessTokenSet) {
//             await checkAuth();
//           }
//         } else {
//           console.log("کاربر اصلا اکسس توکن نداره");
//           setUser(null);
//           setUserRole(null);
//           setIsLogin(false);
//         }
//       } catch (err) {
//         console.error("Auth check failed:", err);
//         setIsLogin(false);
//       }
//     };

//     checkAuth();
//   }, []);
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };





"use client";
import { createContext, useState, useEffect } from "react";
import baseUrl from "@/utils/baseUrl";
import getNewAccessToken from "./../utils/fetchNewAccessToken";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);

  // ✅ تابع checkAuth بیرون useEffect تعریف شده
  const checkAuth = async () => {
    
    try {
      const res = await fetch(`${baseUrl}auth/me`, {
        method: "GET",
        credentials: "include",
      });

      const parseResponse = await res.json();

      if (res.status === 200) {
        
        const userInfo = parseResponse.user;
        console.log(userInfo);
        setUser(userInfo);
        setUserRole(userInfo.role);
        setIsLogin(true);
        return userInfo
      } else if (res.status === 401 && parseResponse.expired === true) {
       
        const isNewAccessTokenSet = await getNewAccessToken();
        if (isNewAccessTokenSet) {
          await checkAuth(); // 🔁 بازگشتی
        }
      } else {
        
        setUser(null);
        setUserRole(null);
        setIsLogin(false);
        return false
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      setIsLogin(false);
      return false
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // ✅ افزودن checkAuth به مقدار context
  const value = {
    isLogin,
    setIsLogin,
    userRole,
    setUserRole,
    user,
    setUser,
    checkAuth, // 👈 اضافه شده
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

