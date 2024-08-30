// 1. fetch api
// 1.1 비동기로 동작한다.
// 1.2 Promis...then 방식으로 동작하는 방식
// 1.3 async, await 방식으로 동작하는 방식

import { useEffect, useState } from "react";

// 2. axios library
// 3. 데이터 통신 라이브러리

const FetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("데이터를 불러오는데 실패했습니다");
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        if (e.name === "AbortError") return;
        setIsError(true);
        setError(e.message);
        console.log(e);
      })
      .finally(() => {
        if (!signal.aborted) setIsLoading(false);
      });

    return controller.abort();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...{error}</h1>;
  }
  return (
    <>
      <h1>FetchData Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
export default FetchData;
