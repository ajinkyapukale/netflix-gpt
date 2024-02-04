import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggections from './GptMovieSuggections';
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <>
          <div className=' fixed -z-10 blur-sm'>
        <img 
        className="h-screen object-cover  md:object-none md:w-screen"
        src={BG_URL} alt='background'/>
     </div>
    <div className='pt-[30%] md:p-0' >  
 
      <GptSearchBar/>
      <GptMovieSuggections/>

    </div>
    </>
  )
}

export default GptSearch