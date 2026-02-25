import React, { useEffect } from "react";
import Post from "../components/post";
import { usePost } from "../hooks/usePost";
import Nav from "../../shared/components/Nav";

const Feed = () => {
  const { loading, feed, post, handleGetFeed, handleCreatePost } = usePost();

  useEffect(() => {
    handleGetFeed();
    handleCreatePost();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main>
      <Nav />
      {feed
        .map((post) => {
          return <Post key={post._id} user={post.user} post={post} />;
        })
        .reverse()}
    </main>
  );
};

export default Feed;
