const If = () => {
  const isLogin = false;
  return <>{isLogin ? <h1>Logined!</h1> : <h1>Not Logined!</h1>}</>;
};
export default If;
