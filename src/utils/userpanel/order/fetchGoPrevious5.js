import baseUrl from "@/utils/baseUrl"
const fetchGoPrevious5=async(orderObjid,setPending)=>{
    setPending(true)
    try{
const body=JSON.stringify({orderObjid})
    const res=await fetch(`${baseUrl}order/handlePreviousStep5`,{
        method: "PUT",
        headers:{
            "Content-type":"application/json",
            
        },
        body,
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

export default fetchGoPrevious5