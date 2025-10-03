import baseUrl from "../baseUrl";

const fetchBestArticles=async()=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}article/best`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
      
        if(res.status===200){
           
            return parseResponse.bestArticles
        }else{
            return false
        }
    }catch(err){
        console.error("article err", err.message);
        return false
    }
}

export default fetchBestArticles