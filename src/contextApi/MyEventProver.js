import { createContext } from "react"

const MyEventContext = createContext()

const MyEventProver = ({children}) => {
    const event = ()
  return (
    <MyEventContext.Provider value={}>

    </MyEventContext.Provider>
  )
}

export default MyEventProver