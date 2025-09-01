import baseUrl from "@/utils/baseUrl";

const fetchGetAllOrders=async()=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}order/getUserAllOrders`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            console.log("سفارش ها دریافت شدند");
           
            return parseResponse.orders
        }else{
            console.log("سفارشی دریافت نشد");
            return false
        }
    }catch(err){
        console.error("ارور دریافت سفارش‌ها", err.message);
        return false
    }
}

export default fetchGetAllOrders