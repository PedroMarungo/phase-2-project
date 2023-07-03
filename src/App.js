import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogLists from "./components/BlogLists";
import CreateBlog from "./components/CreateBlog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Blog Post List
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create New Blog Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<BlogLists />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
