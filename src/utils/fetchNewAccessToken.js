import baseUrl from "./baseUrl"
const getNewAccessToken=async()=>{
    console.log("حالا که کاربر توکنش منقضی شده اومدیم برای ارسال رفرش توکن");
    try{
        const res = await fetch(`${baseUrl}auth/refreshToken`, {
          method: "POST",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"دریافت اکسس توکن مجدد");
        console.log(parseResponse,"دریافت اکسس توکن مجدد");
        if(res.status===200){
            console.log("رفرش توکن درسته و اکسس توکن جدید دریافت شد");
            return true
        }else{
            console.log("رفرش توکن هم منقضی شده است");
            return false
        }
    }catch(err){
        console.error("Auth check failed:", err);
        return false
    }
}

export default getNewAccessToken