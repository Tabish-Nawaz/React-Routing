import {useState, useMemo } from 'react'

function WithUseMemo() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const expensiveCalculation = (num) => {
        console.log("Running Expensive Calculation...");
        let total = 0
        for(let i=1;i<1000000000;i++) {
            total += 1;
        }
    
        return total + num;
    }

    const result = useMemo(() => expensiveCalculation(count),[count])

  return (
    <>
    <h1>Result : {result}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    <p>Count: {count }</p>
    </>
  )
}

export default WithUseMemo