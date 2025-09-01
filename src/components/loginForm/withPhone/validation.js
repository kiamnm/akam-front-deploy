const validation=(phone,setPhoneErr)=>{
    let isPhoneValid=false;
    const phoneRegex = /^09\d{9}$/;


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


    if(isPhoneValid){
        return true
    }else{
        return false
    }
}

export default validation