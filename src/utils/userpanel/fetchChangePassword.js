import baseUrl from "../baseUrl"
const fetchChangePassword=async(password,setIsPending)=>{
    setIsPending(true)
    try{
const body=JSON.stringify({password})
    const res=await fetch(`${baseUrl}userInfo/changePassword`,{
        method: "POST",
        headers:{
            "Content-type":"application/json",
            
        },
        body,
        credentials: "include",
    })
    const parseResponse=await res.json();
    
    if(res.status===201){
        setIsPending(false)
return true
    }else{
        setIsPending(false)
return false
    }

    }catch(err){
        setIsPending(false)
console.log(err);
return false
    }
}

export default fetchChangePassword