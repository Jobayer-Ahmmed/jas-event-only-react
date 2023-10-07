import { Link } from "react-router-dom"


const MemberShip = () => {
  return (
    <aside>
    <div className="bg-gray-100 p-5 rounded-lg mb-10">
      <div>
        <h4 className="mb-3 text-xl">Login Now!</h4>
        <div className="w-full h-[2px] bg-priColor"></div>
        <form method="post" className="mt-3">
          <input type="email" name="email" placeholder="Enter Email" id="" className="w-full h-10 pl-3 mb-2 outline-none" /> <br />
          <input type="password" name="password" placeholder="Enter Password" id="" className="w-full h-10 pl-3 mb-2 outline-none"/> <br />
          <input type="submit" value="Login" id="" className="w-full bg-priColor text-lg text-white py-1" />
        </form>
      </div>
    </div>
    <div className="bg-gray-100 p-5 rounded-lg">
      <h4 className="mb-3 text-xl">Get Membership</h4>
      <div className="w-full h-[2px] bg-priColor"></div>
      <ul className="mt-3">
        <li className="mt-1"><Link target="">Gold</Link></li>
        <li className="mt-1"><Link target="">Platinium</Link></li>
      </ul> 
    </div>
  </aside>
  )
}

export default MemberShip