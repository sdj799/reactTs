import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const BlogView = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  console.log(searchParams.get("lang"));

  useEffect(() => {
    if (params.id === "1") {
      alert("관리자만 볼 수 있는 페이지입니다.");
      navigate("/");
    }
  }, []);

  const action = () => {
    alert("무거운 작업 끝!");
    navigate("/");
  };
  return (
    <>
      <h1>BlogView Component {params.id}</h1>
      <button onClick={action}></button>
    </>
  );
};
export default BlogView;
