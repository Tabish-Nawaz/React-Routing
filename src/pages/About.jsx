import React from "react";
import "../styles/about.module.css"; 

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
<p>
  Welcome to our React App! 🌟✨  
  This page gives you information about the app, its features, and how it works.
</p>

<p>
  Our app includes a <strong>Calculator</strong>, a <strong>Todo App</strong>, and other interactive components.
</p>

<p>
  I am a student currently learning <strong>React</strong>. My goal is to understand how to build interactive and dynamic web applications using components, hooks, and state management.  
  I enjoy practicing by creating small projects and exploring new features in React step by step.
</p>

      <button className="about-btn" onClick={() => alert("Hello from About!")}>
        Learn More
      </button>
    </div>
  );
}

export default About;