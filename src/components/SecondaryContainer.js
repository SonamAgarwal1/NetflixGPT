import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div className="">
      <div className="-mt-52 pl-2 relative z-20">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Trending" movies={movies} />
        <MovieList title="Horror" movies={movies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
