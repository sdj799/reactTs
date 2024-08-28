//import { todoActionType } from "../../reducer/todoReducer";
import { useTodoStore } from "../../stores/todoStore";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos); // 이렇게 해야 재랜더링이 안 된다.
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
