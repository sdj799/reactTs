import React, { useContext } from "react";
import { CounterContextFn } from "../../context/CounterProvider";

const ContextAction = () => {
  const { increment, decrement } = useContext(CounterContextFn)!; // null보장 연산자
  console.log("action rendering");

  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
};
export default React.memo(ContextAction);
