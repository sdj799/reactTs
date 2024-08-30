import { useFetch } from "../../hooks/useFetch";

const FetchAsyncData = () => {
  const { data, isError, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    []
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...{error}</h1>;
  }
  return (
    <>
      <h1>FetchAsyncData Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
export default FetchAsyncData;
