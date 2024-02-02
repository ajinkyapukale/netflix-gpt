import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {

  const langkey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        
<form className=" bg-black w-1/2 grid grid-cols-12">
    <input type="text" placeholder={lang[langkey].gptSearchPlaceholder} 
    className="p-2 m-2 col-span-9" />
    <button className=" col-span-3 py-2 px-4 m-2  bg-red-700 text-white rounded-md">
        {lang[langkey].search}
    </button>
</form>

    </div>
  )
}

export default GptSearchBar