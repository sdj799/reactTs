import React, { useContext, useState } from "react";
import Input from "../html/Input";
import Button from "../html/Button";
import { TodoContextFn } from "../../context/TodoProvider";

const TodoEditor = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContextFn)!;
  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  console.log("editor rendering");

  return (
    <>
      <form
        action=""
        className="grid gap-4"
        onSubmit={(e) => onsubmitHandler(e)}
      >
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Todo List"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-[#4F4F4F] text-white w-[77px] shrink-0 rounded-lg"
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
export default React.memo(TodoEditor);
