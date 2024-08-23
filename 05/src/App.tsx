const App = () => {
  let num = 0;
  const onClickHandler = () => {
    num = 20;
    console.log(num);
  };
  return (
    <>
      <h1>Num: {num}</h1>
      <button onClick={onClickHandler}>숫자변경</button>
    </>
  );
};
export default App;
