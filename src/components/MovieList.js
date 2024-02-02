import MovieCard from "./MovieCard";


const MovieList = ({title, movies}) => {
   
   
  return (
    <div className="px-5 ">

        <h1 className="text-3xl text-white py-2 font-semibold">{title}</h1>

        <div className="flex overflow-x-scroll">
            
        
        <div className="flex">
    { movies?.map((movie)=> (
    <MovieCard   key={movie.id}  posterPath={movie.poster_path}/>
    ))}
        </div>

    </div>
</div>
  )
}

export default MovieList ;