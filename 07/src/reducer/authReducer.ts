type User = { email: string; name: string };
type AuthReducerType = {
  isAuth: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
};
export type AuthActionType =
  | { type: "LOGIN_REQUEST" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" };
export const authReducer = (state: AuthReducerType, action: AuthActionType) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: true,
        loading: false,
        error: null,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuth: false,
        error: "아이디와 비밀번호를 확인해주세요",
        user: null,
      };
    case "LOGOUT":
      return { ...state, isAuth: false, error: null, user: null };
    default:
      return state;
  }
};
