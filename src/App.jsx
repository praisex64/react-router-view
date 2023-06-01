import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhoto from "./pages/Host/HostVanPhoto"

import './App.css'
import { Link } from 'react-router-dom'

import Layout from "./components/Layout"
import "../server.js";
import HostLayout from "./components/HostLayout"

import HostVanPricing from "./pages/Host/HostVanPricing"

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
           <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />}/>
                <Route path="photos" element={<HostVanPhoto />} />
                <Route />
            </Route> 
           </Route>

          
        </Route>
       
        
       </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
