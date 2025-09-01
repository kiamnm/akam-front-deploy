const formValidation=(name,phone,comment,setNameErr,setPhoneErr,setCommentErr)=>{
let isNameOk=false
    let isPhoneOk=false
    let isCommentOk=false
    const phoneRegex = /^09\d{9}$/;
    setNameErr("")
    setPhoneErr("")
    setCommentErr("")
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



if(comment.length===0){
    setCommentErr("* لطفا متن کامنت را وارد کنید.")
}else if(comment.length>300){
    setCommentErr("* تعداد کاراکتر‌های مجاز برای کامنت حداکثر 300 کاراکتر است.")
}else{
    setCommentErr("")
    isCommentOk=true
}


if(isNameOk && isPhoneOk &&  isCommentOk){
    return true
}else{
    return false
}
}

export default formValidation