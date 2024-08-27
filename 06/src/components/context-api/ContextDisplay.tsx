import { useContext } from "react";
import { CounterContext } from "../../context/CounterProvider";

const ContextDisplay = () => {
  const { count } = useContext(CounterContext)!; // null보장 연산자
  console.log("display rendering");

  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
};
export default ContextDisplay;
