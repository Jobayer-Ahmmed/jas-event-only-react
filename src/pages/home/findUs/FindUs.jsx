
import {FcGoogle} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import { useContext } from "react"
import { MyAuthContext } from "../../../contextApi/MyAuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"


const FindUs = () => {
  const {googleLogin} = useContext(MyAuthContext)
  const {githubLogin} = useContext(MyAuthContext)

  const handleGoogleLogin=()=>{
    googleLogin()
      .then((res)=>{
        console.log(res)
        toast.success("You have logged with Google successfully")
      })
      .catch(err=>console.log(err.message))
  }
  const handleGithubLogin=()=>{
    githubLogin()
      .then(res=>{
        console.log(res)
        toast.success("You have logged with GitHub successfully")
      })
      .catch(err=>console.log(err.message))
  }

  return (
    <aside>
    <div className="bg-gray-100 p-5 rounded-lg mb-10">
      <div>
        <h4 className="mb-3 text-xl">Login with!</h4>
        <div className="w-full h-[2px] bg-priColor"></div>
          <p onClick={handleGoogleLogin} className="mt-3 mb-2 cursor-pointer active:text-green-600"><FcGoogle className="inline"/>  Google</p>
          <p onClick={handleGithubLogin} className="cursor-pointer active:text-green-600"><AiFillGithub className="inline"/> GitHub</p>
      </div>
    </div>
    <div className="bg-gray-100 p-5 rounded-lg">
      <h4 className="mb-3 text-xl">Find Us On</h4>
      <div className="w-full h-[2px] bg-priColor"></div>
      <Link to="https://www.facebook.com/" className="cursor-pointer mt-3 mb-2 active:text-green-600 block"><FaFacebookSquare className="inline"/>  Facebook</Link>
      <Link to="https://www.youtube.com/" className="cursor-pointer mb-2 active:text-green-600 block"><BsYoutube className="inline"/>  YouTube</Link>
      <Link to="https://twitter.com/" className="cursor-pointer active:text-green-600 block"><BsTwitter className="inline"/>  Twitter</Link>
    </div>

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

  </aside>
  )
}

export default FindUs