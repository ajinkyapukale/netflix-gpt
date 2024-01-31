import { useState , useRef} from 'react';
import Header from './Header';
import React from 'react';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVTAR } from '../utils/constant';


const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

  const[errorMessage, setErrorMessage] = useState(null);
 

  const dispatch = useDispatch();

  const email = useRef(null) ;
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = ()=>{

const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
 
      if(message) return ;

      //Sign Up  Sign In  logic
      if(!isSignInForm){
        // Sign Up logic

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up logic
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVTAR
    }).then(() => {
     
        const{uid, email ,displayName, photoURL }= auth.currentUser;

        dispatch(
          addUser({
         uid:uid,
         email:email, 
         displayName:displayName, 
         photoURL:photoURL}));
     
      
      // Profile updated!
    
    }).catch((error) => {
    // An error occurred
    setErrorMessage(errorMessage) 
    });

   
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage)
    // ..
  });

      }else{
        //Sign In logic

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
  });
      }
     
  }

const toggleSignUpForm = ()=>{

setIsSignInForm(!isSignInForm)
};

  return (
    <div>
        <Header />
        <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg ' alt='background'/>
 </div>
<div>
  <form onSubmit={(e)=>{
e.preventDefault()
  }}  className='w-3/12  absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-white text-3xl py-4'>{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
     

{  !isSignInForm&&  <input
     ref={name}
     type='text' 
     placeholder='Full Name' 
     className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>}
     
    

    <input
    ref={email}
     type='text' 
     placeholder='Email Address' 
     className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>

    <input 
    ref={password}
    type='password' 
    placeholder='Password' 
    className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>

   <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

  <button className='p-2 my-6 bg-red-700 text-white w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? 'Sign In': 'Sign Up'}</button>



<p className='py-2 cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already have an account? Sign In" }</p>

  </form>


</div>

    </div>
  )
}

export default Login