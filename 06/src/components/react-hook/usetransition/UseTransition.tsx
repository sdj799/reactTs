import { useState, useTransition } from "react";

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [dummy, setDummy] = useState<number[]>([]);
  const [pending, startTranstion] = useTransition();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    startTranstion(() => {
      // 시스템 부하를 낮춰줄 코드
      // 코드를 비동기로 실행
      // 단점: 글자가 많을수록 더 느려짐
      const i: number[] = [];
      for (let j = 0; j < 10000; j++) {
        i.push(j);
      }
      setDummy(i);
    });
  };
  return (
    <>
      <h1>UseTranstion</h1>
      <input type="text" value={input} onChange={onChange} />
      {!pending ? (
        <ul>
          {dummy.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ) : (
        <li>Loading</li>
      )}
    </>
  );
};
export default UseTransition;
