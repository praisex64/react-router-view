import React, {useState, useEffect} from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"

export default function HostVanDetail()  {

    const {id } = useParams(); 
    const [currentVan, setCurrentVan] = useState(null); 

    const activeStyles = {
        fontWeight: "bold", 
        textDecoration: "underline", 
        color: 'red'
    }

    useEffect(() => {

        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans)); 

    }, [id]);

    if(!currentVan) {
        return <h1>Loading..</h1>
    }

    return (
        <section>
             <Link
              to=".."
              relative="path"
             className="back-button"
             >&larr; <span>Back to all Vans</span></Link>
             
            <div className="host-van-detail-layout-container">
                 <div className="host-van-detail">
                 <img src={currentVan.imageUrl} />
                   <div className="host-van-detal-info-text">
                    <i>{currentVan.type}</i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                   </div>
                 </div>

                 <nav className="host-van-detail-nav">
                    <NavLink
                     to="."
                     end 
                     style={({ isActive}) => isActive ? activeStyles : null }
                    >
                    Details
                    </NavLink>

                    <NavLink
                     to="pricing"
                     style={({ isActive}) => isActive ? activeStyles : null }
                    >
                    Pricing 
                    </NavLink>

                    <NavLink
                     to="photos"
                     style={({ isActive}) => isActive ? activeStyles : null }
                    >
                    photos
                    </NavLink>
                 </nav>


<Outlet  context = {{ currentVan }}/>
            </div>
        </section>
    )
}

