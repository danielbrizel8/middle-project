import React, { useState, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styling/layout.css'
import Logo from './../assets/logo.png'



function Layout() {

  const [openNav, setOpenNav] = useState(false)

  return (
    <div className='layout-container'>
      <div>
        <nav className='nav-bar'>
          <Link className='logo' to={"HomePage"}><img className='image-logo' src={Logo} alt="" /> </Link>
          <div id='hello-user'>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/newlyweds.png" alt="newlyweds" />
            <div  >Hello {localStorage.getItem('user')}</div>
          </div>
          <Link id='about-us-none' className='link' to={"HomePage/about"} >About- us</Link>
          <Link className='link' to={'/Calendar'}>Available Dates</Link>
          <Link id='create-event-none' className='link' to={'/CreateEvent'}>Create Event</Link>
          <Link id='our-deals-none' className='link' to={'/Packages'}>Our Deals</Link>
          <Link className='link' to={"/Gift"}>Online Gift</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="footer">
        <div className="website-name-footer">
          Gan Eden Hall
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/amitcapi" target="_blank" rel="noopener noreferrer" >
            <img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
          </a>
          <a href="https://github.com/amitbarha" target="_blank" rel="noopener noreferrer" >
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" />
          </a>
          <a href="https://www.google.com/maps/place/%D7%94%D7%97%D7%99%D7%9C%D7%96%D7%95%D7%9F+3,+%D7%A8%D7%9E%D7%AA+%D7%92%D7%9F%E2%80%AD/@32.0872801,34.8040903,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4bc6f14be6b9:0xccb089b29dfbffe2!8m2!3d32.0872801!4d34.8040903!16s%2Fg%2F11fx117dcw" target="_blank" rel="noopener noreferrer" >
            <img width="30" height="30" src="https://img.icons8.com/color/48/google-maps-new.png" alt="google-maps-new" />
          </a>
          <a href="https://www.linkedin.com/in/amit-barhanin-588852262/" target="_blank" rel="noopener noreferrer" >
            <img width="30" height="30" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className="made-by">
          made by Amit Barhanin & Daniel Brizel
        </div>
      </div>
    </div>


  )
}

export default Layout