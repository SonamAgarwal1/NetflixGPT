import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config?.lang);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query="+ ${movie}+"&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClicked = async () => {
    // Below Code is commented as the openai key is not working
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // Results which openai going to return(gptResults?.choices?.[0]?.message?.content);
    const dummy = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Raaz, Padosan";
    const gptMovies = dummy?.split(",");
    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie)); // We will get Promises in return as the function is async-await->[promise,promise,promise,promise,promise]
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <div className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 text-white px-4 py-2 m-4 rounded-lg col-span-3"
          onClick={handleGptSearchClicked}
        >
          {lang[langKey]?.search}
        </button>
      </div>
    </div>
  );
};
export default GptSearchBar;
