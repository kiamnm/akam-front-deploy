const validation=(phone,name,subject,message,setPhoneErr,setNameErr,setSubjectErr,setMessageErr)=>{
    let isNameOk=false
    let isPhoneOk=false
    let isMessageOk=false
    let isSubjectOk=false
    const phoneRegex = /^09\d{9}$/;

    if(name===""){
        setNameErr("* لطفا نام را وارد کنید.")
        }else if(name.length<3){
            setNameErr("* نام نمی‌تواند کمتر از 3 حرف باشد.")
        }else if(name.length>71){
            setNameErr("* تعداد کاراکتر های نام نمی‌تواند بیشتر از 70 باشد.")
        }else{
            setNameErr("")
            isNameOk=true
        }



        
if(phone===""){
    setPhoneErr("*لطفا شماره موبایل را وارد کنید")
}else if(!phoneRegex.test(phone)){
    setPhoneErr("* لطفا شماره موبایل صحیح را وارد کنید.")
}
else{
    setPhoneErr("")
    isPhoneOk=true
}


if(message.length>3000){
    setMessageErr("* تعداد کاراکتر‌های مجاز برای متن پیام حداکثر 3000 کاراکتر است.")
}else if(message.length<1){
    setMessageErr("* متن پیام را وارد کنید")
}else{
    setMessageErr("")
    isMessageOk=true
}



if(subject.length>300){
    setSubjectErr("* تعداد کاراکتر‌های مجاز برای موضوع حداکثر 300 کاراکتر است")
}else if(subject.length===0){
    setSubjectErr("* لطفا موضوع را وارد کنید.")
}else{
    setSubjectErr("")
    isSubjectOk=true
}
        

if(isMessageOk && isNameOk && isPhoneOk && isSubjectOk){
    return true
}else{
    return false
}




}

export default validation