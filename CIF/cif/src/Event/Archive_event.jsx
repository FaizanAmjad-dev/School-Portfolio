import { TbCalendarWeekFilled } from "react-icons/tb";
import main from "../assets/children.jpg"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import roket from "../assets/roket.png"
import { NavLink } from "react-router-dom";

function Archive_event() {
    return (
        <div className="min-h-screen w-full">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold">Archives Event</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-fuchsia-950 w-323 mt-13 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold hover:text-red-600">Home</a></li>
                        <hr className="w-3 h-1 mt-2 mb-1 rounded-full bg-white text-white" />
                        <li className="text-white py-8 font-bold">Event</li>
                    </ul>
                </div>
            </div>

            {/*event Details main dev*/}
            <div className="w-full h-400 mt-30 mb-40 flex flex-row justify-center gap-x-22">
                {/*ceneter div*/}
                <nav>
                    <div className="flex flex-col w-200 h-full">
                        {/*First link*/}
                        <div className="flex flex-col gap-y-6 ">
                            <NavLink to="/lcf_oct" className="text-4xl font-bold font-(family-name:Jost, sans-serif)">Lahore Children’s Festival on Oct 19th 2025</NavLink>
                            <a href="http://localhost:5173/lcf_oct" className="outline-none w-40 bg-rose-600 hover:bg-fuchsia-950 py-3 px-4 border-3 border-rose-600 rounded-full text-white font-bold text-center">Read More</a>
                        </div>
                        {/*Second link*/}
                        <div className="flex flex-col mt-2 ">
                            <a href="http://localhost:5173/third_event" className="text-4xl font-bold font-sans mb-3">9th February, 2025 | LCF</a>
                            <p className="text-gray-700 mb-4">Discussion and community dialogue with school staff, parents and community members.</p>
                            <a href="http://localhost:5173/third_event" className="outline-none w-40 bg-rose-600 hover:bg-fuchsia-950 py-3 px-4 border-3 border-rose-600 rounded-full text-white font-bold text-center">Read More</a>
                        </div>
                        {/*Third link*/}
                        <div className="flex flex-col mt-2 ">
                            <a href="http://localhost:5173/second_event" className="text-4xl font-bold font-sans mb-3">12th October, 2024 | LCF</a>
                            <p className="text-gray-700 mb-4">Discussion and community dialogue with school staff, parents and community members.</p>
                            <a href="http://localhost:5173/second_event" className="outline-none w-40 bg-rose-600 hover:bg-fuchsia-950 py-3 px-4 border-3 border-rose-600 rounded-full text-white font-bold text-center">Read More</a>
                        </div>
                        {/*Fourth link*/}
                        <div className="flex flex-col mt-2 ">
                            <a href="http://localhost:5173/first_event" className="text-4xl font-bold font-sans mb-3">21st April, 2024 | LCF</a>
                            <p className="text-gray-700 mb-4">Discussion and community dialogue with school staff, parents and community members.</p>
                            <a href="http://localhost:5173/first_event" className="outline-none w-40 bg-rose-600 hover:bg-fuchsia-950 py-3 px-4 border-3 border-rose-600 rounded-full text-white font-bold text-center">Read More</a>
                        </div>
                    </div>
                </nav>




                {/*sibar div*/}
                <div className=" flex flex-col w-100 h-full ">
                    {/*title*/}
                    <div className="flex flex-col bg-blue-100/40 px-2 rounded-3xl px-10 h-52 ">
                        <div>
                            <h1 className="font-bold text-3xl mt-7 ml-3">Search</h1>
                        </div>

                        <hr className="w-8 h-1 mt-2 mb-3 ml-2 rounded-full bg-yellow-400 border text-yellow-400" />
                        {/*Form*/}
                        <form action="" className="mt-3">
                            {/*enter your name */}
                            <div className="flex flex-row">
                                <input type="text" name="txt" id="txt" className="outline-none w-56 mt-2 bg-white py-2 outline-none px-4 border-r-0 border border-gray-300 rounded-l-3xl text-gray-800" />
                                <button type="submit" className="bg-fuchsia-950 text-white font-bold rounded-r-3xl w-24 outline-none h-13 mt-2 border-fuchsia-950 border "> Search</button>
                            </div>
                        </form>
                    </div>
                    {/*Recentaly post*/}
                    <div className="flex flex-col bg-blue-100/40 px-2 rounded-3xl pl-9 h-70 mt-10 ">
                        <div>
                            <h1 className="font-bold text-3xl mt-8 ml-3">Recent Post</h1>
                        </div>

                        <hr className="w-8 h-1 mt-2 mb-3 ml-2 rounded-full bg-yellow-400 border text-yellow-400" />
                        {/*main link part*/}
                        <nav className="flex flex-col">
                            <NavLink to="/lcf_amw" className="mt-2 py-2 px-4 text-base/7">Lahore Children’s Festival (LCF): A Magical World for Young Minds</NavLink>
                            <NavLink to="/lcf_acof" className="mt-2 py-2 px-4 text-base/7">Lahore Children Festival: A Celebration of Fun, Learning, and Creativity</NavLink>
                        </nav>

                    </div>

                    {/*LAtast blog*/}
                    <div className="flex flex-col bg-blue-100/40 px-2 rounded-3xl pl-9 h-85 mt-10 ">
                        <div>
                            <h1 className="font-bold text-3xl mt-8 ml-3">Latest Blog</h1>
                        </div>
                        <hr className="w-8 h-1 mt-2 mb-3 ml-2 rounded-full bg-yellow-400 border text-yellow-400" />
                        {/*main link part*/}
                        <nav className="flex flex-col gap-y-4 ml-3">
                            <div className="flex flex-col">
                                <a href="#" className="flex flex-row gap-x-1 items-center text-[13px] font-semibold text-red-500 hover:text-purple-950"> <TbCalendarWeekFilled className="" /> 19 July 2025</a>
                                <a href="#" className="font-bold text-[18px] hover:text-red-600">
                                    <p>Lahore Children’s Festival (LCF): A <br />
                                        Magical World</p>
                                </a>
                            </div>

                            <div className="flex flex-row gap-x-3">
                                <a href="#" className="flex flex-row  w-27 h-27 overflow-hidden rounded-2xl">
                                    <img src={main} alt="" className="object-cover transition-tranform duration-300 transform hover:scale-110 rounded-2xl  " />
                                </a>
                                <div className="mt-2">
                                    <a href="" className="flex flex-row gap-x-1 items-center text-[13px] font-semibold text-red-500 hover:text-purple-950"> <TbCalendarWeekFilled /> 17 February 2025</a>
                                    <a href="" className="font-bold text-[18px]"><p className=" h-auto hover:text-red-600 ">Lahore Children <br /> Festival: A <br />Celebration of Fun,</p></a>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/*Categories*/}
                    <div className="flex flex-col bg-blue-100/40 px-2 rounded-3xl pl-9 h-70 mt-10">
                        <div>
                            <h1 className="font-bold text-3xl mt-8 ml-3">Recent Posts</h1>
                        </div>

                        <hr className="w-8 h-1 mt-2 mb-3 ml-2 rounded-full bg-yellow-400 border text-yellow-400" />
                        {/*main Link for Categories*/}
                        <div className="mt-3">
                            <nav className="flex flex-col">
                                <a className="outline-none w-79 h-14 flex felx-row items-center hover:bg-rose-600 font-bold hover:text-white mt-2 bg-white py-2 outline-none px-4 rounded-full ml-1">< BsFillArrowRightCircleFill className="size-6 bg-white rounded-full overflow-hidden mr-4 text-fuchsia-950" />  Blog</a>
                                <a className="outline-none w-79 h-14 flex felx-row items-center hover:bg-rose-600 font-bold hover:text-white mt-2 bg-white py-2 outline-none px-4 rounded-full ml-1">< BsFillArrowRightCircleFill className="size-6 bg-white rounded-full overflow-hidden mr-4 text-fuchsia-950" />  LCF</a>
                            </nav>
                        </div>
                    </div>

                    {/*Event Register dev*/}
                    <div className="flex flex-col bg-fuchsia-950 px-2 rounded-3xl px-8 py-6 h-60 mt-10 ">
                        <div>
                            <h1 className="text-base-7 loading-7 font-bold text-3xl text-white ">
                                Join together to make <br />
                                amazing things <br />
                                happen
                            </h1>
                        </div>
                        <div className="flex flex-row gap-x-14 mt-6">
                            <a href="http://localhost:5173/contact" className="outline-none w-56 bg-rose-600 hover:bg-fuchsia-950 py-3 px-4 border-3 border-rose-600 rounded-full text-white font-bold">Event Registration</a>
                            <img src={roket} alt="" className="w-15 h-13" />
                        </div>
                    </div>



                </div>
            </div>




        </div>
    )
}
export default Archive_event