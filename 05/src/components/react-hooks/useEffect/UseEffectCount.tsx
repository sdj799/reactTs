import { useEffect, useState } from "react";

const UseEffectCount = () => {
  // 생명 주기를 체크할 때는 useEffect를 사용한다.
  // 생성, 삭제
  const [count, setCount] = useState(0);

  // 1. 생성 시점과 종료 시점에 코드를 분리할 수 있다.
  useEffect(() => {
    // API 호출 주로 많이 사용
    // useEffect 내부에서는 async를 사용하지 못한다.
    console.log("UseEffectCount Component Created");
    // clean up 함수
    return () => {
      console.log("UseEffectCount Component Destroyed");
    };
  }, []);
  useEffect(() => {
    // destroy가 먼저 호출되고 Update가 호출된다.
    console.log("UseEffect Conponent Updated");
    return () => {
      console.log("UseEffect Conponent Updated Destroy");
    };
  }, [count]);
  return (
    <>
      <h1>UseEffectCount Component : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
};
export default UseEffectCount;
