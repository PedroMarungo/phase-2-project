import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { title, author, content };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then(() => {
        setTitle("");
        setAuthor("");
        setContent("");
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  };
  return <div>CreateBlog</div>;
}

export default CreateBlog;
