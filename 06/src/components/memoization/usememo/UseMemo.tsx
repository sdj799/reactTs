import { useMemo, useState } from "react";
import { initialItems } from "../../../utils/utils";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const [items] = useState(initialItems); // 3000만개의 데이터를 가진 배열
  const selectedItems = useMemo(
    () => items.find((item) => item.selected),
    []
    // [count] // 불필요한 메모이제이션을 방지해야한다.
  );

  return (
    <>
      <h1>UseMemo Component</h1>
      <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
      <h1>count : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
};
export default UseMemo;
