import { options } from "../../helpers/data";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../MovieCard";

const MovieSkeleton = ({ url, type }: { url: string; type: string }) => {
  const response = useFetch(url, null, options);
  if (!response.data) return;
  const movieList: [] = response.data.results;
  console.log(response.data.results);

  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{type}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movieList.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
};
export default MovieSkeleton;
