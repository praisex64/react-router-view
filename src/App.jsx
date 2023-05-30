import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetails"
import './App.css'
import { Link } from 'react-router-dom'

import Layout from "./components/Layout"
import "../server.js";

function App() {
  

  return (
    <>
       <BrowserRouter>
       
       

      <Routes>
        <Route element={<Layout />} >
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/vans" element={<Vans />} />
           <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
       
        
       </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
