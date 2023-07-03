import { useEffect, useState } from "react";
function BlogLists() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Blog Post</h2>
      {blogs.map((blog) => (
        <div className="card mb-3" key={blog.id.toString()}>
          <div className="card-body">
            <h3 className="card-title">
              <strong>Title: </strong>
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
