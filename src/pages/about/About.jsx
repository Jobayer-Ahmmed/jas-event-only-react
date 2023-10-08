import { useContext } from "react"
import { MyAuthContext } from "../../contextApi/MyAuthProvider"


const About = () => {
  const {a} = useContext(MyAuthContext) 
  return (
    <div>
    <p>About</p>
    <p>{a}</p>
    </div>
  )
}

export default About