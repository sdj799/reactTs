import { useState } from "react";

const Value = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
export default Value;
