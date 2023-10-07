import { Link } from "react-router-dom"
import Cards from "./card/Cards"


const Home = () => {
  return (
    <div className="grid lg:grid-cols-4 px-xPadding gap-6">
        {/* left asise (services) */}
        <aside>
          <div className="bg-gray-100 p-5 rounded-lg">
            <h3 className="mb-3 text-2xl">Services</h3>
            <div className="w-full h-[2px] bg-priColor"></div>
            <ul className="mt-3">
              <li className="mt-1"><Link target="">Weddings</Link></li>
              <li className="mt-1"><Link target="">Birthday Parties</Link></li>
              <li className="mt-1"><Link target="">Anniversaries</Link></li>
              <li className="mt-1"><Link target="">Engagement Parties</Link></li>
              <li className="mt-1"><Link target="">Retirement Parties</Link></li>
              <li className="mt-1"><Link target="">Baby shower</Link></li>
            </ul>
          </div>
        </aside>
        <main  className="bg-gray-200 col-span-2">
          <Cards/>
        </main>
        {/* right aside (membership) */}
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
    </div>
  )
}

export default Home