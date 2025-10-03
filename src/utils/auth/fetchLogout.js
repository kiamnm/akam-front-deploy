import baseUrl from "../baseUrl"

const fetchLogout=async()=>{
const result=await fetch(`${baseUrl}auth/logout`, {
          method: "GET",
          credentials: "include", // مهم
        })
        
        if(result.status===200){
            
            return true
        }else{
            
            return false
        }
}

export default fetchLogout