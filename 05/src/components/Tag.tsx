import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onClickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(radio);
  };
  const onChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDesc(e.target.value);
  const onChangeSelected = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);
  const onChangeChecked = () => setChecked((checked) => !checked);

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRadio(e.target.value);
  return (
    <>
      <form onSubmit={onClickHandler}>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          placeholder="Enter Password"
          autoComplete="off"
          value={password}
          onChange={onChangePassword}
        />
        <textarea value={desc} onChange={onChangeDesc}></textarea>
        <select value={selected} onChange={onChangeSelected}>
          <option>선택</option>
          <option value="apple">apple</option>
          <option value="banana">banana</option>
        </select>
        <br />
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeChecked}
        />{" "}
        agree
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={onChangeRadio}
        />{" "}
        male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={onChangeRadio}
        />{" "}
        female
        <button type="submit">로그인</button>
      </form>
    </>
  );
};
export default App;
