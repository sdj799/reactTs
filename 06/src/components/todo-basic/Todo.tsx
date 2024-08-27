import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { TodoProvider } from "../../context/TodoProvider";
const Todo = () => {
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4F4F4F] bg-white border border-[#D1D1D1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <TodoProvider>
            {/* 등록 */}
            <TodoEditor />
            {/* 목록 */}
            <TodoList />
          </TodoProvider>
        </div>
      </div>
    </>
  );
};
export default Todo;
