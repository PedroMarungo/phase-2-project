import { useEffect, useState } from "react";
function BlogLists() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return <div>BlogLists</div>;
}

export default BlogLists;
