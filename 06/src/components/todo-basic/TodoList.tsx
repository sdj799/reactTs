import { TList } from "../../types/todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todoList,
  deleteHandler,
  toggleTodo,
}: {
  todoList: TList[];
  deleteHandler: (index: number) => void;
  toggleTodo: (id: number) => void;
}) => {
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todoList.map((todo) => (
          <TodoListItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
