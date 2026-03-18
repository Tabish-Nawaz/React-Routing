import {useState,useMemo } from 'react'

function Parent() {
    const [count, setCount] = useState(0);

    const user = useMemo(() => ({name: "Tabish", age: 21}),[])

    console.log("Parent Rendered");
    

  return (
    <>
        <h1>Parent Count: {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increse Counter</button>
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