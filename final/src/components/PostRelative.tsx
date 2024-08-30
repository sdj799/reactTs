import { useParams } from "react-router-dom";
import { usePostStore } from "../store/postStore";
import { useEffect } from "react";
import PostRealativeItem from "./PostRealativeItem";

const PostRelative = () => {
  const fetchPosts = usePostStore((state) => state.fetchPosts);
  const posts = usePostStore((state) => state.posts);
  const params = useParams();
  useEffect(() => {
    fetchPosts(`posts?id_ne=${params.id}`);
  }, [params.id]);
  return (
    <>
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-[26px] sm:text-[34px] md:text-[30px] font-bold mb-[20px]">
          Recommand Reading
        </h3>
        <ul className="[&>li]:mb-[30px]">
          {posts?.map((post) => (
            <PostRealativeItem key={post.id} {...post} />
          ))}
        </ul>
      </section>
    </>
  );
};
export default PostRelative;
