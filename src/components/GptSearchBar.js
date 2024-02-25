import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <div className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className="bg-red-700 text-white px-4 py-2 m-4 rounded-lg col-span-3">
          {lang[langKey]?.search}
        </button>
      </div>
    </div>
  );
};
export default GptSearchBar;
