import baseUrl from "../baseUrl";

const fetchBestArticles=async()=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}article/best`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            console.log("مقالات ارسال شدند");
           
            return parseResponse.bestArticles
        }else{
            console.log("مقالات ارسال نشدند");
            return false
        }
    }catch(err){
        console.error("article err", err.message);
        return false
    }
}

export default fetchBestArticles