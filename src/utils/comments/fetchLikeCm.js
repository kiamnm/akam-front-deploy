
import baseUrl from "../baseUrl";

const fetchLikeCm=async(cmObjId)=>{
  
  
       
         const body=JSON.stringify({cmObjId})
       
  
    try{
        
        const res = await fetch(`${baseUrl}comment/likeCm`, {
          method: "POST",
          body,
          credentials: "include",
           headers: {
        "Content-type": "application/json",
      }, // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===201){
            console.log("کامنت با موفقیت ثبت شد.");
           
            return true
        }else{
            console.log("کامنت ثبت نشد");
            return false
        }
    }catch(err){
        console.error("comment err", err.message);
        return false
    }
}

export default fetchLikeCm