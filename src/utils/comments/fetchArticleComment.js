
import baseUrl from "../baseUrl";

const fetchArticleComment=async(articleObjId)=>{
    try{
        
        const res = await fetch(`${baseUrl}comment/${articleObjId}`, {
          method: "GET",
          credentials: "include",
      
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            
           
            return parseResponse.comments
        }else{
            console.log("");
            return false
        }
    }catch(err){
        console.error("comment err", err.message);
        return false
    }
}

export default fetchArticleComment