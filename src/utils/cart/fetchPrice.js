
import baseUrl from "../baseUrl";

const fetchPrice=async(items)=>{
  

  // console.log(items,"chizi ke mikhad fetch beshe");
    try{
        
        const res = await fetch(`${baseUrl}product/getprice`, {
          method: "POST",
          body:JSON.stringify(items),
          credentials: "include",
           headers: {
        "Content-type": "application/json",
      }, // مهم
        });
        const parseResponse=await res.json();
        // console.log(res,"res");
        // console.log(parseResponse,"parseresponse");
        
        if(res.status===200){
            console.log("ًقیمت های جدید دریافت شد")
           
            return parseResponse.product
        }else{
            console.log("قیمتی دریافت نشد");
            return false
        }
    }catch(err){
        console.error("comment err", err.message);
        return false
    }
}

export default fetchPrice