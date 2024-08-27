import { useDeferredValue, useState } from "react";

const UseDeferredValue = () => {
  const [input, setInput] = useState("");
  const [dummy, setDummy] = useState<number[]>([]);
  const defferedValue = useDeferredValue(dummy);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    // 값의 부하만 낮출때는 useDefferedValue를 사용한다
    const i: number[] = [];
    for (let j = 0; j < 10000; j++) {
      i.push(j);
    }
    setDummy((dummy) => [...dummy, ...i]);
  };
  return (
    <>
      <h1>UseDeferredValue</h1>
      <input type="text" value={input} onChange={onChange} />
      <ul>
        {defferedValue.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </>
  );
};
export default UseDeferredValue;
