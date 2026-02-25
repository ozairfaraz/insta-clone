import { useContext } from "react";
import { PostContext } from "../post.context";
import { createPost, getPosts } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getPosts();
    setFeed(data.posts);
    console.log(data.posts);
    setLoading(false);
  };

  const handleCreatePost = async (imageFile, caption) => {
    setLoading(true);
    const data = await createPost(imageFile, caption);
    setFeed([data.post, ...feed]);
    setLoading(false);
  };



  return {
    loading,
    feed,
    post,
    handleGetFeed,
    handleCreatePost,
  };
};
