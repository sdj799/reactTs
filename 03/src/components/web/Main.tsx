import SectionItem from "./SectionItem";

const Main = () => {
  const onClickHandler = (type: string) => {
    alert(type);
  };
  return (
    <>
      <main>
        <SectionItem
          id="section1"
          title="소개"
          content="여기에 소개 내용을 작성하세요."
          onClickHandler={onClickHandler}
        />
        <SectionItem
          id="section2"
          title="서비스"
          content="여기에 제공하는 서비스 내용을 작성하세요."
          onClickHandler={onClickHandler}
        />
        <SectionItem
          id="section3"
          title="연락처"
          content="여기에 연락처 정보를 작성하세요."
          onClickHandler={onClickHandler}
        />
      </main>
    </>
  );
};
export default Main;
