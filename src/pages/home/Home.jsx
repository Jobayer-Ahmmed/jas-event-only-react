
import { useState } from "react"
import FindUs from "./findUs/FindUs"
import Cards from "./services/Cards"
import Services from "./services/Services"
import Slider from "./slider/Slider"



const Home = () => {
  const [event, setEvent] = useState('')
  const handleEventType=(type)=>{
    setEvent(type)
  }

  return (
    <div className="w-width mx-auto">
      <Slider/>
      <div className="grid lg:grid-cols-4  gap-6 my-10">
        <aside>
          <Services handleEventType={handleEventType}/>
        </aside>
        <main  className=" col-span-2">
          <Cards handleEventType={event}/>
        </main>
        {/* right aside (FindUs) */}
        <aside>
          <FindUs/>
        </aside>
 
    </div>
  </div>
  )
}

export default Home