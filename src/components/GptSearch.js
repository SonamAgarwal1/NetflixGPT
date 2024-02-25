import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSugguestions from "./GptMovieSugguestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <GptSearchBar />
      <GptMovieSugguestions />
    </div>
  );
};

export default GptSearch;
