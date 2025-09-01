

const formValidation=(name,setNameError,phone,setPhoneError,explanation,setExplanationError)=>{
    let isNameOk=false
    let isPhoneOk=false
    let isExplanationOk=false
    const phoneRegex = /^09\d{9}$/;
if(name===""){
setNameError("* لطفا نام را وارد کنید.")
}else if(name.length<3){
    setNameError("* نام نمی‌تواند کمتر از 3 حرف باشد.")
}else if(name.length>71){
    setNameError("* تعداد کاراکتر های نام نمی‌تواند بیشتر از 70 باشد.")
}else{
    setNameError("")
    isNameOk=true
}



if(phone===""){
    setPhoneError("*لطفا شماره موبایل را وارد کنید")
}else if(!phoneRegex.test(phone)){
    setPhoneError("* لطفا شماره موبایل صحیح را وارد کنید.")
}
else{
    setPhoneError("")
    isPhoneOk=true
}





if(explanation.length>300){
    setExplanationError("* تعداد کاراکتر‌های مجاز برای توضیحات حداکثر 300 کاراکتر است.")
}else{
    setExplanationError("")
    isExplanationOk=true
}


if(isNameOk && isPhoneOk &&  isExplanationOk){
    return true
}else{
    return false
}
}
export default formValidation