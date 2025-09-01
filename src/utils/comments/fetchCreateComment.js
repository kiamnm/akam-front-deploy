
import baseUrl from "../baseUrl";

const fetchCreateComment=async(comment,articleObjId,cmObjId,name)=>{
  console.log("miow",articleObjId);
  let body
       if(cmObjId){
         body=JSON.stringify({comment,articleObjId,cmObjId,name})
       }else{
         body=JSON.stringify({comment,articleObjId,name})
       }
  
    try{
        
        const res = await fetch(`${baseUrl}comment/create`, {
          method: "POST",
          body,
          credentials: "include",
           headers: {
        "Content-type": "application/json",
      }, // مهم
        });
        const parseResponse=await res.json();
        console.log(res,"res");
        console.log(parseResponse,"parseresponse");
        if(res.status===201){
            console.log("کامنت با موفقیت ثبت شد.");
           
            return true
        }else{
            console.log("کامنت ثبت نشد");
            return false
        }
    }catch(err){
        console.error("comment err", err.message);
        return false
    }
}

export default fetchCreateComment