import { createContext, useMemo, useState } from "react";
import { TList } from "../types/todo";

type todoContextType = {
  todoList: TList[];
};
type todoContextFnType = {
  addTodo: (todo: string) => void;
  toggleTodo: (id: number) => void;
  deleteHandler: (id: number) => void;
};

export const TodoContext = createContext<todoContextType | null>(null);
export const TodoContextFn = createContext<todoContextFnType | null>(null);
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
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
  const memoFn = useMemo(() => ({ toggleTodo, addTodo, deleteHandler }), []);
  return (
    <TodoContextFn.Provider value={memoFn}>
      <TodoContext.Provider value={{ todoList }}>
        {children}
      </TodoContext.Provider>
    </TodoContextFn.Provider>
  );
};
