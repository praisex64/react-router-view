import React from "react"; 
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    const activeStyles = {
        fontWeight: "bold", 
        textDecoration: "underline", 
        color: "red"
    }

    return (
        <header>
            <Link   className="site-logo" to="/">#VANLIFE</Link>
             <nav>
            <NavLink to="/host"
            style={({isActive}) => isActive ? activeStyles : null }
            >
                Host</NavLink>
             <NavLink 
             style={({isActive}) => isActive ? activeStyles : null }
             to="/about">About</NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            to="/vans">Vans</NavLink>
             </nav>
       
        </header>
    )
}