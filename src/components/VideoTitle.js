const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-32 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg border border-2 rounded-lg px-6 py-2 font-bold ">
          ▶ Play
        </button>
        <button className="bg-white text-black border border-2 rounded-lg px-6 py-2 font-bold mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
