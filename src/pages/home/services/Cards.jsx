
import { useLoaderData } from "react-router-dom"
import Card from "../card/Card"
import { useState } from "react"

 



const Cards = ({handleEventType}) => {
  
  const getData = useLoaderData()
  let datas = getData.filter(data=>data.event_type==handleEventType)
  console.log(datas)
  return(
    <div className="grid grid-cols-1 gap-10">
      {
        datas.length? datas.map(data=> <Card key={data.id} data={data}/>) : getData.map(data=> <Card key={data.id} data={data}/>)
      }
      {
        datas = null
      }
    </div>
  )
 

}

export default Cards
