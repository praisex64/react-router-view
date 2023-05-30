import React from 'react'
import aboutImg from '../assets/images/about-hero.png';
import { Link } from "react-router-dom"; 

export default function About() {
    return (
        <div className='about-page-container'>
            <img src={aboutImg} className="about-hero-image" />
            <div className='about-page-content'>
                <h1>Don't squeeze in a sedan when you could relax in a van</h1>
                <p>
                Random gibberish text to use in web pages, site templates and in typography demos.
                    Get rid of Lorem Ipsum forever. A tool for web designers who want to save time. 
                </p>
                <p>
                Random gibberish text to use in web pages, site templates and in typography demos.
                Get rid of Lorem Ipsum forever. A tool for web designers who want to save time. 
                </p>
            </div>
            <div className="about-page-cta">
                <h2>  Get rid of Lorem Ipsum forever</h2>
            <Link className="link-button" to="/">Explore our vans</Link>
            </div>
        </div>
    )
}