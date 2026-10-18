import anushka from "../assets/anushka.jpg"

function Anushka_azhar_peracha() {
    return (
        <div className="min-h-screen">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold"> Anushka Azhar Peracha</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-fuchsia-950 w-323 mt-14 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold">Home</a></li>
                        <li><h1 className="text-white py-8 font-bold">-</h1></li>
                        <li><h1 className=" tracking-tight py-6 text-white font-bold ">Anushka Azhar Peracha</h1></li>
                    </ul>
                </div>
            </div>
            {/*Profile image and details*/}
            <div className="flex flex-row justify-center w-full h-140 mt-29 gap-x-2 pl-10  mb-14">
                {/*Image dev*/}
                <div className="w-89 h-90 border-2 border-purple-950 rounded-xl overflow-hidden mt-10 ">
                    <img src={anushka} alt="" className="rounded-xl w-89 h-90 " />
                </div>

                {/*details*/}
                <div className="px-4 py-2 w-200 h-125 border border-gray-400 rounded-xl base-line/7">
                    {/*title */}
                    <div className="flex flex-col ">
                        <h1 className="text-3xl font-bold ml-2">Anushka Azhar Peracha </h1><h1 className="text-3xl font-bold text-red-600 mb-3">Co-Founder</h1>
                    </div>
                    {/*character information*/}
                    <p className="text-base-7 leading-7 text-gray-800 font-sans">
                        Anushka is a relational psychodynamic counselor and an advocate for inclusive and accessible education. <br />
                        With a rich background in clinical psychology, trauma-informed care, multicultural counseling, and nutrition, <br />
                        Anushka brings a unique perspective to her role as director of Lahore Children’s Festival. <br /><br />
                        Her interest in attachment, anxiety, postpartum challenges, and self-esteem informs the work she does with <br />
                        individuals and families. She believes in fostering authenticity, vulnerability, and presence, and is committed <br />
                        to creating a space that inspires creativity, imagination, and joy in children. Anushka’s passion for <br />
                        empowering children and families is evident in her work as well as in her vision for LCF, as a safe space to  <br />
                        nurture young minds and promote a culture of empathy and understanding for our children. <br /> <br />
                        Anushka is a seasoned counselor with a global perspective, having completed her Bachelors from Western <br />
                        University in Canada before returning to Pakistan for further trainings in counselling from BNU, Lahore and <br />
                        CPPD, Karachi. As an avid learner, she continues to receive various trainings in child and adult mental health.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Anushka_azhar_peracha