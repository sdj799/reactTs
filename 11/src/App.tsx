import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async ({ signal }) => {
      return await fetch("http://localhost:3000", { signal }).then((res) =>
        res.json()
      );
    },
    retry: 5,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error.{error.message}.</h1>;

  console.log(data);

  return (
    <>
      <h1>App Component</h1>
    </>
  );
};
export default App;
