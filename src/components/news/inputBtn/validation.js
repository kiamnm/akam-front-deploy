

const formValidation=(phone,setPhoneErr)=>{
    
    let isPhoneOk=false
    const phoneRegex = /^09\d{9}$/;




if(phone===""){
    setPhoneErr("*لطفا شماره موبایل را وارد کنید")
}else if(!phoneRegex.test(phone)){
    setPhoneErr("* لطفا شماره موبایل صحیح را وارد کنید.")
}
else{
    setPhoneErr("")
    isPhoneOk=true
}








if(isPhoneOk){
    return true
}else{
    return false
}
}
export default formValidation