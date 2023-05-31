import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"

import './App.css'
import { Link } from 'react-router-dom'

import Layout from "./components/Layout"
import "../server.js";
import HostLayout from "./components/HostLayout"

function App() {
  

  return (
    <>
       <BrowserRouter>
       
       

      <Routes>
        <Route element={<Layout />} >
           
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
           <Route path="vans/:id" element={<VanDetail />} />

           <Route path="host" element={< HostLayout />} >
           <Route index element={<Dashboard />} />
           <Route path="income" element={<Income />} />
           <Route path="reviews" element={<Reviews />} /> 
           <Route path="vans" element={<HostVans />} />
           </Route>

          
        </Route>
       
        
       </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
