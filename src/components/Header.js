import React from 'react';
import { signOut } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLanguage} from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);



 const handleSignOut = ()=>{
  signOut(auth).then(() => {
  
    
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    navigate("/error")
  });
 }


 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL}= user;
     dispatch(
      addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL,
      })
      
     );
     navigate("/browse")
    } else {
      // User is signed out
     dispatch(removeUser)
    navigate("/")
 
    }
  });
  //Unsubscribe when component unmount
  return ()=> unsubscribe()
 },[]);

 const handleGptSearchClick = ()=>{
  //toggle GPT search
  dispatch(toggleGptSearchView());
 }

const handleLanguageChange = (e)=>{ 
 dispatch(changeLanguage(e.target.value))
}

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row md:justify-between ' >
        <img 
        className='w-44 mx-auto md:mx-0'
        src={LOGO} alt='logo'/>


 { user && (<div className='flex justify-around'>

  { showGptSearch && (
  <select 
  className='px-1 m-5 rounded-md bg-gray-300' 
  onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map(lang =><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
   
  </select>)}

  <button className='bg-gray-300 text-black font-semibold px-3 m-5 rounded-md'
  onClick={handleGptSearchClick}
  >{ showGptSearch? "Homepage":"GPT Search"}</button>
  <img 
  className='hidden md:block w-6 h-6 md:w-10 md:h-10 mt-4 md:m-4 rounded-md'
  alt='usericon' src={user.photoURL} />
  <button  onClick={handleSignOut} className='font-bold text-black bg-gray-300 p-1 m-5 md:-ml-2 md:p-0 rounded-md'> (Sign Out)</button>
</div>)}

    </div>
    
  )
}

export default Header;