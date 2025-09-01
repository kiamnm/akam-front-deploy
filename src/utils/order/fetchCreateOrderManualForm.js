import baseUrl from "../baseUrl"
const fetchCreateOrderManualForm=async(name,phone,dynamicItems,setPending)=>{
    setPending(true)
    try{
const body=JSON.stringify({name,phone,dynamicItems})
    const res=await fetch(`${baseUrl}order/createManual`,{
        method: "POST",
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

export default fetchCreateOrderManualForm