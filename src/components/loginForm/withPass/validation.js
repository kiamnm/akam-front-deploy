const validation=(phone,password,setPhoneErr,setPassErr)=>{
    let isPhoneValid=false;
    let isPasswordValid=false;
    const phoneRegex = /^09\d{9}$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if(phone.length===0){
    setPhoneErr("شماره موبایل را وارد کنید.")
    isPhoneValid=false
}else if(!(phoneRegex.test(phone))){
    setPhoneErr("شماره موبایل صحیح نیست.")
    isPhoneValid=false
}else{
    setPhoneErr("");
    isPhoneValid=true
}
if(password.length===0){
    setPassErr("رمز عبور را وارد نمایید.")
    isPasswordValid=false
}else if(!passRegex.test(password)){
    setPassErr("شماره موبایل یا رمز عبور صحیح نمی‌باشد.")
    isPasswordValid=false
}else{
    setPassErr("")
    isPasswordValid=true
}


if(isPhoneValid && isPasswordValid ){
    return true
}else{
    return false
}


}



export default validation