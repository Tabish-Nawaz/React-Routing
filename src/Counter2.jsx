import {useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount((prev) => prev + 1)
    }

    return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increase</button>
    </div>
  )
}

export default Counter2