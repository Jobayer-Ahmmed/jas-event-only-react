import { useEffect, useState } from "react"
import Customer from "./Customer"


const Feedback = () => {
    const [allData, setAllData] = useState([])

    useEffect(()=>{
      fetch("./customerData.json")
      .then(res=>res.json())
      .then(data=>setAllData(data))
    },[])
    console.log(allData)
    return (
      <div className=" mb-14">
        <h2 className="text-3xl font-bold text-center mb-2">Customer Feedback</h2>
        <div className="w-[10%] h-[2px] mx-auto bg-priColor mb-8"></div>
        <div className="grid grid-cols-4 gap-8">
        
          {
            allData.map(data=><Customer key={data.id} data={data}/>)
          }
        </div>
      </div>
    )
  }

export default Feedback