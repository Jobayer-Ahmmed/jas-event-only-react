import PropTypes from 'prop-types';

const Customer = ({data}) => {
    const {customer_name, event_type, image, comments, rating} =data
   
  return (
    <div className=''>
       
        <div className="w-28 h-28  avatar  border-gray-400 border-[3px]">
            <img src={image} className='w-24 h-24 '/>
        </div>
     
      <p className='text-xl mt-2'>{customer_name}</p>
      <p className='font-bold'><span className='text-gray-500'>Organised</span> : {event_type}</p>
      <p>Rating : {rating}</p>
      <p className='mt-2 text-gray-500'>{comments}</p>
    </div>
  )
}
Customer.propTypes = {
    data: PropTypes.object,
}
export default Customer