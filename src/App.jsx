import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetails"
import './App.css'
import { Link } from 'react-router-dom'
import "../server.js";

function App() {
  

  return (
    <>
       <BrowserRouter>
       <Link to="/">#VANLIFE</Link>
       <Link to="/about">About</Link>
       <Link to="/vans">Vans</Link>

      <Routes>
          <Route path="/about" element={<About />} />
       <Route path="/" element={<Home />} />
       <Route path="/vans" element={<Vans />} />
       <Route path="/vans/:id" element={<VanDetail />} />
       </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
