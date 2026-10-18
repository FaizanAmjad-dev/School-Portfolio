import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Our_Festivals from "./Component/Our_Festivals"
import TopNav from "./NavBarPages/TopNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Amal_piracha from "./profile_pages/Amal_piracha"
import Anushka_azhar_peracha from "./profile_pages/Anushka_azhar_peracha"
import Farrukh_shafiq from "./profile_pages/Farrukh_shafiq"
import Zoë_khurshid_khan from "./profile_pages/Zoë_khurshid_khan"
import Footer from "./NavBarPages/Footer"
import First_event from "./Event_pages/First_event"
import Second_event from "./Event_pages/Second_event"
import Third_event from "./Event_pages/Third_event"
import Archive_event from "./Event/Archive_event"
import Lcf_oct from "./Event_date/Lcf_oct"
import Lcf_amw from "./lcf_main/Lcf_amw"
import Lcf_acof from "./lcf_main/Lcf_acof"
function App() {

  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/Our_Festivals" element={<Our_Festivals />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/amal_piracha" element={<Amal_piracha />}></Route>
          <Route path="/anushka_azhar_peracha" element={<Anushka_azhar_peracha />}></Route>
          <Route path="/farrukh_shafiq" element={<Farrukh_shafiq />}></Route>
          <Route path="/zoë_khurshid_khan" element={<Zoë_khurshid_khan />}></Route>
                
           <Route path="/first_event" element={<First_event/>}></Route>     
           <Route path="/second_event" element={<Second_event/>}></Route>     
           <Route path="/third_event" element={<Third_event/>}></Route>    

           <Route path="/archive_event" element={<Archive_event/>}></Route> 
           
           <Route path="/lcf_oct" element={<Lcf_oct/>}></Route>

           <Route path="/lcf_amw" element={<Lcf_amw/>}></Route>
           <Route path="/lcf_acof" element={<Lcf_acof/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
