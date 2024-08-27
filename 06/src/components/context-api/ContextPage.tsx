import ContextCount from "./ContextCount";
import ContextOther from "./ContextOther";
import { CounterProvider } from "../../context/CounterProvider";

const ContextPage = () => {
  return (
    <>
      <CounterProvider>
        <ContextCount />
      </CounterProvider>
      <ContextOther />
    </>
  );
};
export default ContextPage;
