import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 text-center">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Home Page 🚀
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Welcome to your React App!
        </p>

        <div className="mt-6 flex flex-col gap-3">

          <button
            onClick={() => navigate("/todo")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
          >
            Go to Todo App
          </button>

          <button
            onClick={() => navigate("/calculator")}
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-200"
          >
            Go to Calculator
          </button>

          <button
            onClick={() => navigate("/about")}
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition duration-200"
          >
            About Page
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;