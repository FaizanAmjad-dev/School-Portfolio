import furrukh from "../assets/furrukh.png"

function Farrukh_shafiq() {
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
                        <li><h1 className=" tracking-tight py-6 text-white font-bold ">Farrukh Shafiq</h1></li>
                    </ul>
                </div>
            </div>
            {/*Profile image and details*/}
            <div className="flex flex-row justify-center w-full h-105 mt-29 gap-x-2 pl-10 ">
                {/*Image dev*/}
                <div className="w-89 h-90 border-2 border-purple-950 rounded-xl overflow-hidden mt-4 ">
                    <img src={furrukh} alt="" className="rounded-xl w-89 h-90 " />
                </div>

                {/*details*/}
                <div className="px-4 py-2 w-200 h-100 border border-gray-400 rounded-xl base-line/7">
                    {/*title */}
                    <div className="flex flex-row ">
                        <h1 className="text-3xl font-bold mb-4 mr-2 ">Farrukh Shafiq </h1><h1 className="text-3xl font-bold text-red-600">Founder</h1>
                    </div>
                    {/*character information*/}
                    <p className="text-base-7 leading-7 text-gray-800 font-sans">
                        Farrukh Shafiq, affectionately known to his students as Mr. Fookie, is a br devoted father of two and a  <br />
                        passionate adventure traveller who draws inspiration from exploring diverse cultures and landscapes around <br />
                        the world. He is the visionary founder of Totsville, a leading institution in early and primary childhood <br />
                        education and care. Under his forward-thinking leadership, Totsville has grown into a trusted name in the <br />
                        field and is proud to be a British Council Partner School. <br /> <br />
                        Totsville offers a comprehensive range of educational and developmental services designed to support <br />
                        children from their earliest years. These include a Cambridge-affiliated early and primary years school, a <br />
                        specialized education program for children with unique learning needs, an in-house speech therapy clinic, a <br />
                        school readiness program for toddlers aged 1 to 3, and a high-quality daycare facility. Farrukh’s commitment <br />
                        to inclusive, child-centred learning environments is at the heart of Totsville’s success.
                    </p>
                </div>
            </div>
            {/*last paragarph */}
            <div className="w-300 mb-30 ml-90">
                <p className="text-base-7 leading-7 text-gray-800 font-sans">
                    Beyond education, Farrukh I. Shafiq is also the founder of the Lahore Children’s Festival, a vibrant annual event that celebrates imagination, learning, and family. The <br />
                    festival brings together the very best of Lahore’s culture, community spirit, and child-focused experiences, offering families a joyful and enriching day out. <br /> <br />
                    A proud graduate of Cornell University, Farrukh earned his degree in Business Management with a minor in Theatre Arts. He continues to contribute to the Cornell <br />
                    community as a Cornell Alumni Admissions Ambassador for Pakistan, where he advises and supports prospective students, their families, and schools interested in the <br />
                    Cornell experience. His dedication to education and creative growth reflects his belief in nurturing potential at every stage of life and his commitment to every child.
                </p>
            </div>





        </div>
    )
}
export default Farrukh_shafiq