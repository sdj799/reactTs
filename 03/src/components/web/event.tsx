// 1. 폼 이벤트
// 1.1 onChange, onSubmit

// 2. 마우스 이벤트
// 2.1 onClick, onMouseEnter, onMouseLeave

// 3. 키보드 이벤트
// 3.1 onKeyDown, onKeyPress, onKeyUp

// 4. 포커스 이벤트
// 4.1 onFocus, onBlur

// 5. 드래그 이벤트
// 5.1 onDragStart, onDragOver, onDrop

// 6. 터치 이벤트
// 6.1 onTouchStart, onTouchMove, onTouchEnd

const event = () => {
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // alert("버튼이 클릭되었습니다.");
    console.log(event);
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    num: number
  ) => {
    console.log(event.target.value);
  };
  return (
    <>
      <h1
        onDrop={() => {
          console.log("drop");
        }}
      >
        App
      </h1>
      <button
        onClick={() => {
          alert("버튼이 클릭되었습니다");
        }}
      >
        클릭
      </button>
      <button onClick={onClickHandler}>클릭</button>{" "}
      {/* 매개변수가 필요 없을 경우*/}
      <button
        onClick={(e) => onClickHandler(e)}
        onMouseEnter={() => {
          alert("마우스가 올라갔습니다");
        }}
        onMouseLeave={() => {
          alert("마우스가 내려갔습니다.");
        }}
      >
        클릭
      </button>
      <input
        type="text"
        onFocus={() => {
          console.log("포커스가 되었습니다");
        }}
        onBlur={() => {
          console.log("포커스가 해제되었습니다.");
        }}
      />
      <div
        draggable
        onDrag={() => {
          console.log("드래그 시작");
        }}
        onDragEnd={() => {
          console.log("드래그 종료");
        }}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <input type="text" onChange={(e) => onChangeHandler(e, 10)} />
    </>
  );
};
export default event;
