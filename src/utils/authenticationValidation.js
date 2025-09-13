import React from 'react'

const authenticationValidation = (email,password) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(!emailRegex) return "invalidEmail";
    if(!passwordRegex) return "invalidPassword";

    return null;

}

export default authenticationValidation