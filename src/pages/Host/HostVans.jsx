import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

export default function HostVans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans)); 
    },[])

    const hostVansEls = vans.map(van => (
       
        <div  className="host-van-single" key={van.id}>
            <Link to={`/host/vans/${van.id}`}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} /> 
            </Link>
            <div className="host-van-info">
                 <h3>{van.name}</h3>
                 <p>${van.price}/day</p>

            </div>
        </div>
    ))
    
    return (
        <section>
            <h1 className="host-vans-title">Your Listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                            <section>
                                {hostVansEls}
                            </section>
                    ): (
                       <h2>Loading...</h2>
                    )
                }

            </div>
        </section>
    )
}