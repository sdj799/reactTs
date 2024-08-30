import { create } from "zustand";
import { TPost, TPostStore } from "../type/post";
import { api } from "../api/api";

export const usePostStore = create<TPostStore>((set) => ({
  posts: null,
  post: null,
  fetchPosts: async (url?: string) => {
    const data = await api(url !== undefined ? url : "posts");
    set({ posts: data });
  },
  fetchPostsOne: async (id: string) => {
    const data = await api(`posts/${id}`);
    set({ post: data });
  },
  addPosts: async (formData: TPost) => {
    const data = await api("posts", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    return data;
  },
}));
