import PropTypes from 'prop-types';

const Card = ({data, handleEventType}) => {
  const {title, description, price, image, event_type}=data
 
  
  
  
  
  return (
    <div className="card w-full bg-base-100 rounded-lg shadow-xl">
    <figure>
      <img src={image} alt="image" className="w-full h-[300px] rounded-t-lg" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{description.slice(0,110)}...</p>
      <p className=' font-bold my-3'>Price : {price}</p>
      <div className="card-actions">
        <button className="btn bg-green-700 text-gray-200 hover:bg-green-800">See Details</button>
      </div>
    </div>
  </div>
  )
}

Card.propTypes={
  data: PropTypes.object.isRequired,
}

export default Card