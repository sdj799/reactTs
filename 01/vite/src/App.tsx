//1. 인라인 스타일 방법
//1.1 style 속성을 사용해서 적용하는 방법

//2. 외부 스타일 방법
//2. 외부 css 파일을 만들어서 적용하는 방법
// 모든 컴포넌트가 영향을 받음
// import "./App.css";

//3. 모듈 css
//3.1 확장자가 .module.css 인 파일을 만들어서 적용하는 방법
import classNames from "classnames";
import classmodule from "classnames/bind";
import styles from "./App.module.css";
import Second from "./components/Second";
const App = () => {
  const isTrue = false;
  const cx = classmodule.bind(styles);
  return (
  <>
    <div className={styles.ccontainer} />
    <h1 className={classNames("foo", {bar: isTrue})}></h1>
    <h1 style={{
      // color:"red",
      // fontSize: '30px',
      // border: "1px solid black"  
      }
  }>App Component</h1>
    <p className={cx("title", {underline : isTrue})}>Sample Text</p>
    <Second/>
  </>
  )
};
export default App;