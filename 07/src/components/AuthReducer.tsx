import { useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
import AuthReducerAction from "./AuthReducerAction";

const AuthReducer = () => {
  const [auth, authDispatch] = useReducer(authReducer, {
    isAuth: false,
    user: null,
    loading: false,
    error: null,
  });
  return (
    <>
      <h1>AuthReducer Component</h1>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
      <AuthReducerAction authDispatch={authDispatch} />
    </>
  );
};
export default AuthReducer;
