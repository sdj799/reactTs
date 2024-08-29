import { star } from "../assets/assets";
const MovieCard = ({ movie }: { movie: { [key: string]: string } }) => {
  const { title, vote_average, vote_count } = movie;
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
              {Math.floor(parseFloat(vote_average) * 10) / 10}
            </span>
          </div>
          <span className="text-yellow-500 font-bold">{vote_count}</span>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
