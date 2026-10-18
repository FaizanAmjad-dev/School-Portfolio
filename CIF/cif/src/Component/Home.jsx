import slider1 from "../assets/Slider-banner-1.jpg"
import slider2 from "../assets/Slider-banner-2.jpg"
import slider3 from "../assets/Slider-banner-3.jpg"
import picon from "../assets/icon.JPG"
import card_1 from "../assets/card_1.jpg"
import card_2 from "../assets/card_2.jpg"
import card_3 from "../assets/card_3.jpg"
import card_4 from "../assets/card_4.jpg"
import card_5 from "../assets/card_5.jpg"
import card_6 from "../assets/card-6.jpg"
import instagram from "../assets/ins_icon.JPG"

import i_1 from "../assets/vi/i_1.webp"
import i_2 from "../assets/vi/i_2.webp"
import i_3 from "../assets/vi/i_3.webp"
import i_4 from "../assets/vi/i_4.webp"
import i_5 from "../assets/vi/i_5.webp"
import i_6 from "../assets/vi/i_6.webp"
import i_7 from "../assets/vi/i_7.webp"
import i_8 from "../assets/vi/i_8.webp"
import i_9 from "../assets/vi/i_9.webp"
import i_10 from "../assets/vi/i_10.webp"
import i_11 from "../assets/vi/i_11.webp"
import i_12 from "../assets/vi/i_12.webp"
import i_13 from "../assets/vi/i_13.webp"
import i_14 from "../assets/vi/i_14.webp"
import i_16 from "../assets/vi/i_16.webp"
import { useEffect, useState } from "react"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import { IoLogoInstagram } from "react-icons/io5";



