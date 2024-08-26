import { useState } from "react";
import TodoEditor from "./TodoEditor";
import { TList } from "../../types/todo";
import TodoList from "./TodoList";
const Todo = () => {
  const [todoList, setTodoList] = useState<TList[]>([]);
  const addTodo = (todo: string) => {
    setTodoList((todoList) => [
      ...todoList,
      { id: Math.random(), todo, checked: false },
    ]);
  };
  const toggleTodo = (id: number) => {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
      )
    );
  };
  const deleteHandler = (id: number) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4F4F4F] bg-white border border-[#D1D1D1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <TodoEditor addTodo={addTodo} />
          {/* 목록 */}
          <TodoList
            deleteHandler={deleteHandler}
            toggleTodo={toggleTodo}
            todoList={todoList}
          />
        </div>
      </div>
    </>
  );
};
export default Todo;
