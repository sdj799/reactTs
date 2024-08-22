/*
아래의 코드는 Todo List에서 사용되는 코드를 자바스크립트로 작성한 코드입니다.
위 코드를 타입스크립트로 변경하세요.
const todos = [];

const addTodo = (text) => {
  const todo = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  todos.push(todo);
};

const removeTodo = (id) => {
  const findIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(findIndex, 1);
};

const toggleTodo = (id) => {
  const find = todos.find((todo) => todo.id === id);
  find.completed = !find.completed;
};*/
interface Itodo {id:number; text: string; completed:boolean;}

const todos: Itodo[] = [];

const addTodo = (text: string) => {
  const todo: Itodo = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  todos.push(todo);
};

const removeTodo = (id: number) => {
  const findIndex = todos.findIndex((todo: Itodo) => todo.id === id);
  todos.splice(findIndex, 1);
};

const toggleTodo = (id: number) => {
  const find = todos.find((todo: Itodo) => todo.id === id);
  if(find) find.completed = !find.completed;
};