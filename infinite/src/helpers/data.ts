export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzdmNGM0MWQ4NTY5YTY2NTg4MmIzZDFmNWQ5NDk3NiIsIm5iZiI6MTcyNDgzMjg5OC4xNTk4NjUsInN1YiI6IjY2Y2VhMTc1ZjViZTJhYmU2NzQwMTIyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A8BTgWswL0GOVz_AXWPDAIihHGnJhL63WZ__wpjVhbc",
  },
};

export const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const topRateurl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const upcomingUrl =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
