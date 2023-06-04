import React, { useState, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styling/layout.css'
import Logo from './../assets/logo.png'



function Layout() {


    return (
        <div>
            <nav className='nav-bar'>
                <Link className='logo' to={"HomePage"}><img className='image-logo' src={Logo} alt="" /> </Link>
                <div id='hello-user'>
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/newlyweds.png" alt="newlyweds"/>
                    <div >Hello {localStorage.getItem('user')}</div>
                </div>
                <Link className='link' to={"HomePage/about"} >About- us</Link>
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