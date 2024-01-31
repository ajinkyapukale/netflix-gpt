

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-48 w-screen h-screen  px-16 absolute bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold w-1/4 text-white">{title}</h1>
        <p className="pt-6 text-lg w-1/4 text-white">{overview}</p>

        <div className="my-4 ">
       <button className="bg-white px-6 mx-6 text-lg rounded-md font-semibold  py-1
       hover:bg-opacity-80">Play ▶️ </button>
       <button className="bg-gray-800 text-white px-6 mx-6 text-lg rounded-md font-semibold py-1  hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;