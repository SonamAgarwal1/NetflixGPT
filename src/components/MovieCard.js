import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-32 m-1">
      <img src={IMG_CDN_URL + posterPath} alt={title} />
    </div>
  );
};

export default MovieCard;
