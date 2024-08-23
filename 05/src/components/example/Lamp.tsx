import { useState } from "react";
import "../css/style.css";

const Lamp = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <img
        src={isOn ? "/b_on.png" : "/b_off.png"}
        alt="전구이미지"
        onClick={() => setIsOn((isOn) => !isOn)}
      />
    </>
  );
};
export default Lamp;
