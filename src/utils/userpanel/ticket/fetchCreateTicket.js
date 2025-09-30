import baseUrl from "@/utils/baseUrl"
const fetchCreateTicket=async(file,subject,message,setPending)=>{
    setPending(true)
    try{
const formData = new FormData();
formData.append("subject", subject);
formData.append("message", message);
    formData.append("file", file);
    const res=await fetch(`${baseUrl}ticket/create`,{
        method: "POST",
      body: formData,
      credentials: "include",
    })
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

export default fetchCreateTicket