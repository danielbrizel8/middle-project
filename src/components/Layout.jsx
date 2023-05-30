import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styling/layout.css'

function Layout() {
    return (
        <div>
            <nav className='nav-bar'>
                <Link className='logo' to={"/"}></Link>
                <Link className='link' to={"/LogIn"}>Log-in</Link>
                <Link className='link' to={"/Gift"}>Online Gift</Link>
                <a className='link' href="#about-us-section">About- us</a> 
                <a className='link' href="#available-dates-section">Available Dates</a>
                <a className='link' href="#our-packages-section">Our Packages</a>
                <a className='link' href="#create-event-section">Create Event</a>
                
            </nav>
            <Outlet />
        </div>

    )
}

export default Layout