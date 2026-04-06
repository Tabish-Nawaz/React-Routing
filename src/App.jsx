import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Todo from "./work/Todo.jsx";
import Calculator from "./work/Calculator.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#333" }}>
        <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px", color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="//src/work/Calculator.jsx" element={<Calculator />} />
        
      </Routes>
    </Router>
  );
}

export default App;