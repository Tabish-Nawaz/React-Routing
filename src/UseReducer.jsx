import { useReducer } from "react"


function UseReducer() {
    const [checked, toggle] = useReducer((checked) => !checked, false)



    return (
        <>
            <input type="checkbox" checked={checked} onChange={toggle}/>
            {checked ? "checked" : "Not Checked"}
        </>
  )
}

export default UseReducer