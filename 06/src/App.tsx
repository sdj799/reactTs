import Memoization from "./components/memoization/Memoization";
import UseCallback from "./components/memoization/usecallback/UseCallback";
import UseDeferredValue from "./components/react-hook/usedefferedvalue/UseDeferredValue";
import UseTransition from "./components/react-hook/usetransition/UseTransition";
import Todo from "./components/todo-basic/Todo";

const App = () => {
  return (
    <>
      {/* <Todo /> */}
      {/* <UseTransition /> */}
      {/* <UseDeferredValue /> */}
      {/* <Memoization /> */}
      <UseCallback />
    </>
  );
};
export default App;
