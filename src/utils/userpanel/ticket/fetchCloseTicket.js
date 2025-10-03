import baseUrl from "@/utils/baseUrl"
const fetchCloseTikcet=async (orderObjid)=>{
  
  
const res =await fetch(`${baseUrl}ticket/close/${orderObjid}`,{
    method:"PUT",
  
    credentials:"include",
    headers: {
        "Content-Type": "application/json",
      }

})
if(res.status===201){
 
  return true
}else{
 
  return false
}

}





export default fetchCloseTikcet