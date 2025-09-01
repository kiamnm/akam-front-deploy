const validation=(password,repeatPassword,setPasswordErr,setRepeatedPasswordErr)=>{
    let isPasswordOk=false;
    let isRepeatedPasswordOk=false
    
    

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


if(!passRegex.test(password)){
    setPasswordErr("رمز عبور باید حداقل 8 کاراکتر و شامل حروف بزرگ و کوچک باشد.")
    isPasswordOk=false
}else{
    setPasswordErr("")
    isPasswordOk=true
}


if(repeatPassword!==password){
    setRepeatedPasswordErr("رمز عبور و تکرار آن یکسان نیستند.")
    isRepeatedPasswordOk=false
}else{
    setRepeatedPasswordErr("")
    isRepeatedPasswordOk=true
}
        

if(isPasswordOk && isRepeatedPasswordOk ){
    return true
}else{
    return false
}




}

export default validation