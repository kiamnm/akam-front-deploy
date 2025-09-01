import baseUrl from "../baseUrl";
import akmDictionary from "../akamDictionary";
const fetchSpecialCategoryProduct=async(majorCategoryPersian,
    minorCategoryPersian)=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}product/specialCategoryProduct?majorCategory=${majorCategoryPersian}&minorCategory=${minorCategoryPersian}`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            console.log("محصولات ارسال شدند");
           
            return parseResponse.allProducts
        }else{
            console.log("محصولات ارسال نشدند");
            return false
        }
    }catch(err){
        console.error("product err", err.message);
        return false
    }
}

export default fetchSpecialCategoryProduct