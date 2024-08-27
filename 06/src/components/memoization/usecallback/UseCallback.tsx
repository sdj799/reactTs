import { useCallback, useMemo, useState } from "react";
import UseCallbackDisplay from "./UseCallbackDisplay";
import UseCallbackAction from "./UseCallbackAction";
import UseCallbackTest from "./UseCallbackTest";
import UseMemo from "../usememo/UseMemo";

const fn = new Set(); // 중복을 허용하지 않음

const UseCallback = () => {
  const [count, setCount] = useState<{ count: number }>({ count: 0 });

  // useMemo 값을 메모이제이션 할 때 사용
  // useMemo( () => {return ""}, []);
  const fruits = useMemo(() => ["apple", "banana", "orange"], []);

  // 함수를 memoization하기 위해 만듬
  // useCallback은 함수가 메모이제이션 되었을 때의 상태를 기억함
  const increment = useCallback(() => {
    setCount((count) => ({ count: count.count + 1 }));
  }, []); // 상시 memoization
  const decrement = useCallback(() => {
    setCount((count) => ({ count: count.count - 1 }));
  }, []);
  const [count2] = useState({ count: 0 });

  fn.add(increment);
  fn.add(decrement);
  fn.add(count);
  fn.add(count2);
  console.log(fn);

  return (
    <>
      <UseCallbackDisplay
        count={count}
        setCount={setCount}
        fruits={fruits}
        title="count rendering"
      />
      <UseCallbackDisplay
        count={count2}
        setCount={setCount}
        fruits={fruits}
        title="count2 rendering"
      />
      <UseCallbackAction increment={increment} decrement={decrement} />
      {/* <UseCallbackTest /> */}
      <UseMemo />
    </>
  );
};
export default UseCallback;
