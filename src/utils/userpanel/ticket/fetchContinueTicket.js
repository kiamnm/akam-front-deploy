import baseUrl from "@/utils/baseUrl"
const fetchContinueTicket=async(message,file,setPending,ticketObjid)=>{
    setPending(true)
    try{
const formData = new FormData();

formData.append("message", message);
    if (file) {
  formData.append("file", file);
}
    const res=await fetch(`${baseUrl}ticket/continue/${ticketObjid}`,{
        method: "PUT",
      body: formData,
      credentials: "include",
    })
    console.log(res);
    const parseResponse=await res.json();
    
    if(res.status===201){
        setPending(false)
return true
    }else{
        setPending(false)
return false
    }

    }catch(err){
        setPending(false)
console.log(err);
return false
    }
}

export default fetchContinueTicket