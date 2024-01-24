import { useState } from 'react';
import Header from './Header';
import React from 'react';

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

const toggleSignUpForm = ()=>{

setIsSignInForm(!isSignInForm)
};

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg ' alt='background'/>
 </div>
<div>
  <form className='w-3/12  absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-white text-3xl py-4'>{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
     

{  !isSignInForm&&  <input
     type='text' 
     placeholder='Full Name' 
     className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>}

    <input
     type='text' 
     placeholder='Email Address' 
     className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>

    <input 
    type='password' 
    placeholder='Password' 
    className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>

  <button className='p-2 my-6 bg-red-700 text-white w-full rounded-lg'> Sign In</button>



<p className='py-2 cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already have an account? Sign In" }</p>

  </form>


</div>

    </div>
  )
}

export default Login