import { useReducer } from 'react'
import UseReducer from "./UseReducer"


function Form() {

    function reducer(state ,action) {
      return {
        ...state,
        [action.name] : action.value
      }    
    }

    const [formData, dispatch] = useReducer(reducer, {
        username: "",
        email: ""
    })

function handleChange(e) {
    dispatch({
        name: e.target.name,
        value: e.target.value
    })
}

  return (
        <form>
            <input type="text" name='username' placeholder='User Name'
            value={formData.username}
            onChange={handleChange}
            />
            <input type="text" name='email' placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            />
            <p>
                {formData.username} = {formData.email}
            </p>
            <UseReducer/>

        </form>
  )
}

export default Form