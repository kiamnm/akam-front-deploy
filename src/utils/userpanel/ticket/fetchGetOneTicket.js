import baseUrl from "@/utils/baseUrl";
const fetchGetOneTicket=async(ticketObjid)=>{
  
    try{

    const res=await fetch(`${baseUrl}ticket/getOne/${ticketObjid}`,{
        method: "GET",
        credentials: "include",
    })
    const parseResponse=await res.json();
    
    if(res.status===200){

return parseResponse.ticket
    }else{
     
return false
    }

    }catch(err){


return false
    }
}

export default fetchGetOneTicket