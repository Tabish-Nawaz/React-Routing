import { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Add todo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === "") return;

    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // Toggle complete
  const handleToggle = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  // Delete todo
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Start edit
  const handleEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  // Save edit
  const handleSave = (index) => {
    const updated = [...todos];
    updated[index].text = editText;
    setTodos(updated);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        <h1 className="text-2xl font-bold text-center mb-5">
          Todo App 🚀
        </h1>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-5">

          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo..."
            className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700">
            Add
          </button>
        </form>

        {/* List */}
        <ul className="space-y-3">

          {todos.length === 0 && (
            <p className="text-center text-gray-400">
              No todos yet 🚀
            </p>
          )}

          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
            >

              {/* TEXT / EDIT INPUT */}
              {editIndex === index ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-2 py-1 border rounded"
                />
              ) : (
                <span
                  onClick={() => handleToggle(index)}
                  className={`flex-1 cursor-pointer ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
              )}

              {/* ACTIONS */}
              <div className="flex gap-3 ml-3">

                {/* Edit / Save */}
                {editIndex === index ? (
                  <button
                    onClick={() => handleSave(index)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaCheck />
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(index, todo.text)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                )}

                {/* Delete */}
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Todo;