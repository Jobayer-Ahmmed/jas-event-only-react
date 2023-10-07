
import MemberShip from "./memberShip/MemberShip"
import Cards from "./services/Cards"
import Services from "./services/Services"



const Home = () => {
  return (
    <div className="grid lg:grid-cols-4 px-xPadding gap-6">
        <Services/>
        <main  className=" col-span-2">
          <Cards/>
        </main>
        {/* right aside (membership) */}
        <MemberShip/>
 
    </div>
  )
}

export default Home