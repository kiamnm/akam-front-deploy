import baseUrl from "../baseUrl";
import akmDictionary from "../akamDictionary";
const fetchProductDescription=async(objId)=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}product/prdouctDescription/${objId}`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            console.log("توضیحات محصول ارسال شد.");
           
            return parseResponse.description
        }else{
            console.log("توضیحات ارسال نشد");
            return false
        }
    }catch(err){
        console.error("product err", err.message);
        return false
    }
}

export default fetchProductDescription