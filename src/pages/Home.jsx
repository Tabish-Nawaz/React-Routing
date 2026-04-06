import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // navigation hook

  const goToTodo = () => {
    navigate("/todo"); // /todo route pe redirect
  };
  
    const goToCalculator = () => {
        navigate("/src/work/Calculator.jsx")
    }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>

      {/* Todo Button */}
      <button 
        onClick={goToTodo} 
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Todo App
      </button> <br />
      <button 
        onClick={goToCalculator} 
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Calculator
      </button>

      <br />

    </div>
  );
}

export default Home;