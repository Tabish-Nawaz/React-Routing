import {useState} from 'react'

function WithoutUseMemo() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const expensiveCalculation = () => {
        console.log("Running Expensive Calculation...");
        let total = 0
        for(let i=1;i<1000000000;i++) {
            total += 1;
        }
    
        return total;
    }

    const result = expensiveCalculation()

  return (
    <>
    <h1>Result : {result}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    <p>Count: {count }</p>
    </>
  )
}

export default WithoutUseMemo