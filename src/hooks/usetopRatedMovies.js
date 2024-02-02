import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = ()=>{
    
    // Fetch Data from TMDB api and update the store


    const dispatch = useDispatch();

    const getTopRatedMovies = async ()=>{
      
      const data = await fetch ('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
    
      const json = await data.json();
   
      
    dispatch(addTopRatedMovies(json.results));
      
    };
    
    useEffect(()=>{
    
      getTopRatedMovies()
    },[])
};

export default useTopRatedMovies;