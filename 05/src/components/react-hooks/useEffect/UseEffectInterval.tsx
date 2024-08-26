import { useEffect } from "react";

const UseEffectInterval = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("interval");
    }, 1000);
    // 메모리 누수 방지
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>UseEffectInterval Component</h1>
    </>
  );
};
export default UseEffectInterval;
