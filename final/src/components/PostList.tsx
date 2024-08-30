import { useEffect } from "react";
import { usePostStore } from "../store/postStore";
import PostListItem from "./PostListItem";
const PostList = () => {
  const posts = usePostStore((state) => state.posts);
  const fetchPost = usePostStore((state) => state.fetchPosts);
  useEffect(() => {
    fetchPost();
  }, []);
  
  return (
    <>
      <section className="grid md:grid-cols-2 gap-[35px] mt-[80px] mb-[152px]">
        {posts?.map((post) => (
          <PostListItem key={post.id} {...post} />
        ))}
      </section>
    </>
  );
};
export default PostList;
