
import { useLoaderData } from "react-router-dom"
import Card from "./Card"




const Cards = () => {
  const getData = useLoaderData()
  
  return(
    <div className="grid grid-cols-1 gap-10">
      {
        getData.map(data=> <Card key={data.id} data={data}/>)
      }
    </div>
  )
 

}

export default Cards
