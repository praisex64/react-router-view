import React, {useState, useEffect} from "react"

export default function HostVans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => console.log(data)); 
    },[])
    
    return (
        <h1>Host Vans List Page</h1>
    )
}