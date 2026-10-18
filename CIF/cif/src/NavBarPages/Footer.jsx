import { IoHome } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { PiFediverseLogoDuotone } from "react-icons/pi";
import { MdOutlineListAlt } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaMapLocation } from "react-icons/fa6";
import React from "react";
import { LuInstagram } from "react-icons/lu";

function Footer() {
    return (
        <div className="w-full ">
            {/*main dev*/}
            <div className="flex flex-col w-full">
                {/*footer top part */}
                <div className="flex flex-row justify-center px-50 p-10 w-full bg-fuchsia-950 h-138  ">
                    {/*link div*/}
                    <div className="flex flex-col w-130 h-120 pl-34 ">
                        {/*title*/}
                        <div>
                            <h1 className="font-bold text-3xl text-white mt-9 font-Sans-serif">Quick Links</h1>
                        </div>

                        <hr className="w-8 h-1 mt-2 mb-5 rounded-full bg-yellow-400 border text-yellow-400" />

                        {/*main part */}
                        <div className=" mb-1">
                            <a href="http://localhost:5173/" className="text-white font-semibold flex flex-row gap-x-2 items-center text-[17px]"><IoHome className="text-yellow-400 text-xl" />Home</a>
                        </div>
                        <div className=" mb-1">
                            <a href="http://localhost:5173/about" className="text-white font-semibold flex flex-row gap-x-2 items-center text-[17px]"><FaRegBuilding className="text-yellow-400 text-xl" /> About Us </a>
                        </div>
                        <div className=" mb-1">
                            <a href="http://localhost:5173/our_festivals" className="text-white font-semibold flex flex-row gap-x-2 items-center text-[17px]"><PiFediverseLogoDuotone className="text-yellow-300 text-xl" /> Our Festivals</a>
                        </div>
                        <div className=" mb-1">
                            <a href="http://localhost:5173/contact" className="text-white font-semibold flex flex-row gap-x-2 items-center text-[17px]" ><MdOutlineListAlt className="text-yellow-300 text-xl" /> Contact Us </a>
                        </div>
                    </div>

                    {/*form dev*/}
                    <div className="flex flex-col h-120 pl-23 pr-7">
                        {/*title*/}
                        <div>
                            <h1 className="font-bold text-3xl text-white mt-10">Contact Us</h1>
                        </div>

                        <hr className="w-8 h-1 mt-2 mb-3 rounded-full bg-yellow-400 border text-yellow-400" />

                        {/*main part */}
                        <form action="" className="flex flex-col">
                            {/*enter your name */}
                            <div className="">
                                <label htmlFor="txt" className="cursor-pointer text-white font-semibold">Name</label>
                                <input type="text" name="txt" id="txt" className="outline-none w-96 mt-2 bg-white py-4 px-4 border text-gray-800" placeholder="Name" />
                            </div>
                            {/*enter your email */}
                            <div className="mt-2">
                                <label htmlFor="eml" className="text-white font-semibold cursor-pointer">Email</label>
                                <input type="email" name="eml" id="eml" className="outline-none  w-96 mt-2 bg-white py-4 px-4 border text-gray-800" placeholder="Name" />
                            </div>
                            {/*enter your Message  */}
                            <div className="mt-2">
                                <label htmlFor="meg" className="text-white font-semibold cursor-pointer">Message</label>
                                <textarea name="meg" id="meg" className="outline-none w-96 mt-2 bg-white py-1 px-4 border text-gray-800" placeholder="Message" />
                            </div>
                            <div>
                                <button type="submit" className="outline-none cursor-pointer w-96 mt-1 bg-yellow-500 py-2 px-5 font-bold ">SEND</button>
                            </div>
                        </form>
                    </div>

                    {/*adress dev */}
                    <div className="flex flex-col w-140 h-120 pl-4">
                        {/*title*/}
                        <div>
                            <h1 className="font-bold text-3xl text-white mt-10">Contact Us</h1>
                        </div>

                        <hr className="w-8 h-1 mt-2 mb-4 rounded-full bg-yellow-400 border text-yellow-400" />

                        {/*Adress*/}
                        <div className=" mb-1">
                            <h1 className="text-white font-semibold flex flex-row gap-x-2 items-center text-[17px]"><FaMapLocation className="text-yellow-400 text-xl" />16-A, Hali Rd, Block A Gulberg, Lahore</h1>
                        </div>
                        <div className=" mb-1">
                            <div className=" flex flex-row gap-x-2 ml-0"> <MdEmail className="text-yellow-400 size-7" /> <a href="mailto:info@icf.com.pk" className="text-white font-semibold">info@icf.com.pk</a></div>
                        </div>
                        <div className=" flex flex-row gap-x-1 text-center mr-20 mt-3">
                            <div className="" >
                                <a href="https://www.instagram.com/lcfpk1/" className="w-13 h-13 rounded bg-pink-600 flex flex-row items-center justify-center">
                                    <LuInstagram className=" text-white size-6 " />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/lcfpk1" className="w-13 h-13 rounded bg-pink-600 flex flex-row items-center justify-center">
                                    <FaFacebook className=" text-white size-6 " />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*footer bottem part*/}
                <div className="flex flex-row items-center w-full bg-yellow-400 h-12 px-10">
                    <div className="flex flex-row w-230 pl-110 gap-x-2">
                        <h1 className="font-bold text-[16px]" >&copy;</h1><h1 className="font-sm text-[15px]"> Copyright 2025 LCF. All Rights Reserved.</h1>
                    </div>
                    <div className="flex flex-row w-230 pl-38 gap-x-2" >
                        <h1 className="font-bold text-[13px]">&lt;&#47;&gt;</h1><h1 className="font-sm text-[15px]">Designed & Developed By:</h1><a href="https://kaktitech.com/" className="text-red-600 font-bold">KAKTI Technologies</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer