import { useState } from "react";
import "../styles/calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      const res = Function(`"use strict"; return (${input})`)();
      setInput(res.toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator-container">
  <h1>Calculator</h1>
  <input type="text" value={input} readOnly />

  <button className="clear-btn" onClick={clearInput}>C</button>
  <button onClick={() => handleClick("/")}>/</button>
  <button onClick={() => handleClick("*")}>*</button>
  <button onClick={() => handleClick("-")}>-</button>
  <br />

  <button onClick={() => handleClick("7")}>7</button>
  <button onClick={() => handleClick("8")}>8</button>
  <button onClick={() => handleClick("9")}>9</button>
  <button onClick={() => handleClick("+")}>+</button>
  <br />

  <button onClick={() => handleClick("4")}>4</button>
  <button onClick={() => handleClick("5")}>5</button>
  <button onClick={() => handleClick("6")}>6</button>
  <button className="equal-btn" onClick={calculate}>=</button>
  <br />

  <button onClick={() => handleClick("1")}>1</button>
  <button onClick={() => handleClick("2")}>2</button>
  <button onClick={() => handleClick("3")}>3</button>
  <button onClick={() => handleClick("0")}>0</button>
</div>
  );
}

export default Calculator;