
import { useLoaderData } from "react-router-dom"
import Card from "./Card";
import PropTypes from 'prop-types';
import {  useState } from "react";

const Cards = ({handleEventType}) => {

  const [length, setLength] = useState(4)
  const getData = useLoaderData()

    let datas = getData.filter(data=>data.event_type==handleEventType)

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      {
        datas.length?
        datas.slice(0, length).map(data=> <Card key={data.id} data={data}/>)
        : getData.slice(0,length).map(data=> <Card key={data.id} data={data}/>)

      }

      <div className={(length==getData.length)? 'hidden' : (length!=datas.length)? 'hidden':''}>
        <button onClick={()=>setLength(getData.length)} className="px-6 py-2 text-xl text-white bg-priColor rounded">See All</button>
      </div>
      {
        datas=null
      }
    </div>
  )
}

Cards.propTypes = {
  handleEventType: PropTypes.string
}


export default Cards

 
