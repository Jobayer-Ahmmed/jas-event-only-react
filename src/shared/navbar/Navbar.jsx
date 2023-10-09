import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/jasevent.png";
import { useContext } from "react";
import { MyAuthContext } from "../../contextApi/MyAuthProvider";

const Navbar = () => {
  const { myUser, myLogOut } = useContext(MyAuthContext);

  const handleLogout = () => {
    myLogOut()
      .then(() => console.log("Logout successful"))
      .catch((err) => console.log(err.message));
  };

  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
      <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><Link to="/login" className="px-6 py-2 text-xl text-white bg-priColor rounded">Login</Link></li>
          <li><Link to="/register" className="px-6 py-2 text-xl text-white bg-priColor rounded">Register</Link></li>
      </ul>
    </div>
    <img src={logo} alt="" className="w-40 md:w-48" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  {
        myUser? 
        <div className="hidden lg:block ">
            <div className="flex justify-center items-center">
              <p>{myUser.displayName}</p>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={myUser.photoURL} alt="" />
                </div>
              </label>
              <button onClick={handleLogout} className="px-6 py-2 text-xl text-white bg-priColor rounded">Log Out</button>           
            </div> 
        </div>
        :
        <div className=" hidden lg:block">
          <Link to="/login" className="px-6 py-2 text-xl text-white bg-priColor rounded mr-6">Login</Link>
          <Link to="/register" className="px-6 py-2 text-xl text-white bg-priColor rounded">Register</Link>
        </div>
    }
  </div>
</div>
  );
};

export default Navbar;


