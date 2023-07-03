import { useEffect, useState } from "react";
function BlogLists() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://blog-app-data.onrender.com/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Blog Posts</h2>
      {blogs.map((blog) => (
        <div className="card mb-3" key={blog.id.toString()}>
          <div className="card-body">
            <h3 className="card-title">
              <strong>Blog Title: </strong>
              {blog.title}
            </h3>
            <p className="card-subtitle mb-2 text-muted">
              <strong>Author: </strong>
              {blog.author}
            </p>
            <p className="card-text">
              <strong>blog content: </strong>
              {blog.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogLists;
