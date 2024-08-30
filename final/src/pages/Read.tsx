import PostRead from "../components/PostRead";
import PostRelative from "../components/PostRelative";

const Read = () => {
  return (
    <>
      <PostRead />
      {/* 관련 게시물 */}
      <PostRelative />
    </>
  );
};
export default Read;
