import { NavLink } from "react-router-dom"


function First_event() {
    return (
        <div className="min-h-screen w-full">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold"> Event Details</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-fuchsia-950 w-323 mt-14 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold hover:text-red-600">Home</a></li>
                                <hr className="w-3 h-1 mt-2 mb-1 rounded-full bg-white text-white" />
                          <NavLink to="/archive_event">
                        <li><a href="#" className="text-white py-8 font-bold hover:text-red-600">Event</a></li>
                           </NavLink>    
                               <hr className="w-3 h-1 mt-2 mb-1 rounded-full bg-white border text-white" />
                         <li><h1 className=" tracking-tight py-6 text-white font-bold ">21st April, 2024 | LCF</h1></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default First_event