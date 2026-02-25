import { useRef, useState } from "react";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const postImageInputFieldRef = useRef(null);
  const { handleCreatePost, loading } = usePost();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const file = postImageInputFieldRef.current.files[0];
    await handleCreatePost(file, caption);
    navigate("/");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-[#111827] p-6 sm:p-8 shadow-xl border border-white/10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-white">Create post</h1>
          <p className="mt-2 text-sm text-gray-400">
            Share something with your audience
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Image upload */}
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Upload image</label>

            <label
              className="flex flex-col items-center justify-center gap-2
                         h-36 rounded-lg bg-[#020617]
                         border border-dashed border-white/10
                         text-gray-400 text-sm cursor-pointer
                         hover:border-blue-500 transition-colors"
            >
              {image ? image.name : "Click to upload"}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
                ref={postImageInputFieldRef}
              />
            </label>
          </div>

          {/* Caption */}
          <div className="space-y-1">
            <label htmlFor="caption" className="text-sm text-gray-300">
              Caption
            </label>
            <textarea
              id="caption"
              rows="3"
              placeholder="Write something..."
              className="w-full resize-none rounded-lg bg-[#020617]
                         border border-white/10 px-3 py-2.5
                         text-white placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!image}
            className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white
                       hover:bg-blue-500 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
