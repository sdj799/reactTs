import React from "react";
import { AuthActionType } from "../reducer/authReducer";

const AuthReducerAction = (
  { authDispatch } = { authDispatch: React.Dispatch<AuthActionType> }
) => {
  return (
    <>
      <button
        onClick={() =>
          authDispatch({
            type: "LOGIN_REQUEST",
          })
        }
      >
        로그인 요청
      </button>
      <button
        onClick={() =>
          authDispatch({
            type: "LOGIN_SUCCESS",
            payload: { email: "sucoding@naver.com", name: "sucoding" },
          })
        }
      >
        로그인 성공
      </button>
      <button onClick={() => authDispatch({ type: "LOGIN_FAILURE" })}>
        로그인 실패
      </button>
      <button onClick={() => authDispatch({ type: "LOGOUT" })}>로그아웃</button>
    </>
  );
};
export default AuthReducerAction;
