import useInput from "./useInput";

const App = () => {
  // const [formState, seFormState] = useState({
  //   email: "",
  //   password: "",
  //   name: "",
  //   date: "",
  // });
  // const onChangeFormState = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   seFormState((formState) => ({
  //     ...formState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeName] = useInput("");
  const [date, onChangeDate] = useInput("");

  return (
    <>
      {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
      {JSON.stringify({ email, password, name, date }, null, 2)}
      <input type="email" name="email" value={email} onChange={onChangeEmail} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChangePassword}
      />
      <input type="text" name="name" value={name} onChange={onChangeName} />
      <input type="date" name="date" value={date} onChange={onChangeDate} />
    </>
  );
};
export default App;
