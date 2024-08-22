import picture from "../assets/image/1.png";

const Image = () => {
  return (
    <>
      <h1>App Component</h1>
      {/* 외부 사이트 주소 */}
      <img
        src="https://cdn.pixabay.com/photo/2024/08/15/09/24/ai-generated-8970640_1280.png"
        alt=""
      />
      {/* src폴더에서 임포트
        리액트가 관리를 해줘서 암호화 + 최적화가 잘 된다. */}
      <img src={picture} alt="" />
      {/* public폴더에서 임포트 */}
      <img src="/1.png" alt="" />
    </>
  );
};
export default Image;
