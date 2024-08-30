import {
  nowPlayingUrl,
  popularUrl,
  topRateurl,
  upcomingUrl,
} from "../../helpers/data";
import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";
// import { useFetch } from "../../hooks/useFetch";
// import { NowPlaying, options } from "../../api/tmdb";
// import { TMDBDataType } from "../../types/movie";
import MovieArea from "./MovieArea";
const MovieBasic = () => {
  const movies = [
    { url: nowPlayingUrl, type: "Now Play" },
    { url: popularUrl, type: "Popular" },
    { url: upcomingUrl, type: "Up Coming" },
    { url: topRateurl, type: "Top Rate" },
  ];
  // const {
  //   data: { results: nowPlaying },
  //   isLoading,
  //   isError,
  // } = useFetch<TMDBDataType>(NowPlaying, { results: [] }, options);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error...</div>;
  return (
    <>
      {/* 헤더 */}
      <MovieHeader />
      {/* 메인 */}
      <MovieMain />
      {/* 무비 에어리어 */}
      {movies.map((movie, index) => (
        <MovieArea key={index} url={movie.url} type={movie.type} />
      ))}
    </>
  );
};
export default MovieBasic;
