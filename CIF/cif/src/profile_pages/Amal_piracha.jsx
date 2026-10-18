import amal from "../assets/amal.jpg"

function Amal_piracha() {
    return (
        <div className="min-h-screen">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold"> Farrukh Shafiq</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-fuchsia-950 w-323 mt-14 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold">Home</a></li>
                        <li><h1 className="text-white py-8 font-bold">-</h1></li>
                        <li><h1 className=" tracking-tight py-6 text-white font-bold ">Amal Piracha</h1></li>
                    </ul>
                </div>
            </div>
            {/*Profile image and details*/}
            <div className="flex flex-row justify-center w-full h-128 mt-29 gap-x-2 pl-10 ">
                {/*Image dev*/}
                <div className="w-89 h-90 border-2 border-purple-950 rounded-xl overflow-hidden mt-4 ">
                    <img src={amal} alt="" className="rounded-xl w-89 h-90 " />
                </div>

                {/*details*/}
                <div className="px-4 py-2 w-200 h-60 border border-gray-400 rounded-xl base-line/7 mt-17">
                    {/*title */}
                    <div className="flex flex-row ">
                        <h1 className="text-3xl font-bold mb-4 mr-2 ">Amal Piracha </h1><h1 className="text-3xl font-bold text-red-600">Co-Founder</h1>
                    </div>
                    {/*character information*/}
                    <p className="text-base-7 leading-7 text-gray-800 font-sans">
                        Amal Piracha, co-founder of Studio Avant Garde, is a brand architect with a global edge. She launched her <br />
                        career at a multinational in 2009 and now leads with sharp strategic insight. A national swimmer and fitness <br />
                        certified trainer, her discipline drives creative execution. Educated at Simmons College and LSE, she fuses <br />
                        marketing precision with economic acumen. In 2024, she co-created the Lahore Children’s Festival Pakistan’s
                        first all-local kids’ platform.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Amal_piracha