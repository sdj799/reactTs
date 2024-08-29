//1. 데이터를 불러오는 방법
//2. 로딩 상태를 핸들링 하는 방법을 배웠습니다.
//3. 에러를 핸들링 하는 방법
//4. API 요청이 끝나기 전에 사용자가 이탈하는 경우
import { nowPlayingUrl, options, popularUrl } from "../../helpers/data";
import { useFetch } from "../../hooks/useFetch";
const FetchBasic = () => {
  const {
    data: { results: nowPlayingData },
    isError: nowPlayingIsError,
    isLoading: NowPlayingLoading,
  } = useFetch(nowPlayingUrl, [], options);
  const {
    data: { results: popularData },
    isError: popularIsError,
    isLoading: PopularLoading,
  } = useFetch(popularUrl, [], options);
  if (NowPlayingLoading || PopularLoading) return <div>로딩중...</div>;
  if (nowPlayingIsError || popularIsError) return <div>에러 발생</div>;
  return (
    <>
      <h1>Now Playing</h1>
      <ul>
        {nowPlayingData &&
          nowPlayingData.map((movie: { title: string }) => (
            <li>{movie.title}</li>
          ))}
      </ul>
      <h1>Popular Playing</h1>
      <ul>
        {popularData &&
          popularData.map((movie: { title: string }) => <li>{movie.title}</li>)}
      </ul>
    </>
  );
};
export default FetchBasic;
