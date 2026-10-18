import zoe from "../assets/zoe.jpg"

function Zoë_khurshid_khan() {
    return (
        <div className="min-h-screen">
            {/*Backgroaund image */}
            <div className="w-full flex flex-col justify-center h-99 border bg-gray-600 bg-[url('')] bg-cover">
                <div className="ml-77  mt-38">
                    <h1 className="text-[57px] text-white font-bold"> Zoë Khurshid Khan</h1>
                </div>
                <div>
                    <ul className="ml-77 flex flex-row items-center bg-fuchsia-950 w-323 mt-14 text-white h-16 gap-x-4 rounded-xl ">
                        <li><a href="http://localhost:5173/" className="pl-7 py-6 font-white font-bold">Home</a></li>
                        <li><h1 className="text-white py-8 font-bold">-</h1></li>
                        <li><h1 className=" tracking-tight py-6 text-white font-bold ">Zoë Khurshid Khan</h1></li>
                    </ul>
                </div>
            </div>
            {/*Profile image and details*/}
            <div className="flex flex-row justify-center w-full h-140 mt-29 gap-x-2 pl-10">
                {/*Image dev*/}
                <div className="w-89 h-90 border-2 border-purple-950 rounded-xl overflow-hidden mt-2 ">
                    <img src={zoe} alt="" className="rounded-xl w-89 h-90 " />
                </div>

                {/*details*/}
                <div className="px-4 py-2 w-200 h-95 border border-gray-400 rounded-xl base-line/7">
                    {/*title */}
                    <div className="flex flex-row ">
                        <h1 className="text-3xl font-bold mb-4 mr-2 ">Zoë Khurshid Khan </h1><h1 className="text-3xl font-bold text-red-600">Co-Founder</h1>
                    </div>
                    {/*character information*/}
                    <p className="text-base-7 leading-7 text-gray-800 font-sans">
                        She is a licensed Advocate of the High Courts of Pakistan, holding an LLM from Kings College London and <br />
                        litigates regularly before courts across the country. She is currently a partner at the law firm Ramdays. She is <br />
                        passionate not only about her legal practice but also a training institute (www.kakti.pk) set up by her and her <br />
                        team in Lahore in memory of her late father which offers technical, english language and computer related <br />
                        short courses at subsidised rates. Zoë is a Board Member of the Salman Sufi Foundation, a not-for-profit <br />
                        organisation whose sole objective is to give back to Pakistan through its multiple groundbreaking initiatives, <br />
                        including Women on Wheels: an unprecedented social movement aiming to increase independent mobility <br />
                        for women. Along with three likeminded friends, she started the Lahore Children’s Festival, a one of its kind <br />
                        event exclusively for kids, offering services and products that are a 100% made in Pakistan. She is a <br />
                        columnist for The Daily Times newspaper, writing about social and political issues.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Zoë_khurshid_khan