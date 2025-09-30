import baseUrl from "@/utils/baseUrl"
const fetchGoStep5=async(file,orderObjid,setPending)=>{
    setPending(true)
    try{
const formData = new FormData();
formData.append("orderObjid", orderObjid);

    formData.append("file", file);
    const res=await fetch(`${baseUrl}order/handleNextStep5`,{
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

export default fetchGoStep5