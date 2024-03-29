import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector(store=>store.config.lang);
  const searchText = useRef(null);
  
  //search movie in TMDB
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json()
    
    return json.results;
  }

  const handleGptSearchClick = async()=>{
console.log(searchText.current.value)
//make an api call to GPT API and get movie results

const gptQuery = "Act as a Movie Recommandation system and suggest some movies for the query :" + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar,Sholay,Don,Golmaal ,Koi Mil Gaya";

const gptResults = await openai.chat.completions.create({
  messages: [{ role: 'user', content: gptQuery }],
  model: 'gpt-3.5-turbo',
}); 

if(!gptResults.choices)  {  
  // TODO: Write error handling
  };

console.log(gptResults.choices?.[0]?.message?.content);

// it will give results in array format
const gptMovies = gptResults.choices?.[0]?.message?.content.split(",") ;

//for each movie we will search TMDB API

const promiseArray = gptMovies.map(movie=> searchMovieTMDB(movie))
//there will returns array of five promise[promise,promise,promise,promise,promise,];

const tmdbResults = await Promise.all(promiseArray);
console.log(tmdbResults)

dispatch(addGptMovieResults({ movieNames:gptMovies , movieResults:tmdbResults}));
  };
  

  return (
    <div className=' pt-[20%] md:pt-[10%] flex justify-center ' >
        
<form className=" bg-black grid grid-cols-12 w-[90%] md:w-1/2" 
onSubmit = {(e)=>{e.preventDefault()}}>
    <input 
    ref={searchText}
    type="text" placeholder={lang[langkey].gptSearchPlaceholder} 
    className="p-2 m-2 col-span-9" />
    <button className=" col-span-3 py-2 px-4 m-2  bg-red-700 text-white rounded-md"
    onClick={handleGptSearchClick}>
        {lang[langkey].search}
    </button>
</form>

    </div>
  )
}

export default GptSearchBar;