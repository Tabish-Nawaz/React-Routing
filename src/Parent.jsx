import {useState, useMemo, useCallback } from 'react'
import Counter2 from './Counter2'

function Parent() {
    const [count, setCount] = useState(0);

    const user = useMemo(() => ({name: "Tabish", age: 21}),[])

    console.log("Parent Rendered");
    
    const HandleClick = useCallback(() => {
        console.log("Button Clicked")
    },[])

  return (
    <>
        <h1>Parent Count: {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increse Counter</button>
        <button onClick={HandleClick}>Buttton Counter 2</button>
        <Chlid user={user}/>
    </>
  )
}
function Chlid({user}) {
    console.log("Child Randered");
     
    return (
        <>
            <h2>User : {user.name}</h2>
        </>
    )    


}


export default Parent