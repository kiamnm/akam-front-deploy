import baseUrl from "../baseUrl";

const fetchEachProduct=async(objId)=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}product/getEachProductInfo/${objId}`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            console.log("");
           
            return parseResponse.product
        }else{
            console.log("محصول ارسال نشد");
            return false
        }
    }catch(err){
        console.error("!خطایی در دریافت محصول رخ داد!", err.message);
        return false
    }
}

export default fetchEachProduct