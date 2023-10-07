import { Link } from "react-router-dom"



const Services = () => {
  return (
    <div>
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
          {/* <Cards/> */}
        </main>
    </div>
  )
}

export default Services