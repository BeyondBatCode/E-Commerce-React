import "./App.css"
import Navbar from "./Pages/Navbar"
import Services from "./Pages/Service"
import Home from "./Pages/Home"
import About from "./Pages/About"
import ServiceDesign from "./Pages/ServiceDesign"
import ServiceDevelopment from "./Pages/ServiceDevelopment"
import ServiceMarketing from "./Pages/ServiceMarketing"
import Signup from "./Pages/Signup"
import Contact from "./Pages/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/servicedesign" element={<ServiceDesign />} />
          <Route path="/servicedevelopment" element={<ServiceDevelopment />} />
          <Route path="/servicemarketing" element={<ServiceMarketing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
