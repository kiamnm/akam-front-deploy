const isValidate=(phone,password,repeatPassword,setPhoneErr,setPassErr,setRepeatedPassErr)=>{

let isPhoneValid=false;
let isPasswordValid=false;
let isRepeatedPasswordValid=false;
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


if(!passRegex.test(password)){
    setPassErr("رمز عبور باید حداقل 8 کاراکتر و شامل حروف بزرگ و کوچک باشد.")
    isPasswordValid=false
}else{
    setPassErr("")
    isPasswordValid=true
}


if(repeatPassword!==password){
    setRepeatedPassErr("رمز عبور و تکرار آن یکسان نیستند.")
    isRepeatedPasswordValid=false
}else{
    setRepeatedPassErr("")
    isRepeatedPasswordValid=true
}



if(isPhoneValid && isPasswordValid && isRepeatedPasswordValid){
    return true
}else{
    return false
}




}


export default isValidate