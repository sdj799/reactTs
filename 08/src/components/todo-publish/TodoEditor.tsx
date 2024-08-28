import { useState } from "react";
import Button from "../html/Button";
import Input from "../html/Input";
//import { todoActionType } from "../../reducer/todoReducer";
import { useTodoStore } from "../../stores/todoStore";

const TodoEditor = () => {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(input);
    //todoDispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };
  return (
    <>
      <form
        action=""
        className="grid gap-4"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <div className="flex gap-2">
          <Input
            type="text"
            value={input}
            placeholder="Enter Todo List"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
export default TodoEditor;
