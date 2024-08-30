import { useEffect, useState } from "react";

type FetchOtions = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
};

export const useFetch = <T>(
  initailUrl: string,
  initialData: T,
  initialOptions: FetchOtions = { method: "GET" }
) => {
  const [data, setData] = useState(initialData);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // 로딩이 아니다
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setError(null);
        const response = await fetch(initailUrl, {
          ...initialOptions,
          signal,
        });
        if (!response.ok) {
          throw new Error("서버 상태가 이상합니다.");
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        if (e instanceof Error && e.name === "AbortError") return;
        setIsError(true);
        setError(e instanceof Error ? e.message : "알 수 없는 에러");
      } finally {
        setIsLoading(false);
        setIsError(false);
        setError("");
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [initailUrl]);
  return { data, isLoading, isError, error };
};
