import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { TbCalendarWeekFilled } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import main from "../assets/children.jpg";
import roket from "../assets/roket.png";

function Lcf_amw() {
    return (
        <div className="min-h-screen w-full">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold">Blog Detailst</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-fuchsia-950 w-323 mt-13 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold hover:text-red-600">Home</a></li>
                        <hr className="w-3 h-1 mt-2 mb-1 rounded-full bg-white text-white" />
                        <li className="text-white py-8 font-bold">Blog</li>
                        <hr className="w-3 h-1 mt-2 mb-1 rounded-full bg-white text-white" />
                        <li className="text-white py-8 font-bold">Lahore Children’s Festival (LCF): A Magical World for Young Minds</li>
                    </ul>
                </div>
            </div>

            {/*event Details main dev*/}
            <div className="w-full h-800 mt-30 mb-40 flex flex-row justify-center gap-x-22">
                {/*ceneter div*/}
                <div className="flex flex-col w-200 h-full">
                    {/*first paragraph*/}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold">Lahore Children’s Festival (LCF): A Magical World for Young Minds</h1>
                        <p className="text-base/8">The Lahore Children’s Festival (LCF) is more than just an event — it’s a powerful movement for nurturing <br />
                            young minds through education, creativity, and joyful engagement. Held annually in the heart of Lahore, this <br />
                            festival transforms the traditional learning experience into a vibrant world of imagination and opportunity. With the motto <i> “Explore. Learn. Grow,” </i> LCF has become a beacon
                            for children’s development in Pakistan. <br /><br />
                            The event is designed for children of all ages and backgrounds, especially school-going students, to explore their
                            passions through diverse activities like science exhibitions, book readings, art corners, drama, music, and <br />
                            hands-on workshops. Whether you’re a parent, teacher, school administrator, or youth activist, LCF welcomes
                            you to join this inspiring journey. <br /> <br />
                            <a href="#" className="text-red-600 mr-1">Explore our events</a>and see why LCF is Pakistan’s most innovative learning platform for children.
                        </p>
                    </div>
                    {/*second paragraph*/}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-semibold"><strong>The Vision Behind LCF: Where Dreams Take Shape</strong> </h1>
                        <p className="text-base/8">The Lahore Children’s Festival (LCF) is more than just an event — it’s a powerful movement for nurturing <br />
                            Founded by Farrukh Shafiq, LCF was established to bridge the gap between traditional classroom learning and experiential education. Farrukh, an educationist and youth mentor, envisioned a platform where children could not only gain knowledge but also express themselves freely, think critically, and become active citizens. <br /><br />
                            He is supported by an energetic team including: <br /><br />
                        </p>
                        <div>
                            <ul className="list-disc">
                                <li>Zoe Khurshid Khan – Co-Founder, known for connecting LCF with educators and international institutions.</li>
                                <li>Anushka Azhar Peracha – Co-Founder, who brings a spark of design and imagination into every LCF experience.</li>
                                <li>Amal Piracha – Co-Founder, ensuring LCF’s learning programs stay ahead of global trends.</li>
                            </ul>
                        </div>
                        <a href="#" className="text-red-600 mr-1">Meet the team behind LCF </a>
                        <div className="flex flex-row">
                            <h1>Don’t miss our next festival date –</h1><a href="#"> WhatsApp Channel</a>
                        </div>

                    </div>
                    {/*third paragraph*/}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-semibold"><strong>Festival Program Highlights</strong> </h1>
                        <p className="text-base/8">The Lahore Children’s Festival (LCF) is more than just an event — it’s a powerful movement for nurturing <br />
                            Each edition of the Lahore Children’s Festival (LCF) features a meticulously designed lineup: science demos ignite
                            curiosity, art & music workshops strengthen creative expression, live storytelling sessions deepen narrative skills, <br />
                            and mindfulness circles nurture emotional intelligence. I observed echoes of these programming components in
                            similar festivals, particularly LICFF’s interactive culture and outreach programs <a href="#"> (LCF Events)</a>.
                            In the festival gardens and indoor venues alike, children rotate through zones: a gaming corner with logic games;
                            a sensory room designed for children on the autism spectrum; imagination tents for puppet theatre and theatrical
                            play; art studios offering pottery and painting; and small maker labs to experiment with robotics or simple
                            engineering projects. Every activity is supervised by experienced facilitators or teachers, ensuring safety
                            and learning alignment. Live performances—from drum circles to puppet shows—create communal moments that
                            reinforce social inclusion and cultural appreciation.
                        </p>
                        <div className="flex flex-row">
                            <h1>Don’t miss our next festival date –</h1><a href="#"> WhatsApp Channel</a>
                        </div>
                    </div>
                    {/*fourth paragraph*/}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold">What Makes LCF Unique?</h1>
                        <p className="text-base/8">Every year, the Lahore Children’s Festival draws thousands of visitors for a good reason: it’s unlike anything else in the country. Here’s what sets it apart:
                        </p>
                    </div>
                    {/*fifth paragraph*/}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold">Holistic Learning</h1>
                        <p className="text-base/8">From storytelling sessions to climate change awareness activities, every LCF event is crafted to stimulate children’s curiosity and critical thinking.
                        </p>
                    </div>
                </div>
             
            


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




        </div >
    )
}
export default Lcf_amw