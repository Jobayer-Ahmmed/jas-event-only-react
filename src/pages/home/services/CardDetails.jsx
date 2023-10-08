import { useLoaderData, useParams } from "react-router-dom"
import { getCard, saveCard } from "../../../localstorage/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardDetails = () => {
  const allData = useLoaderData()
  const {cardId} = useParams()

  const handleDonation=()=>{
    
    const c_id = getCard()
    console.log(c_id)
    saveCard(cardId)
    if(c_id.includes(cardId))
      toast.warn("You can book one event at one time")
    else
      toast.success("Thank you for booking")
  }
  
  const data = allData.find(data=> data.id == cardId)

  const {title, description, price, image}=data
  return (
    <div className="mt-topMargin px-12 lg:px-leftRightPadding">
      <div className="relative w-full">
        <img src={image} alt="" className=" w-full h-1/2 md:h-[500px] rounded-lg"/>
        <div className="absolute bottom-0 w-full h-14 md:h-[105px] bg-black bg-opacity-40 rounded-b-lg">
          <button onClick={handleDonation} className="absolute left-6 bottom-3 md:bottom-6 border-0  md:text-xl capitalize font-semibold text-white px-3 py-1 md:px-6 md:py-3 rounded" style={{backgroundColor:"#FF5733"}}>Book Now only at {price}</button>
        </div>
      </div>
      <h2 className=" text-2xl md:text-4xl font-bold mt-14 mb-6">{title}</h2>
      <p>{description}</p>

      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
    </div>
  )
}

export default CardDetails