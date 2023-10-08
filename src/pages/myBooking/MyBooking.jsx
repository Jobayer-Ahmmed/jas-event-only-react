import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const MyBooking = ({data}) => {
    const {image, title,  price} = data

  return (
    <div className='flex active:drop-shadow-2xl lg rounded-lg' style={{ backgroundColor: card_bg }}>
        <div>
            <img src={image} alt="" className='h-full w-40 rounded-s-lg' />
        </div>
            <div className='p-5 flex flex-col justify-between'>
                <div>
                    <span className='rounded  text-sm font-medium px-3 py-1' style={{ backgroundColor: category_bg, color: text_button_bg}}>{category}</span>
                </div>
                <div>
                    <h3 className='my-1 text-xl font-semibold'>{title}</h3>
                    <p className='mb-5 font-semibold' style={{ color: text_button_bg}}>{price}</p>
                </div>
                <div>
                    <Link to={`/card-details/${title}`} className=' text-white px-4 py-2 rounded' style={{ backgroundColor: text_button_bg}}>View Details</Link>
                </div>
            </div>
    </div>
  )
}

MyBooking.propTypes = {
    data: PropTypes.object.isRequired,
}

export default MyBooking