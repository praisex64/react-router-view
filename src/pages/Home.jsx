import React from 'react'
import homeImg from '../assets/images/home-hero.png'
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div className="home-container">
            <img src={homeImg} className="about-home-image" />
            <h1>You got the tranvel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #van line move to make your perfect road trip.</p>
            <Link to="">Find your Van</Link>
        </div>
    )
}