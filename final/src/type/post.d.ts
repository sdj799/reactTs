export type TPost = {
  id?: string;
  title: string;
  category: string;
  writer: string;
  desc: string;
  thumb: string;
  thumbAvatar: string;
  createdAt: Date;
};
export type TPostStore = {
  posts: Tpost[] | null;
  post: TPost | null;
  fetchPosts: (url?: string) => void;
  fetchPostsOne: (id: string) => void;
  addPosts: (formData: TPost) => Promise<TPost>;
};
