import baseUrl from "../baseUrl"
const fetchEditGeneralInfo=async(name,email,username,setIsPending)=>{
    setIsPending(true)
    try{
const body=JSON.stringify({name,email,username})
    const res=await fetch(`${baseUrl}userInfo/generalInfo`,{
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

export default fetchEditGeneralInfo