const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg rounded-lg px-6 py-2 font-bold hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-black rounded-lg px-6 py-2 font-bold mx-2 opacity-80 hover:opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
