import clock from "../assets/clock.png"
import file from "../assets/file.png"
import { IoMdAlarm } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import React from "react";
import banner from '../assets/Slider-banner-1.jpg'


function Contact() {
    const Time = "flex flex-col justify-center group-hover:bg-red-700 bg-yellow-400  group-hover:text-white mt-6 rounded-full"
    const file = "flex flex-col justify-center group-hover:bg-red-700 bg-yellow-400 group-hover:text-white mt-6 rounded-full"

    return (
        <div className="min-h-screen w-full">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 bg-gray-600 bg-cover"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold"> Contact</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-purple-950 w-323 mt-14 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold hover:text-red-600">Home</a></li>
                        <hr className="w-3 h-1 mt-2 mb-1 rounded-full bg-white text-white" />
                        <li><h1 className=" tracking-tight py-6 text-white font-bold ">Contact</h1></li>
                    </ul>
                </div>
            </div>
            {/*time and file div*/}
            <div className="w-full h-70 mt-30 flex flex-row justify-center gap-x-8 ">
                {/*clock div*/}

                <div className="group  flex flex-col items-center w-158 h-65 border rounded-3xl border-3 border-yellow-400 hover:border-red-700">
                    <div className={Time}>
                        <IoMdAlarm className="text-xl items-center w-27 h-27 p-5 group-hover:text-white" />
                    </div>
                    <div className="mt-6">
                        <h1 className="font-bold text-xl">Monday to Friday</h1>
                    </div>
                    <div>
                        <p className="text-gray-600 text-xl">09.30am – 05.00pm</p>
                    </div>
                </div>

                {/*file div*/}
                <div className="group  flex flex-col items-center w-158 h-65 border rounded-3xl border-3 border-yellow-400 hover:border-red-700">
                    <div className={file}>
                        <CiMail className="text-xl items-center w-27 h-27 p-5 " />
                    </div>
                    <div className="mt-6">
                        <h1 className="font-bold text-xl">Monday to Friday</h1>
                    </div>
                    <div>
                        <p className="text-gray-600 text-xl">09.30am – 05.00pm</p>
                    </div>
                </div>
            </div>


            {/*Question line*/}
            <div className="w-full mt-25 ">
                <p className="font-bold text-red-600 ml-77 tracking-[3px]">HAVE ANY QUESTIONS? SO PLESE</p>
            </div>
            {/*form title*/}
            <div className="w-full">
                <h1 className="font-bold text-6xl ml-76 ">Feel Free To Contact!</h1>
            </div>

            {/*form and map location*/}
            <div className="w-full flex flex-row justify-center mt-18 mb-40 ">
                {/*form*/}
                <div className="w-163 h-100 rounded-3xl px-2">
                    {/*form*/}
                    <form action="" className="">
                        {/*first and last name */}
                        <div className="flex flex-row gap-x-4 ">
                            {/*first name*/}
                            <div className="flex flex-col ">
                                <div className="flex flex-row gap-x-2 mb-3">
                                    <h1>First Name</h1> <p className="text-red-500"> (Required)</p>
                                </div>
                                <input type="text" className="w-77 border rounded-xl px-4 py-4 outline-none border-gray-400" />
                            </div>
                            {/*SEcond name*/}
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-x-2 mb-3">
                                    <h1>Last Name</h1> <p className="text-red-500"> (Required)</p>
                                </div>
                                <input type="text" className="w-77 border rounded-xl px-4 py-4 outline-none border-gray-400" />
                            </div>
                        </div>
                        {/*email and phone number*/}
                        <div className="flex flex-row gap-x-4 mt-6">
                            {/*email name*/}
                            <div className="flex flex-col ">
                                <div className="flex flex-row mb-3">
                                    <h1>Email</h1> <p className="text-red-500"> (Required)</p>
                                </div>
                                <input type="email" className="w-77 border rounded-xl px-4 py-4 outline-none border-gray-400" />
                            </div>
                            {/*phone number name*/}
                            <div className="flex flex-col ">
                                <div className="flex flex-row  mb-3">
                                    <h1>Phone Number</h1> <p className="text-red-500"> (Required)</p>
                                </div>
                                <input type="tell" className="w-77 border rounded-xl px-4 py-4 outline-none border-gray-400" />
                            </div>
                        </div>
                        {/*message */}
                        <div className="flex flex-col mt-6">
                            <div className="flex flex-row gap-x-2 mb-3">
                                <h1>Message</h1> <p className="text-red-500"> (Required)</p>
                            </div>
                            <div>
                                <textarea name="" id="" cols="10" rows="5" className="w-full border rounded-xl px-8 py-4 outline-none border-gray-400 focus:border focus:border-red-500"></textarea>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button type="submit" className=" bg-red-700 rounded-full border-red-700 text-center  py-3 px-16 text-white font-bold  ">Submit</button>
                        </div>
                    </form>
                </div>
                {/*map location*/}
                <div className="w-163 h-100  overflow-hidden rounded-3xl mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3401.1434433784107!2d74.345459!3d31.52022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919059f5f7bb091%3A0x4bd04d79b7356f44!2sIMAGINARIUM%20(PRIVATE)%20LIMITED!5e0!3m2!1sen!2sus!4v1768050122002!5m2!1sen!2sus"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="w-full h-full rounded-xl">

                    </iframe>
                </div>
            </div>
        </div>
    )
}
export default Contact