// class -> getter, setter
import { useState } from "react";

const App = () => {
  // 불변성
  // 불변성 -> 값이 변하지 않는 특징
  // 불변성을 지켜서 값을 변경해줘야합니다.
  // 리액트에서 값을 바꿀때, 새로운 값을 만들어서 변경해줘라.

  const [num, setNum] = useState(0); // -> hook -> 함수()
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "아침먹기",
      complete: false,
    },
  ]);
  const onClickHandler = () => {
    setNum(num + 1); // 비동기일떄 사용
    setNum(() => {
      return num + 1;
    }); // 동기 -> 기다려주고, 비동기 -> 안기다려주는거
    console.log(num);
  };

  // slice ->
  // filter
  // map
  // reduce
  // concat
  // replace
  const onFruitAdd = () => {
    // setFruits(["cherry"]);
    setFruits((fruits) => fruits.slice(1));
  };

  const addTodos = () => {
    setTodos(todos.concat({ id: 2, text: "점심먹기", complete: false }));
    setTodos((todos) => [
      ...todos,
      { id: 2, text: "점심먹기", complete: false },
    ]);
  };
  return (
    <>
      <h1>Num: {num}</h1>
      <button onClick={onClickHandler}>숫자변경</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={onFruitAdd}>과일 추가</button>
      <button onClick={addTodos}>할일 추가</button>
    </>
  );
};
export default App;
