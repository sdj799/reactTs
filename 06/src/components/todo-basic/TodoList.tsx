import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const { todoList } = useContext(TodoContext)!;

  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
