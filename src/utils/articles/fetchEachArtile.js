import baseUrl from "../baseUrl";

const fetchEachArticle=async(objId)=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}article/each/${objId}`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            
           
            return parseResponse.article
        }else{
            console.log("مقاله ارسال نشد");
            return false
        }
    }catch(err){
        console.error("!خطایی در دریافت مقاله رخ داد!", err.message);
        return false
    }
}

export default fetchEachArticle