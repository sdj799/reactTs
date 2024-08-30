import { options } from "../../api/tmdb";
import { useFetch } from "../../hooks/useFetch";
import { MovieType, TMDBDataType } from "../../types/movie";
import MovieCard from "../MovieCard";
import MovieSkeleton from "./MovieSkeleton";

const MovieArea = ({ url, type }: { url: string; type: string }) => {
  const { data, isError, isLoading } = useFetch<TMDBDataType>(
    url,
    { results: [] },
    options
  );
  if (isLoading) return <MovieSkeleton />;
  if (isError) throw new Error("Error");
  if (!data) return;
  const movieList: MovieType[] = data.results;
  console.log(data.results);

  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{type}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movieList.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
};
export default MovieArea;
