import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <div>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreateBlog />} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
