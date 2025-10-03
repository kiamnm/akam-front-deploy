
import baseUrl from "../baseUrl";

const fetchRegisterNews=async(phone)=>{
  
  

       
         const body=JSON.stringify({phone})
       
  
    try{
        
        const res = await fetch(`${baseUrl}news/register`, {
          method: "POST",
          body,
          credentials: "include",
           headers: {
        "Content-type": "application/json",
      }, // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"resaaaaaaaaaaaaan");
        
        console.log(parseResponse,"parseresponse");
        if(res.status===201){
            
          
            return true
        }else if (res.status===409){
            return 409
        }else{
  return false
        }
          
        
    }catch(err){
        
        return false
    }
}

export default fetchRegisterNews