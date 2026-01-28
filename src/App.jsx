import "./App.css"
import Navbar from "./Pages/Navbar"
import Services from "./Pages/Service"
import Home from "./Pages/Home"
import About from "./Pages/About"
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
   <Navbar />
            <Routes>
              
                <Route path="/" element={<Home />}></Route>
                <Route path="/services" element={<Services />}></Route> 
                <Route path= "/about" element= {<About />}></Route>
         </Routes>
        </BrowserRouter>
     </>
  )
  
}

export default App
