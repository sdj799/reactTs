import { useEffect, useState } from "react";

const ErrorEx = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) {
          throw new Error("Error");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        // throw new Error("catch Error");
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  if (isError) {
    throw new Error("Outside Error");
  }
  return (
    <>
      <h1>ErrorEx Component</h1>
      {data.map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
};
export default ErrorEx;
