import baseUrl from "../baseUrl";

const fetchHomeProducts=async()=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}product/homeProduct`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        
        
        if(res.status===200){
            console.log("");
           
            return parseResponse.data
        }else{
            console.log("محصول ارسال نشد");
            return false
        }
    }catch(err){
        console.error("!خطایی در دریافت محصول رخ داد!", err.message);
        return false
    }
}

export default fetchHomeProducts