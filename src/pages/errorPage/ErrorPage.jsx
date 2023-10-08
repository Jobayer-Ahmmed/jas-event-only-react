import { Link } from "react-router-dom"
import errLogo from "../../assets/images/errorpage.png"

const ErrorPage = () => {
  return (
    <div className="w-2/3 mx-auto mt-10">
        <img src={errLogo} className="w-[400px] h-[250px] mx-auto" alt="" />
        <h3 className="text-4xl font-bold  text-center my-5">Opps! Page Not Found</h3>
        <h4 className="text-3xl font-bold text-center">404 error</h4>
        <div className="flex justify-center mt-5">
            <Link to="/" className="px-6 py-2 border-gray-600 border-[2px] hover:bg-gray-100">Go Home</Link>
        </div>
    </div>
  )
}

export default ErrorPage