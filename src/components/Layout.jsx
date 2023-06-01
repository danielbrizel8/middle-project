import React, { useState, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styling/layout.css'
import Logo from './../assets/logo.png'


function Layout() {
    const targetRef= useRef(null)
    const handleClick= ()=> {
       
        if(targetRef.current) {
            targetRef.current.click();
            window.scrollTo(0,3000)
        }
    }

	
    return (
        <div>
            <nav className='nav-bar'>
               <Link className='logo' to={"HomePage"}><img className='image-logo' src={Logo} alt="" /> </Link>
                <Link className='link' to={"/LogIn"}>Log-in</Link>
                <Link ref={targetRef} onClick={handleClick} className='link' to={"HomePage"} >About- us</Link>
                <Link className='link' to={'/Calendar'}>Available Dates</Link>
                <Link className='link' to={'/CreateEvent'}>Create Event</Link>
                <Link className='link' to={'/Packages'}>Our Deals</Link>
                <Link className='link' to={"/Gift"}>Online Gift</Link>
            </nav>
            <Outlet />
        </div>

    )
}

export default Layout