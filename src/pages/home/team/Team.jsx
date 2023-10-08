import { useEffect, useState } from "react"
import Member from "./Member"


const Team = () => {
  const [allData, setAllData] = useState([])

  useEffect(()=>{
    fetch("./teamData.json")
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])
console.log(allData)
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Meet Our team</h2>
      <div className="w-[10%] h-[2px] mx-auto bg-priColor mt-3 mb-8"></div>
      <div className="grid grid-cols-4 gap-8">
      
        {
          allData.map(data=><Member key={data.id} data={data}/>)
        }
      </div>
    </div>
  )
}

export default Team