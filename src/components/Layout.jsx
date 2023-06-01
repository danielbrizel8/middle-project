import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styling/layout.css'
import Logo from './../assets/logo.png'


function Layout() {
    return (
        <div>
            <nav className='nav-bar'>
               <Link className='logo' to={"HomePage"}><img className='image-logo' src={Logo} alt="" /> </Link>
                <Link className='link' to={"/LogIn"}>Log-in</Link>
                <a className='link' href="#about-us-section">About- us</a>
                <a className='link' href="#available-dates-section">Available Dates</a>
                <a className='link' href="#create-event-section">Create Event</a>
                <a className='link' href="#our-packages-section">Our Deals</a>
                <Link className='link' to={"/Gift"}>Online Gift</Link>
            </nav>
            <Outlet />
        </div>

    )
}

export default Layout