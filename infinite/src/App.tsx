import MovieBasic from "./components/movies-basic/MovieBasic";
import ErrorBoundary from "./error/ErrorBoundary";
// import ErrorEx from "./error/ErrorEx";

const App = () => {
  return (
    <>
      <ErrorBoundary fallback={<h1>Error! Boundary</h1>}>
        {/* <ErrorEx /> */}
        <MovieBasic />
      </ErrorBoundary>
    </>
  );
};
export default App;
