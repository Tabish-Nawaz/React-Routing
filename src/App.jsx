import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Todo from "./work/Todo.jsx";
import Calculator from "./work/Calculator.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>

      {/* 🔥 NAVBAR */}
      <nav className="bg-gray-900 text-white px-5 py-4 flex justify-between items-center relative z-50">

        <h1 className="text-xl font-bold text-blue-400">
          My App
        </h1>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(true)}
          className="text-2xl md:hidden block"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link className="hover:text-blue-400" to="/">Home</Link>
          <Link className="hover:text-blue-400" to="/about">About</Link>
          <Link className="hover:text-blue-400" to="/contact">Contact</Link>
          <Link className="hover:text-blue-400" to="/todo">Todo</Link>
          <Link className="hover:text-blue-400" to="/calculator">Calculator</Link>
        </div>
      </nav>

      {/* 🔥 OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* 🔥 SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="text-white text-2xl p-4"
        >
          ✕
        </button>

        {/* Links */}
        <div className="flex flex-col gap-5 px-6 mt-4 text-lg">

          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/todo">Todo</Link>
          <Link onClick={() => setOpen(false)} to="/calculator">Calculator</Link>

        </div>
      </div>

      {/* 🔥 PAGE CONTENT */}
      <div className="bg-gray-100 min-h-[calc(100vh-70px)] p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;