import { useReducer, useState } from "react";
import { countReducer } from "../reducer/countReducer";

const CountReducer = () => {
  const [counterReducer, counterDispatch] = useReducer(countReducer, 0);

  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((counter) => counter + 1);
  const decrement = () => setCounter((counter) => counter - 1);
  const reset = () => setCounter(0);
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
      <br />
      <h1>Reducer Counter: {counterReducer}</h1>
      <button
        onClick={() => counterDispatch({ type: "decrement", payload: 10 })}
      >
        감소
      </button>
      <button onClick={() => counterDispatch({ type: "reset", payload: 0 })}>
        리셋
      </button>
      <button
        onClick={() => counterDispatch({ type: "increment", payload: 10 })}
      >
        증가
      </button>
    </>
  );
};
export default CountReducer;
