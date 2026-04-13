import { useEffect, useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  // Add value (buttons + keyboard)
  const appendValue = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear
  const clear = () => {
    setInput("");
  };

  // Backspace
  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Calculate result
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  // 🔥 Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      // numbers & operators
      if (
        /[0-9+\-*/.]/.test(key)
      ) {
        appendValue(key);
      }

      // Enter = result
      else if (key === "Enter") {
        e.preventDefault();
        calculate();
      }

      // Backspace = delete
      else if (key === "Backspace") {
        backspace();
      }

      // Escape = clear
      else if (key === "Escape") {
        clear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      {/* Calculator */}
      <div className="w-full max-w-xs bg-white shadow-2xl rounded-2xl p-5">

        <h1 className="text-center text-2xl font-bold mb-4">
          Calculator 🧮
        </h1>

        {/* Display */}
        <div className="bg-gray-900 text-white text-right text-xl p-4 rounded-lg mb-4 min-h-[60px] break-all">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

          <button onClick={clear} className="col-span-2 bg-red-500 text-white p-3 rounded-lg">
            C
          </button>

          <button onClick={backspace} className="bg-yellow-500 text-white p-3 rounded-lg">
            ⌫
          </button>

          <button onClick={() => appendValue("/")} className="bg-gray-200 p-3 rounded-lg">
            ÷
          </button>

          <button onClick={() => appendValue("7")} className="bg-gray-100 p-3 rounded-lg">7</button>
          <button onClick={() => appendValue("8")} className="bg-gray-100 p-3 rounded-lg">8</button>
          <button onClick={() => appendValue("9")} className="bg-gray-100 p-3 rounded-lg">9</button>
          <button onClick={() => appendValue("*")} className="bg-gray-200 p-3 rounded-lg">×</button>

          <button onClick={() => appendValue("4")} className="bg-gray-100 p-3 rounded-lg">4</button>
          <button onClick={() => appendValue("5")} className="bg-gray-100 p-3 rounded-lg">5</button>
          <button onClick={() => appendValue("6")} className="bg-gray-100 p-3 rounded-lg">6</button>
          <button onClick={() => appendValue("-")} className="bg-gray-200 p-3 rounded-lg">-</button>

          <button onClick={() => appendValue("1")} className="bg-gray-100 p-3 rounded-lg">1</button>
          <button onClick={() => appendValue("2")} className="bg-gray-100 p-3 rounded-lg">2</button>
          <button onClick={() => appendValue("3")} className="bg-gray-100 p-3 rounded-lg">3</button>
          <button onClick={() => appendValue("+")} className="bg-gray-200 p-3 rounded-lg">+</button>

          <button onClick={() => appendValue("0")} className="col-span-2 bg-gray-100 p-3 rounded-lg">0</button>

          <button onClick={() => appendValue(".")} className="bg-gray-100 p-3 rounded-lg">.</button>

          <button onClick={calculate} className="bg-green-500 text-white p-3 rounded-lg">
            =
          </button>

        </div>
      </div>
    </div>
  );
}

export default Calculator;