

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[30%] md:pt-[13%] w-screen aspect-video   px-6 md:px-24 absolute bg-gradient-to-r from-black text-white">
        <h1 className=" text-3xl md:text-6xl font-bold  ">{title}</h1>
        <p className=" hidden md:inline-block pt-6 text-lg w-1/4 ">{overview}</p>

        <div className="my-4 ">
       <button className="bg-white  px-1 md:px-6  mx-1 md:mx-6 text-lg text-black rounded-md font-semibold   md:py-1
       hover:bg-opacity-80">Play ▶️ </button>
       <button className= " hidden md:inline-block bg-gray-800 text-white px-6 mx-6 text-lg rounded-md font-semibold py-1  hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;