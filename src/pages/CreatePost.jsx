import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return alert("Please enter both title and description.");
    }

    try {
      await API.post("/posts", { title, description }); 
      navigate("/home");
    } catch (err) {
      console.error("Post creation failed:", err);
      alert("Failed to create post.");
    }
  };

  if (!user) {
    return (
      <div className="p-6 text-center text-lg font-medium">
        Please log in to create a post.
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded shadow"
      >
        {/* Header */}
        <div className="mb-4 flex items-center gap-4">
          <img
            src="/user-image.png"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-lg">{user.name}</p>
          </div>
        </div>

        {/* Title Field */}
        <input
          type="text"
          className="w-full border rounded p-3 mb-4"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description Field */}
        <textarea
          rows="4"
          className="w-full border rounded p-3"
          placeholder="Write your post description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
