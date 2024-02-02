import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    upcomingMovies:null,
    trailerVideo: null,
    topRatedMovies:null,
    },
    reducers: {
      addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies = action.payload ;
        }  ,
      addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload ;
            } ,
      addUpcomingMovies:(state,action)=>{
              state.upcomingMovies = action.payload ;
            } ,
      addTopRatedMovies:(state,action)=>{
              state.topRatedMovies = action.payload ;
            } ,


      addTrailerVideo:(state,action)=>{
        state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTrailerVideo,addTopRatedMovies } = moviesSlice.actions;
export default moviesSlice.reducer ;

