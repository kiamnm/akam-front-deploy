import baseUrl from "@/utils/baseUrl"
const fetchUpdateItems=async(orderObjid,items,setPending)=>{
    setPending(true)
    try{
const body=JSON.stringify({items,orderType:"1",orderObjid})
    const res=await fetch(`${baseUrl}order/handleNextStep1`,{
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

export default fetchUpdateItems