import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
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