import React from "react";

const UseCallbackDisplay = ({
  count,
  title,
  setCount,
  fruits,
}: {
  count: { count: number };
  title: string;
  setCount: React.Dispatch<
    React.SetStateAction<{
      count: number;
    }>
  >;
  fruits: string[];
}) => {
  console.log(title);

  return (
    <>
      <h1>Count : {count.count}</h1>
    </>
  );
};
export default React.memo(UseCallbackDisplay);
// 재사용될 컴포넌트를 메모리에 저장되어있는 것에서 가져다 쓴다
// 프롭스의 변경이 있다면 재랜더링 된다.
// 무분별한 사용은 성능저하를 일으킨다.
// 고착 컴포넌트: 컴포넌트를 매개변수로 받아서 컴포넌트를 반환하는 컴포넌트
