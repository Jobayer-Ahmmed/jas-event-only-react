import PropTypes from 'prop-types';

const Member = ({data}) => {
    const {name, position, image, description} =data
   
  return (
    <div>
       
            <div className="w-28 h-28  avatar  border-gray-400 border-[3px] rounded-full">
                <img src={image} className='w-24 h-24  rounded-full'/>
            </div>
     
      <p className='text-xl mt-2'>{name}</p>
      <p className='font-bold'>{position}</p>
      <p className='mt-2 text-gray-500'>{description}</p>
    </div>
  )
}
Member.propTypes = {
    data: PropTypes.object,
}
export default Member