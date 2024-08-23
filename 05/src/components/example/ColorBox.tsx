import { useState } from "react";

const ColorBox = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <div
            style={{ backgroundColor: inputValue }}
            className="w-40 h-40 border border-slate-500"
          ></div>
          <input
            type="text"
            value={inputValue}
            className="border border-slate-500 w-40 mt-2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </div>
      </div>
    </>
  );
};
export default ColorBox;
