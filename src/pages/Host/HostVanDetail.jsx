import React, {useState, useEffect} from "react"
import { useParams, Link, Outlet } from "react-router-dom"

export default function HostVanDetail()  {

    const {id } = useParams(); 
    const [currentVan, setCurrentVan] = useState(null); 

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

                 
<Outlet />
            </div>
        </section>
    )
}

