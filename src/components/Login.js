import React, { useState, useRef } from 'react'
import Header from './Header'
import authenticationValidation from '../utils/authenticationValidation';


const Login = () => {

    const [signin, setSignin] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);


    const handleAuthentication = () => {
        console.log(email.current.value);
        console.log(password.current.value);
        seterrorMessage(authenticationValidation(email.current.value,password.current.value));
    }

    const changeToSignUp = () =>{
        setSignin(!signin);
    }

  return (
    <div>
        <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg' alt='logo'
        className=""/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="w-[450px] h-[700px] absolute p-12 bg-black bg-opacity-75 text-white my-36 mx-auto right-0 left-0 rounded-2xl">
        <h1 className='font-bold text-3xl py-4'>{signin ? "Sign In" : "Sign Up"}</h1>

        {!signin && (
             <input type="text" placeholder="Full Name" className='p-4 my-4 rounded-md border border-gray-400 w-full bg-black'/>

        )}

        <input ref={email} type="text" placeholder="Email or mobile number" className='p-4 my-4 rounded-md border border-gray-400 w-full bg-black'/>
        <input ref={password} type="password" placeholder="Password" className='p-4 my-4 rounded-md border border-gray-400 w-full bg-black '/>
        <p className='text-red-700'>{errorMessage==="invalidEmail"}</p>
        <button className='bg-red-600 hover:bg-red-700 p-2 rounded-lg w-full my-3 mb-6' onClick={handleAuthentication}>{signin ? "Sign In" : "Sign Up"}</button>
        <a href='' className='underline block text-center mt-2'>Forgot password?</a>
        {signin && (
            <div className='flex items-center mt-6'>
                <input className="size-4 accent-gray-100 cursor-pointer" type="checkbox" id='check'></input>
                <label className="ml-2" htmlFor="check">Remember me</label>
           </div>
            ) 
        }
        
        <div className='mt-6'>
            <h1>
                New to Netflix?
                <a onClick={changeToSignUp} className='font-bold cursor-pointer'>Sign up now.</a>
            </h1>
            <p className='mt-4 text-[13px] text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </div>
    </form>
    </div>
  )
}

export default Login