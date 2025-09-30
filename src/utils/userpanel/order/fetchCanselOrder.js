import baseUrl from "@/utils/baseUrl"
const fetchCanselOrder=async (orderObjid,setPending)=>{
  setPending(true)
  const body=JSON.stringify({orderObjid})
const res =await fetch(`${baseUrl}order/canselOrder`,{
    method:"PUT",
    body,
    credentials:"include",
    headers: {
        "Content-Type": "application/json",
      }

})
if(res.status===201){
  setPending(false)
  return true
}else{
  setPending(false)
  return false
}

}





export default fetchCanselOrder