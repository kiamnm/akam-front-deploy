import baseUrl from "@/utils/baseUrl";

const fetchGetAllTickets=async()=>{
       
  
    try{
        
        const res = await fetch(`${baseUrl}ticket/mine`, {
          method: "GET",
          credentials: "include", // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===200){
            console.log("تیکت ها دریافت شدند");
           
            return parseResponse.tickets
        }else{
            console.log("سفارشی دریافت نشد");
            return false
        }
    }catch(err){
        console.error("ارور دریافت سفارش‌ها", err.message);
        return false
    }
}

export default fetchGetAllTickets