import { IMG_CDN_URL } from "../utils/constant";


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-44 pr-4">
        <img className="h-48 w-48 rounded-sm"
          alt="Movie Card" 
        src={ IMG_CDN_URL + posterPath } />
    </div>
  )
}

export default MovieCard;