function Home() {
    const [load, setLoad] = useState(false)

    const image = [slider1, slider2, slider3]
    const [slide, setSlide] = useState(0)
    const nextSlider = () => {
        setSlide((next) => (next + 1) % image.length)
    }
    const prevSlider = () => {
        setSlide((next) => (next === 0 ? image.length - 1 : next - 1))
    }
    useEffect(()=>{
        const time = setInterval (nextSlider,3000);
        return()=> clearInterval(time)
    },[]);


    return (
        <div className=" min-h-screen">
            {/*parent div*/}
            <div>
                {/*IMage parent div*/}
                <div className="relative flex w-full overflow-hidden overflow-hidden">
                    <img src={image[slide]} alt="" className="object-cover w-full " />
                    <button className="" onClick={prevSlider}><GrPrevious className="cursor-pointer text-white absolute size-8 top-[50%] left-10 " /></button>
                    <button className="" onClick={nextSlider}><GrNext className="cursor-pointer text-white  absolute size-8 top-[50%] right-10" /></button>
                </div>

                {/*card1  parent div */}
                <div className="flex flex-col justify-around items-center mt-20 runded">
                    <div className="flex flex-row justify-center w-400 p-4 space-x-6 ">

                        {/*information dev*/}
                        <div className="flex flex-col w-160 px-2 rounded-xl" >
                            {/*card icon*/}
                            <div className=" mb-6 mt-7">
                                <img src={picon} className="object-cover " />
                            </div>
                            {/*paragraph div*/}
                            <div className=" space-y-4 mb-12">
                                <h1 className="font-bold text-3xl font-Verdana ">Lahore Children's Festival</h1>
                                <p className="text-gray-600 font-sanas text-base/7 ">The Lahore Children's Festival is a vibrant and exciting event <br />
                                    dedicated to bringing joy, learning, and creativity to children
                                    of all <br />
                                    ages. Designed to be a perfect family outing, this festival
                                    offers a mix <br />
                                    of educational, artistic, and entertaining activities
                                    that spark curiosity <br />
                                    and imagination. From interactive workshops and
                                    science exhibitions <br />
                                    to live performances, puppet shows, and storytelling
                                    sessions, every <br />
                                    corner of the festival is packed with fun.
                                </p>
                            </div>
                            {/*Button div*/}
                            <div >
                                <a href="http://localhost:5173/about" target="_self" className="border-3 border-purple-950 bg-purple-950 outline-none rounded-full object-cover text-gray-200 px-5 py-3 hover:bg-red-600 font-mono">Read more</a>
                            </div>
                        </div>

                        {/*card 1 right Image div*/}
                        <div className="w-160 rounded-xl overflow-hidden">
                            <img src={card_1} className="object-cover w-full h-full" />
                        </div>
                    </div>



                    {/*card2 main div*/}
                    <div className="flex felx-row w-full justify-center rounded py-4  mt-20">
                        {/*IMage div*/}
                        <div className="w-150 rounded-xl overflow-hidden mt-2 mr-20 ">
                            <img src={card_2} alt="" className="object-cover w-full h-full" />
                        </div>
                        {/*card2 infomation pard*/}
                        <div className="w-150  flex flex-col p-2 ">
                            {/*title dev*/}
                            <div>
                                <h1 className="text-3xl font-bold text-center font-Verdana mb-3">Become a Sponsor of the Lahore Children’s Festival!</h1>
                            </div>
                            {/*paragraph dev*/}
                            <div className="">
                                <p className="text-base/7 text-gray-600 font-sanas">
                                    Join us in making a lasting impact on the lives of children and families across br Lahore. By
                                    sponsoring the Lahore Children’s Festival, you’re not just supporting a beloved community
                                    event — you’re showing your commitment to the well-being, creativity, and future of the
                                    city’s youth.
                                    <br />
                                    <br />
                                    This is your opportunity to be a patron of joy, learning, and community spirit, while
                                    enjoying powerful brand exposure at Lahore’s most anticipated family events. Align your
                                    brand with a cause that matters and connect with thousands of engaged parents,
                                    educators, and young minds.
                                    <br />
                                    <br />
                                    Sponsor the festival. Support the children. Strengthen your brand.
                                </p>
                            </div>

                        </div>
                    </div>




                    {/*card 3 */}
                    <div className="flex flex-row w-full justify-center rounded py-4 mt-20 space-x-20 ">
                        {/*card3 infomation pard*/}
                        <div className="w-150 flex flex-col p-2  ">
                            {/*title dev*/}
                            <div>
                                <h1 className="text-3xl font-bold text-center font-Verdana mb-3">Calling All Local Vendors!</h1>
                            </div>
                            {/*paragraph dev*/}
                            <div className="">
                                <p className="text-base/7 text-gray-600 font-sanas">
                                    The Lahore Children’s Festival is one of the city’s most anticipated family events,
                                    bringing together entertainment, learning, and fun for children of all ages. As part of
                                    this vibrant celebration, we invite local vendors to set up shop and showcase their
                                    products an services.
                                    <br />
                                    <br />
                                    We proudly promote local businesses only, offering you a unique opportunity
                                    to connect with a large, engaged audience of families and children. Our lively market
                                    area is a key attraction, filled with stalls offering everything from creative toys and
                                    educational materials to delicious treats and handmade crafts.
                                    <br />
                                    <br />
                                    Sponsor the festival. Support the children. Strengthen your brand.
                                </p>
                            </div>
                        </div>
                        {/*IMage div*/}
                        <div className="w-150 rounded-xl overflow-hidden ">
                            <img src={card_3} alt="" className="object-cover w-full h-full" />
                        </div>
                    </div>




                    {/*card4 div*/}
                    <div className="flex flex-row justify-center rounded py-4 mt-20 space-x-20">
                        {/*IMage div*/}
                        <div className="w-150 h-110 mt-15 rounded-xl overflow-hidden  ">
                            <img src={card_4} alt="" className="object-cover w-full h-full" />
                        </div>
                        {/* infomation card 4*/}
                        <div className="flex flex-col w-150 p-2 ">
                            {/*title dev*/}
                            <div>
                                <h1 className="text-3xl font-bold text-center font-Verdana mb-3">Step into the Spotlight: LCF Stage & Story Corner!!</h1>
                            </div>
                            {/*paragraph dev*/}
                            <div className="">
                                <p className="text-base/7 text-gray-600 font-sanas">
                                    Have something to share with the children and families of Lahore? The Lahore Children’s
                                    Festival invites performers, educators, and storytellers of all ages to take the stage — or
                                    the mic in our cozy Story Corner!
                                    <br />
                                    <br />
                                    The LCF Stage is your platform to showcase your talent or promote what you do —
                                    whether it’s a puppet show, science demo, magic act, quiz, workout session, yoga
                                    class, storytelling, or any creative activity. From fun performances to live workshops and
                                    demonstrations, this is your chance to engage directly with a curious and enthusiastic
                                    audience.
                                    <br />
                                    <br />
                                    Over at the Story Corner, we invite readers, authors, and passionate storytellers to bring
                                    stories to life for children. Whether you’re reading a favorite picture book or sharing
                                    your own tales, it’s the perfect space to inspire young imaginations.
                                    <br />
                                    <br />
                                    Come find your audience, share your passion, and light up the festival!
                                </p>
                            </div>
                        </div>
                    </div>




                    {/*card 5 */}
                    <div className="flex flex-row justify-center mt-20 py-4 space-x-20">
                        {/* infomation card 5*/}
                        <div className="flex flex-col w-150 p-2 ">
                            {/*title dev*/}
                            <div>
                                <h1 className="text-3xl font-bold text-center font-Verdana mb-3">Kids Bazaar – Where Young Ideas Come to Life</h1>
                            </div>
                            {/*paragraph dev*/}
                            <div className="">
                                <p className="text-base/7 text-gray-600 font-sanas">
                                    Are you a young entrepreneur with a great idea? Have you created something
                                    unique, fun, or useful? The Lahore Children’s Festival invites children of all ages to
                                    be part of the Kids Bazaar — a special marketplace where kids run the show.
                                    <br />
                                    <br />
                                    At the Kids Bazaar, you’ll have the chance to:
                                    <br />
                                    <br />
                                    Set up and manage your own stall <br />
                                    Sell your products or services to real customers <br />
                                    Learn the basics of business, money management, and customer service <br />
                                    Gain confidence and showcase your creativity
                                    <br />
                                    <br />
                                    From handmade crafts and artwork to baked goods, bookmarks, slime kits,
                                    and mini services — whatever you’ve made, this is your space to shine.
                                    <br />
                                    <br />
                                    The Kids Bazaar celebrates young talent, creativity, and entrepreneurship. It’s more
                                    than just a market — it’s a place where hobbies grow into ventures and ideas turn
                                    into action.
                                    <br />
                                    <br />
                                    Bring your passion, set up your stall, and show the world what you can do.
                                </p>
                            </div>

                        </div>
                        {/*IMage div*/}
                        <div className="w-150 h-117 mt-24 rounded-xl overflow-hidden ">
                            <img src={card_5} alt="" className="object-cover w-full h-full" />
                        </div>
                    </div>




                    {/*last and 6 div card*/}
                    <div className="flex flex-row justify-center mt-20 py-4 space-x-20">
                        {/*IMage div*/}
                        <div className="w-150 h-117 mt-24 rounded-xl overflow-hidden ">
                            <img src={card_6} alt="" className="object-cover w-full h-full" />
                        </div>
                        {/* infomation card 5*/}
                        <div className="flex flex-col w-150 p-2 ">
                            {/*title dev*/}
                            <div>
                                <h1 className="text-3xl font-bold text-center font-Verdana mb-3">Community Partnerships: An Inclusive Festival for Every Child</h1>
                            </div>
                            {/*paragraph dev*/}
                            <div className="">
                                <p className="text-base/7 text-gray-600 font-sanas">
                                    The Lahore Children’s Festival is a celebration for all children — regardless
                                    of background, ability, or circumstance. We believe that every child deserves
                                    the opportunity to learn, play, and grow in a safe, welcoming, and joyful environment.
                                    <br />
                                    <br />
                                    As an inclusive festival, we are committed to accessibility and equal participation.
                                    We actively work with community partners, organizations, and advocates to ensure
                                    that no child is left behind.
                                    <br />
                                    <br />
                                    <h1> We welcome collaboration to: </h1>
                                    <br />
                                    <ul className="px-4 list-disc">
                                        <li className=""> Provide access support for children with disabilities</li>
                                        <li className=""> Facilitate community outreach to include underprivileged children</li>
                                        <li className="">Create safe, inclusive spaces for all families</li>
                                        <li className=""> Ensure that everyone feels seen, heard, and valued at the festival </li>
                                    </ul>
                                    <br />
                                    Our goal is simple: to open doors, break barriers, and make sure every child can experience the magic of the Lahore Children’s Festival.
                                    <br />
                                    <br />
                                    We invite organizations, educators, and changemakers to join us in building a truly inclusive celebration — for every child, everywhere.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/*Inatagram div */}
                    <div className="flex flex-col justify-center ">
                        {/*icons*/}
                        <div className="ml-40 mb-4">
                            <img src={picon} className="object-cover" />
                        </div>
                        {/*instgram ID*/}
                        <div className=" text-center ml-13">
                            <h1 className="font-bold text-[40px] font-serif-sanas">Our Instagram</h1>
                        </div>
                    </div>
                    {/*follower count and ID */}
                    <div className="flex flex-row w-150 items-center space-x-10 justify-center mt-20">
                        <div className="overflow-hidden">
                            <img src={instagram} className="w-15 h-15 rounded-full border-2 border-red-600 object-cover" />
                        </div>
                        <div className="">
                            <h1 className="font-bold">Icfpk1</h1>
                        </div>
                        <div className="flex flex-row items-center gap-x-1">
                            <h1 className="font-bold">599</h1><h4 className="text-[12px] text-gray-500">post</h4>
                        </div>
                        <div className="flex flex-row items-center space-x-1">
                            <h1 className="font-bold">10k</h1><h4 className="text-[12px] text-gray-500">follower</h4>
                        </div>
                        <div className="">
                            <a href="https://www.instagram.com/lcfpk1/" target="_blank" className="border-white border-4 hover:border-4 hover:border-blue-300 flex flex-row gap-x-2 items-center text-center text-white rounded-xl bg-blue-600 py-2 px-4  "><IoLogoInstagram className="size-6" /> Follow </a>
                        </div>
                    </div>
                    {/*instagram video */}
                    <div className=" w-300 h-auto  px-19 pt-6 pb-4 mt-2 grid grid-cols-4 grid-row-3 flex flex-wrap gap-y-6 ">
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_1} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_2} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_3} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_4} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_5} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_6} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_7} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_8} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_9} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_10} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_11} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_12} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                    </div>
                    {!load && (<div>
                        <button onClick={() => setLoad(!false)} type="submit" className="px-2 py-1 rounded mt-4 mb-19 bg-gray-100 border-2 border-gray-100 outline-none cursor-pointer">Load more</button>
                    </div>
                    )}

                    {load && (
                        <div className=" w-300 h-auto flex flex-wrap pl-17 pr-80 mt-2 grid grid-cols-3 grid-row-1 mb-20 ">
                            <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_13} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                            <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_14} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                            <div className="w-62 h-63 outline-none rounded-xl overflow-hidden "><img src={i_16} alt="" className="w-62 h-63 rounded-xl object-cover transition-tranform duration-300 transform transform hover:scale-110   " /></div>
                        </div>
                    )}









                </div>


            </div>
        </div>
    )
}
export default Home