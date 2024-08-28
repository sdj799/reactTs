import { useCountStore } from "../../stores/countStore";
import A from "./A";

const ZustandEx = () => {
  const { count } = useCountStore();
  return (
    <>
      <h1>ZustanEx Component</h1>
      <h1>count: {count}</h1>
      <A />
    </>
  );
};
export default ZustandEx;
