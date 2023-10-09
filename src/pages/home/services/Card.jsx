import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({data}) => {
  const navigate = useNavigate()
  const {id,title, description,image}=data
 

  
  return (
    <div className="card  bg-base-100 rounded-lg shadow-xl">
    <figure>
      <img src={image} alt="image" className="w-full h-[300px] lg:h-44 rounded-t-lg" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{description.slice(0,70)}...</p>
      <div className="card-actions">
        <button onClick={()=>navigate(`/card/${id}`)} className="btn bg-green-700 text-gray-200 hover:bg-green-800">See Details</button>
      </div>
    </div>
  </div>
  )
}

Card.propTypes={
  data: PropTypes.object.isRequired,

}

export default Card