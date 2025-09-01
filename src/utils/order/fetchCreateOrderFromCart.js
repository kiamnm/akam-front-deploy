import baseUrl from "../baseUrl"
const fetchCreateOrderFromCart=async(userId,items,setPending)=>{
    console.log("tabe ejra shod");
    try{
const body=JSON.stringify({userId,items,setPending})
    const res=await fetch(`${baseUrl}order/createFromCart`,{
        method: "POST",
        headers:{
            "Content-type":"application/json",
            
        },
        body,
        credentials: "include",
    })
    const parseResponse=await res.json();
    
    if(res.status===201){
        setPending(true)
return true
    }else{
        setPending(true)
return false
    }

    }catch(err){
        setPending(true)
console.log(err);
return false
    }
}

export default fetchCreateOrderFromCart