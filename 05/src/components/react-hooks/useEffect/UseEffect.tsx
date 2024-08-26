import { useState } from "react";
import UseEffectCount from "./UseEffectCount";
import UseEffectInterval from "./UseEffectInterval";

const UseEffect = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay((display) => !display)}>토글</button>
      <h1>UseEffect Component</h1>
      {display && <UseEffectInterval />}
    </>
  );
};
export default UseEffect;
