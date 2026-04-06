import { useState } from 'react';

function Todo() {
  const [newTodo, setNewTodo] = useState(""); // input value
  const [todos, setTodos] = useState([]);     // todos list

  // Add new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); // clear input
    }
  };

  // Toggle completed status
  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Delete todo
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // remove by index
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      {/* Todo input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: "5px", width: "200px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>Add Todo</button>
      </form>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <span
              onClick={() => handleToggle(index)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(index)}
              style={{ padding: "2px 8px", cursor: "pointer" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;