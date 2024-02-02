import { useSelector } from "react-redux";
import useMovieTriler from "../hooks/useMoviesTrailer.";

const VideoBackground = ({movieId}) => {
  
  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo);
 useMovieTriler(movieId);

  return (
    <div>
    <iframe 
    className="w-screen   aspect-video h-screen "
     src= {"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&atoplay=1&mute=1"} 
     title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    
     ></iframe>

    </div>
  )
}

export default VideoBackground