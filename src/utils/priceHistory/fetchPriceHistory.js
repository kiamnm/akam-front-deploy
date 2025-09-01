
import baseUrl from "../baseUrl";

const fetchPriceHistory=async(productId,range,setPending)=>{
  
  setPending(true)

       
         
       
  
    try{
        
        const res = await fetch(`${baseUrl}priceHistory/${productId}?range=${range}`, {
          method: "GET",
          
          credentials: "include",
           headers: {
        "Content-type": "application/json",
      }, // مهم
        });
        const parseResponse=await res.json();
        setPending(false)
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            
         
            return parseResponse.prices
        }else{
            
            return false
        }
    }catch(err){
        setPending(false)
        return false
    }
}

export default fetchPriceHistory