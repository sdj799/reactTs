import { create } from "zustand";
import { TTodo } from "../types/todo";

type TodoStoreType = {
  todos: TTodo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStoreType>((set) => ({
  todos: [],
  addTodo: (text) => {
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Math.random(), text: text, isCompleted: false },
      ],
    }));
  },
  deleteTodo: (id) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  },
}));
