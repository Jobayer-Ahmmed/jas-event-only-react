
import { useLoaderData } from "react-router-dom"
import Card from "./Card";
import PropTypes from 'prop-types';

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

Cards.propTypes = {
  handleEventType: PropTypes.string
}


export default Cards
