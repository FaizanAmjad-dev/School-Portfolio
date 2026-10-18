import React from "react";
import { NavLink } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import logo from "../assets/LCF-LOGO.jpg"

function TopNav() {
    const active = ({ isActive }) =>
        isActive ? "font-semibold pl-3 hover:text-red-600" : "font-semibold hover:text-red-600 pl-3"


    return (
        <div>
            <div className="w-full px-24  flex flex-row items-center justify-around bg-fuchsia-950 h-14 ">
                <div className=" flex flex-row gap-x-4 ml-0"> <MdEmail className="text-yellow-400 size-7" /> <a href="mailto:info@icf.com.pk" className="text-white font-semibold">info@icf.com.pk</a></div>
                <div className=" flex flex-row gap-x-4 text-center mr-20">
                    <div className="">
                        <a href="https://www.instagram.com/lcfpk1/">
                            <LuInstagram className=" text-yellow-400 size-6" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/lcfpk1">
                            <FaFacebook className=" text-yellow-400 sicd size-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center pl-77 py-4">
                <a href="http://localhost:5175/" target="_self" className="w-66 h-auto overflow-hidden">
                    <img src={logo} alt="" className="object-cover" />
                </a>

                <div >
                    <nav className="flex flex-row justify-around w-100 mr-207">
                        <div>
                            <NavLink to="/" className={active} >Home</NavLink>
                        </div>
                        <div className="border-l border-gray-300 pl-2">
                            <NavLink to="/about" className={active}>About</NavLink>
                        </div>
                        <div className="border-l border-gray-300 pl-2">
                            <NavLink to="/our_festivals" className={active}> Our Festivels</NavLink>
                        </div>
                        <div className="border-l border-gray-300 pl-2">
                            <NavLink to="/contact" className={active}>Contact</NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default TopNav