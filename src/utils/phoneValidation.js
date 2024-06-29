const phoneValidation = (phone)=>{
    const phoneRegex = /^\d{10}$/;
    if(phone.match(phoneRegex) ){
        return true
    }
}
export default phoneValidation;