
import { useContext, useState } from "react"
import FindUs from "./findUs/FindUs"
import Cards from "./services/Cards"
import Services from "./services/Services"
import Team from "./team/Team"
import Feedback from "./feedback/Feedback"
import Banner from "./banner/Banner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyAuthContext } from "../../contextApi/MyAuthProvider"




const Home = () => {
  const [event, setEvent] = useState('')
  const {loginToast} = useContext(MyAuthContext)
  // console.log("from Home : ",loginToast.isBoolean)
  if(loginToast.isBoolean)
    toast.success("Login successfull!")
  const handleEventType=(type)=>{
    setEvent(type)
  }


  return (
    <div className="w-[360px] md:w-[750px] lg:w-width mx-auto">
      <Banner/>
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-4 my-10">
       
          <Services handleEventType={handleEventType}/>
        
        <main  className=" lg:col-span-2">
          <Cards handleEventType={event}/>
        </main>
        {/* right div (FindUs) */}
       
          <FindUs/>
       
 
      </div>
      <Team/>
      <Feedback/>

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

export default Home