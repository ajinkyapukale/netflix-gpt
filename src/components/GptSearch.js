import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggections from './GptMovieSuggections';
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
       <div className=' fixed -z-10 blur-sm'>
        <img src={BG_URL} alt='background'/>
 </div>
      <GptSearchBar/>
      <GptMovieSuggections/>

    </div>

  )
}

export default GptSearch