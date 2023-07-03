import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  return <div>CreateBlog</div>;
}

export default CreateBlog;
