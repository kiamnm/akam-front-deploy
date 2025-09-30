import baseUrl from "@/utils/baseUrl"
const fetchGoStep3=async(name,contactExplenation,orderObjid,setPending)=>{
    setPending(true)
    try{
const body=JSON.stringify({name,contactExplenation,orderObjid})
    const res=await fetch(`${baseUrl}order/handleNextStep2`,{
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

export default fetchGoStep3