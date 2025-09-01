import dynamic from "next/dynamic";

const formValidation=(name,setNameError,phone,setPhoneError,dynamicItems,setDynamicError)=>{
    let isNameOk=false
    let isPhoneOk=false
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




let isProductNameOk=false
let isProductAmountOk=false
dynamicItems.map((item,index)=>{



if(item.productName===""){
    isProductNameOk=false
setDynamicError((prev)=>{
    
    const updated = [...prev];
    updated[index].name="لطفا نام کالا را وارد کنید."
    return updated

})
}else if(item.productName.length>70){
    isProductNameOk=false
    setDynamicError((prev)=>{
        const updated = [...prev];
        updated[index].name="* تعداد کاراکتر‌های نام کالا بیشتر از حد مجاز است."
        return updated
    
    })
}else{
    isProductNameOk=true
    setDynamicError((prev)=>{
    const updated = [...prev];
        updated[index].name=""
        isProductNameOk=true
        return updated
    })
}
    ////////////

    

    if(item.amount<1){
        
        isProductAmountOk=false
    setDynamicError((prev)=>{
        
        const updated = [...prev];
        updated[index].amount="* لطفا مقدار کالا را وارد کنید."
        return updated
    
    })
    }else if(item.productName.length>70){
        isProductAmountOk=false
        setDynamicError((prev)=>{
            const updated = [...prev];
            updated[index].amount="* تعداد کاراکتر‌های مقدار کالا بیشتر از حد مجاز است."
            return updated
        
        })
    }else{
        isProductAmountOk=true
        setDynamicError((prev)=>{
        const updated = [...prev];
            updated[index].amount=""
            isProductAmountOk=true
            return updated
        })
    }
})


if(isNameOk && isPhoneOk && isProductNameOk && isProductAmountOk){
    return true
}else{
    return false
}
}
export default formValidation