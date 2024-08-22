const Map = () => {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};
export default Map;
