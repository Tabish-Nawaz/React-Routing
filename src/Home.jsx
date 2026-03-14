import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  const goToAbout = () => {
    navigate("/about")
  }


  return (
    <div>
        <h1>Wellcome to Home Page.</h1><br /><hr />
        <button onClick={goToAbout}>Go to About</button>
    </div>
  )
}

export default Home