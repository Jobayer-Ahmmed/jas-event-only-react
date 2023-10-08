
import {  NavLink } from "react-router-dom"
import PropTypes from 'prop-types';


const Services = ({handleEventType}) => {


  return (
    <div className="bg-gray-100 p-5 rounded-lg">
      <h3 className="mb-3 text-2xl">Services</h3>
      <div className="w-full h-[2px] bg-priColor"></div>
      <ul className="mt-3">
        <li id="services" className="mt-1" onClick={()=>handleEventType("weddings")}><NavLink >Weddings</NavLink></li>
        <li id="services" className="mt-1" onClick={()=>handleEventType("birthday_parties")}><NavLink >Birthday Parties</NavLink></li>
        <li id="services" className="mt-1" onClick={()=>handleEventType("anniversaries")}><NavLink >Anniversaries</NavLink></li>
        <li id="services" className="mt-1" onClick={()=>handleEventType("engagement_parties")}><NavLink >Engagement Parties</NavLink></li>
        <li id="services" className="mt-1" onClick={()=>handleEventType("retirement_parties")}><NavLink >Retirement Parties</NavLink></li>
        <li id="services" className="mt-1" onClick={()=>handleEventType("baby_shower")}><NavLink >Baby shower</NavLink></li>
      </ul>
  </div>

  )
}

Services.propTypes = {
  handleEventType: PropTypes.func
}

export default Services