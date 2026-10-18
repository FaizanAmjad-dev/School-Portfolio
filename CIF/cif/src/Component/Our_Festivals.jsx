import first from "../assets/1event.jpg"
import second from "../assets/2event.jpg"
import third from "../assets/3event.jpg"
import { NavLink } from "react-router-dom"


function Our_Festivals() {
  return (
    <div className="min-h-screen w-full">
      {/*Backgroaund image */}
      <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
        <div className="ml-77  mt-38">
          <h1 className="text-[57px] text-white font-bold"> Our Festivals</h1>
        </div>
        <div>
          <ul className="ml-77 flex flex-row items-center bg-purple-950 w-323 mt-14 text-white h-16 gap-x-4 rounded-xl ">
            <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold hover:text-red-600">Home</a></li>
           <hr className="w-3 h-1 mt-2 mb-1 rounded-full bg-white text-white" />
            <li><h1 className=" tracking-tight py-6 text-white font-bold ">Our Festivals</h1></li>
          </ul>
        </div>
      </div>
      {/*event navlink*/}
      <nav>
      {/*main EWvent part*/}
      <div className="flex flex-row gap-x-4 w-full justify-center mt-22">
        {/*third event*/}
        <NavLink to="/third_event">
        <div className="w-90 h-84 ">
         <img src={third} alt="" className="object-cover" />
        </div >
        </NavLink>
        {/*second event*/}
        <NavLink to="/second_event">
        <div className="w-90 h-84 ">
        <img src={second} alt="" className="object-cover" />
        </div>
        </NavLink>
        {/* first evet*/}
        <NavLink to="/first_event">
        <div className="w-90 h-84 ">
        <img src={first} alt="" className="object-cover" />
        </div>
        </NavLink>
      </div>
      </nav>

    </div>
  )
}
export default Our_Festivals