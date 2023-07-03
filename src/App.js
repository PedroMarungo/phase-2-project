import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav>
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
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
