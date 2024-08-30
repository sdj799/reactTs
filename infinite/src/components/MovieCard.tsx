import { star } from "../assets/assets";
import { MovieType } from "../types/movie";
const MovieCard = ({
  title,
  poster_path,
  vote_average,
  release_date,
}: MovieType) => {
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`image ${title}`}
          className="rounded-md w-full"
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <img
              src={star}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">
              {Math.floor(vote_average * 10) / 10}
            </span>
          </div>
          <span className="text-yellow-500 font-bold">{release_date}</span>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
