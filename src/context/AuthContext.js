"use client";
import { createContext, useState, useEffect } from "react";
import baseUrl from "@/utils/baseUrl";
import getNewAccessToken from "./../utils/fetchNewAccessToken";
import fetchLogout from "@/utils/auth/fetchLogout";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);

  // ✅ تابع checkAuth بیرون useEffect تعریف شده
  const checkAuth = async (retryCount = 0) => {
    const maxRetries = 2;
    console.log("تابع checkAuth اجرا شد");
    try {
      const res = await fetch(`${baseUrl}auth/me`, {
        method: "GET",
        credentials: "include",
      });

      const parseResponse = await res.json();

      if (res.status === 200) {
        console.log("پاسخ تابع checkAuth برابر 200 بود");

        const user = parseResponse.user;
        console.log("این هم یوزری که از تابع checkAuth اومده", user);

        setUser(user);
        setUserRole(user.role);
        setIsLogin(true);
        return user;
      } else if (res.status === 401 && parseResponse.expired === true && retryCount < maxRetries) {
        console.log("پاسخ checkauth منفی بود چون اکسس توکن اکسپایر شده");
        const isNewAccessTokenSet = await getNewAccessToken();
        if (isNewAccessTokenSet) {
          return await checkAuth(retryCount + 1); // 🔁 بازگشتی
        }
      } else {
        console.log("تابع چک آت اجرا شد و اصلا توکنی وجود نداشت");
        setUser(null);
        setUserRole(null);
        setIsLogin(false);
        return false;
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      setUser(null);
      setUserRole(null);
      setIsLogin(false);
      
      return false;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
  const login = (user) => {
    setUser(user);
    setUserRole(user.role);
    setIsLogin(true);
  };
  const logout = async () => {
    const result = await fetchLogout();
    if (result) {
      setUser(null);
      setUserRole(null);
      setIsLogin(false);
      return true;
    } else {
      return false;
    }
  };
  // ✅ افزودن checkAuth به مقدار context
  const value = {
    isLogin,
    setIsLogin,
    userRole,
    setUserRole,
    user,
    setUser,
    checkAuth,
    login,
    logout, // 👈 اضافه شده
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
