import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/usetopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch); 

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch /> ) :( <> <MainContainer />
        <SecondaryContainer /> </>)
      }
     
     
      
      {/* 
         Main Container
          -VideoBackground
          -VideoTitle
         Secondary Container
          -Movie List * n rows
          - Cards * n   
      
      */}
    </div>
  )
}

export default Browse