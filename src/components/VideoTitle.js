import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config?.lang);
  return (
    <div className=" w-full aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg rounded-lg px-6 py-2 font-bold hover:opacity-80">
          {lang[langKey]?.play}
        </button>
        <button className="bg-gray-500 text-black rounded-lg px-6 py-2 font-bold mx-2 opacity-80 hover:opacity-60">
          {lang[langKey]?.moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
