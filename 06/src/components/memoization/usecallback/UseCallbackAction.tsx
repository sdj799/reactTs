import React from "react";

const UseCallbackAction = ({
  increment,
  decrement,
}: {
  increment: () => void;
  decrement: () => void;
}) => {
  console.log("UseCallbackAction");

  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
};
export default React.memo(UseCallbackAction);
