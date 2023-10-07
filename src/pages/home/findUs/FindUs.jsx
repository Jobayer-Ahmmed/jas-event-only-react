
import {FcGoogle} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"


const FindUs = () => {
  return (
    <aside>
    <div className="bg-gray-100 p-5 rounded-lg mb-10">
      <div>
        <h4 className="mb-3 text-xl">Login with!</h4>
        <div className="w-full h-[2px] bg-priColor"></div>
          <p className="mt-3 mb-2 cursor-pointer"><FcGoogle className="inline"/>  Google</p>
          <p className="cursor-pointer"><FaFacebookSquare className="inline"/>  Facebook</p>
      </div>
    </div>
    <div className="bg-gray-100 p-5 rounded-lg">
      <h4 className="mb-3 text-xl">Find On</h4>
      <div className="w-full h-[2px] bg-priColor"></div>
      <p className="cursor-pointer mt-3 mb-2"><FaFacebookSquare className="inline"/>  Facebook</p>
      <p className="cursor-pointer mb-2"><BsYoutube className="inline"/>  YouTube</p>
      <p className="cursor-pointer"><BsTwitter className="inline"/>  Twitter</p>
    </div>
  </aside>
  )
}

export default FindUs