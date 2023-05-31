import React from "react" 
import { NavLink, Outlet} from 'react-router-dom'

export default function HostLayout() {

  const activeStyles = {
    fontWeight: 'bold', 
    textDecoration: 'underline', 
    color: 'red'
  }

    return (
        <>
          <nav className='host-nav'>
             <NavLink
              end 
              style={({isActive}) => isActive ? activeStyles : null}
              to="/host">Dashboard</NavLink>
             <NavLink 
             style={({isActive}) => isActive ? activeStyles : null}
             to="/host/income">Income</NavLink>
             <NavLink 
             style={({isActive}) => isActive ? activeStyles : null}
             to="/host/reviews">Reviews </NavLink>

             <NavLink
             to="/host/vans"
             style={({isActive}) => isActive ? activeStyles : null }
             >HostVans</NavLink>

          </nav>

          <Outlet />
        </>
    ); 
}