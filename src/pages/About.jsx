function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      {/* Card */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          About Us 🌟
        </h1>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Welcome to our React App! This project is built to learn
          components, hooks, routing, and state management.
        </p>

        <p className="text-gray-600 mt-3 leading-relaxed">
          It includes a <span className="font-semibold">Todo App</span>,
          <span className="font-semibold"> Calculator</span>, and more interactive features.
        </p>

        <p className="text-gray-600 mt-3 leading-relaxed">
          I am currently learning React and building small projects to improve my skills step by step.
        </p>

        {/* Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => alert("Hello from About!")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default About;