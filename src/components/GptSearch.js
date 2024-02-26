import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSugguestions from "./GptMovieSugguestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto"
          src={BACKGROUND_IMG}
          alt="background-img"
        />
      </div>
      <div className="pt-[25%] md:p-0">
        <GptSearchBar />
        <GptMovieSugguestions />
      </div>
    </div>
  );
};

export default GptSearch;
