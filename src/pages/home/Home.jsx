
import { useState } from "react"
import MemberShip from "./memberShip/MemberShip"
import Cards from "./services/Cards"
import Services from "./services/Services"



const Home = () => {
  const [event, setEvent] = useState('')
  const handleEventType=(type)=>{
    setEvent(type)
  }

  return (
    <div className="grid lg:grid-cols-4 px-xPadding gap-6 my-10">
        <aside>
          <Services handleEventType={handleEventType}/>
        </aside>
        <main  className=" col-span-2">
          <Cards handleEventType={event}/>
        </main>
        {/* right aside (membership) */}
        <aside>
          <MemberShip/>
        </aside>
 
    </div>
  )
}

export default Home