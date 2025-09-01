import baseUrl from "../baseUrl";

const fetchHeaderArticles=async()=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}article/header`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            console.log("مقالات ارسال شدند");
           
            return parseResponse.headerArticles
        }else{
            console.log("مقالات ارسال نشدند");
            return false
        }
    }catch(err){
        console.error("article err", err.message);
        return false
    }
}

export default fetchHeaderArticles