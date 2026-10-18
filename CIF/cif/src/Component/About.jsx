import picon from "../assets/icon_2.JPG"
import photo from "../assets/3in1.jpg"
import furrukh from "../assets/furrukh.png"
import zoe from "../assets/zoe.jpg"
import anushka from "../assets/anushka.jpg"
import amal from "../assets/amal.jpg"

import Farrukh_shafiq from "../profile_pages/Farrukh_shafiq"
import Zoë_khurshid_khan from "../profile_pages/Zoë_khurshid_khan"
import Anushka_azhar_peracha from "../profile_pages/Anushka_azhar_peracha"
import Amal_piracha from "../profile_pages/Amal_piracha"
import { NavLink } from "react-router-dom"

function About() {
    return (
        <div className="min-h-screen w-full">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold">About</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-purple-950 w-323 mt-14 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold hover:text-red-600">Home</a></li>
                        <li><h1 className="text-white py-8 font-bold">-</h1></li>
                        <li><h1 className=" tracking-tight py-6 text-white font-bold ">About</h1></li>
                    </ul>
                </div>
            </div>
            {/*Information main div*/}
            <div className="flex flex-col items-center mt-2">

                {/*first part*/}
                <div className="flex flex-col items-center text-center w-300 px-10 gap-y-8">
                    {/*Icon 3bubbol*/}
                    <div className="">
                        <img src={picon} />
                    </div>
                    {/*paragraph and title*/}
                    <div>
                        <h1 className="text-3xl font-bold text-center font-Fredoka, sans-serif">Lahore Children Festival</h1>
                        <p className="text-base/7 font-sans">
                            The Lahore Children's Festival is a vibrant and exciting event dedicated to bringing joy, learning, and creativity to children of all ages. Designed to be
                            a perfect family outing, this festival offers a mix of educational, artistic, and entertaining activities that spark curiosity and imagination. From interactive
                            workshops and science exhibitions to live performances, puppet shows, and storytelling sessions, every corner of the festival is packed with fun. Children
                            can unleash their creativity in the arts and crafts zones, engage in STEM-based learning activities, and participate in thrilling competitions and talent
                            shows. With a safe and friendly environment, delicious food stalls, and an abundance of engaging experiences, the Lahore Children's Festival is the
                            ultimate destination for kids and families looking to make unforgettable memories.
                        </p>
                    </div>
                    {/*Photo shot 3 teachers*/}
                    <div className="w-188 border-3 border-gray-300 rounded h-auto outline-none overflow-hidden">
                        <img src={photo} alt="" className="object-cover" />
                    </div>
                </div>

                {/*Second dev information*/}
                <div className="flex flex-row justify-center justify-between gap-x-20 mt-25">
                    {/*infomation 1*/}
                    <div className="flex flex-col text-center w-155 h-80">
                        <h1 className="text-3xl font-bold text-center font-Fredoka, sans-serif">WHY CHOOSE US? </h1>
                        <p className="text-base/7 font-sans mt-8">At the Lahore Children’s Festival, we are dedicated to creating a fun,
                            safe, and enriching experience for children and families. Our festival offers a unique blend of entertainment
                            and education, ensuring kids not only enjoy themselves but also learn through engaging activities. From STEM
                            workshops and creative arts zones to live performances, storytelling, and thrilling competitions, every moment
                            is designed to inspire young minds. We prioritize safety and a family-friendly environment, so parents can
                            relax while their children explore, create, and grow. With exciting games, delicious food, and interactive
                            sessions, we provide a space where children can showcase their talents, make new friends, and build
                            unforgettable memories.</p>
                    </div>
                    {/*information 2*/}
                    <div className="flex flex-col text-center w-155 h-80">
                        <h1 className="text-3xl font-bold text-center font-Fredoka, sans-serif">OUR CORE VALUES</h1>
                        <p className="text-base/7 font-sans mt-8"> At the heart of the Lahore Children’s Festival are our core values that shape every
                            aspect of the event. We believe in creativity and innovation, giving children the
                            opportunity to express themselves and explore their imagination. Our commitment
                            to education and growth ensures that kids engage in meaningful learning experiences
                            that enhance their skills and curiosity. We celebrate diversity and inclusivity, welcoming
                            children from all backgrounds to a festival that is open, friendly, and encouraging.
                            Above all, we prioritize safety and well-being, ensuring a secure and joyful atmosphere
                            for families. Lastly, we believe in community and togetherness, bringing people together
                            to share laughter, learning, and happiness. Join us at the Lahore Children’s Festival, where
                            fun meets learning in the most magical way!</p>
                    </div>
                </div>


                {/*profile div*/}
                <div className="flex flex-col justify-center mt-40 gap-10">
                    {/*name div*/}
                    <div className=" w-full">
                        <h1 className="text-[40px] font-bold text-center font-Fredoka, sans-serif w-full" >TEAM</h1>
                    </div>

                    {/*PHoto and detail div*/}
                    <div >
                        {/*navlink*/}
                        <nav className="flex flex-row gap-x-5 mb-6">
                            {/*Farrukh Shafiq Founder*/}
                            <NavLink to="/Farrukh_shafiq">
                                <div className="w-67 h-67">
                                    <img src={furrukh} alt="" className="object-cover rounded-xl border-2 border-purple-950" />
                                </div>
                            </NavLink>
                            {/*Zoë Khurshid Khan Co-Founder*/}
                            <NavLink to="/Zoë_khurshid_khan">
                                <div className="w-67 h-67">
                                    <img src={zoe} alt="" className="object-cover rounded-xl border-2 border-purple-950" />
                                </div>
                            </NavLink>
                            {/*Anushka Azhar Peracha Co-Founder*/}
                            <NavLink to="/Anushka_azhar_peracha">
                                <div className="w-67 h-67">
                                    <img src={anushka} alt="" className="object-cover rounded-xl border-2 border-purple-950" />
                                </div>
                            </NavLink>
                            {/*Amal Piracha Co-Founder*/}
                            <NavLink to="/Amal_piracha">
                                <div className="w-67 h-67">
                                    <img src={amal} alt="" className="object-cover rounded-xl border-2 border-purple-950" />
                                </div>
                            </NavLink>
                        </nav>
                        {/**/}
                    </div>
                </div>
                {/*name div*/}
                <div className="flex flex-row w-280 h-15 justify-between text-center mb-23">
                    {/*Founder*/}
                    <div className="w-67 ">
                        <a href="http://localhost:5173/farrukh_shafiq">
                            <h1 className="text-2xl font-bold font-Fredoka, sans-serif">Farrukh Shafiq</h1>
                            <h6 className="font-bold text-xl text-red-700">Founder</h6>
                        </a>
                    </div>
                    {/*Co-founder*/}
                    <div className="w-67">
                        <a href="http://localhost:5173/Zo%C3%AB_khurshid_khan">
                            <h1 className="text-2xl font-bold font-Fredoka, sans-serif">Zoë Khurshid Khan</h1>
                            <h6 className="font-bold text-xl text-red-700">Co-Founder</h6>
                        </a>
                    </div>
                    {/*co-founder*/}
                    <div className="w-67">
                        <a href="http://localhost:5173/Anushka_azhar_peracha">
                            <h1 className="text-2xl font-bold font-Fredoka, sans-serif">Anushka Azhar Peracha</h1>
                            <h6 className="font-bold text-xl text-red-700">Co-Founder</h6>
                        </a>
                    </div>
                    {/*co-founder*/}
                    <div className="w-67">
                        <a href="http://localhost:5173/Amal_piracha">
                            <h1 className="text-2xl font-bold font-Fredoka, sans-serif">Amal Piracha</h1>
                            <h6 className="font-bold text-xl text-red-700">Co-Founder</h6>
                        </a>
                    </div>
                </div>





            </div>
        </div>
    )
}
export default About