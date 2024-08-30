const BASE_URL = "https://api.themoviedb.org/3/movie";
export const NowPlaying = `${BASE_URL}/now_playing?language=en-US&page=1`;
export const Popular = `${BASE_URL}/popular?language=en-US&page=1`;
export const Upcoming = `${BASE_URL}/upcoming?language=en-US&page=1`;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzdmNGM0MWQ4NTY5YTY2NTg4MmIzZDFmNWQ5NDk3NiIsIm5iZiI6MTcyNDgzMjg5OC4xNTk4NjUsInN1YiI6IjY2Y2VhMTc1ZjViZTJhYmU2NzQwMTIyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A8BTgWswL0GOVz_AXWPDAIihHGnJhL63WZ__wpjVhbc",
  },
};
