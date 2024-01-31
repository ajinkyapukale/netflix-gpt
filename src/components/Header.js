import React from 'react';
import { signOut } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constant';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store=>store.user);



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

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between' >
        <img 
        className='w-44 '
        src={LOGO} alt='logo'/>


 { user && (<div className='flex'>
  <img 
  className='w-14 h-14 mt-2 rounded-xl'
  alt='usericon' src={user.photoURL} />
  <button  onClick={handleSignOut} className='font-bold text-white'> (Sign Out)</button>
</div>)}

    </div>
    
  )
}

export default Header;