import { useState } from "react";

const D = () => {
  console.log("D");

  const [text, setText] = useState("");
  return (
    <>
      <h1>D Component</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};
export default D;
