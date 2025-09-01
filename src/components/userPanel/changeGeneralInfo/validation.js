const validation=(name,email,username,setNameErr,setEmailErr,setUsernameErr)=>{
    let isNameOk=false
    let isEmailOk=false
    let isUsernameOk=false
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(name.length<3 && name.length!==0){
            setNameErr("* نام نمی‌تواند کمتر از 3 حرف باشد.")
        }else if(name.length>71){
            setNameErr("* تعداد کاراکتر های نام نمی‌تواند بیشتر از 70 باشد.")
        }else{
            setNameErr("")
            isNameOk=true
        }


if (!emailRegex.test(email) && email.length!==0) {
  setEmailErr("لطفا ایمیل معتبر وارد کنید.")
} else {
  setEmailErr("")
  isEmailOk=true
}


if(username.length<3 && username.length!==0){
            setUsernameErr("* نام کاربری نمی‌تواند کمتر از 3 حرف باشد.")
        }else if(name.length>71){
            setUsernameErr("* تعداد کاراکتر های نام کاربری نمی‌تواند بیشتر از 70 باشد.")
        }else{
            setUsernameErr("")
            isUsernameOk=true
        }
        






        

if(isNameOk && isUsernameOk && isEmailOk){
    return true
}else{
    return false
}




}

export default validation