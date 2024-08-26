import { useLayoutEffect, useState } from "react";

const UseLayoutEffecct = () => {
  const [count, setCount] = useState(0);
  // 의도적으로 컴포넌트에 부하가 걸리는 상황을 만들어봄
  const now = performance.now();
  while (performance.now() - now < 1000) {}

  // useEffect() -> 데이터 통신
  // useLayoutEffect() -> 레이아웃 변경

  // 부하가 많이 걸리는 작업을 넣으면 코드가 실행될 때 까지 다른 작업을 진행할 수 없다.
  useLayoutEffect(() => {
    if (count === 10) setCount(0);
    console.log("uselayoutEffect");
  }, [count]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(10)}>클릭</button>
      <button onClick={() => alert("클릭")}>클릭</button>
    </>
  );
};
export default UseLayoutEffecct;
