const App = () => {
  const fruits = ["apple", "banana", "cherry"];
  return (
    <>
      <h1>내가 좋아하는 과일은?</h1>
      <ul>
        {fruits.length > 0 &&
          fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
    </>
  );
};
export default App;
