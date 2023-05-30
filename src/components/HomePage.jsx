import React from 'react'
import './../styling/home-page.css'

function HomePage() {
  return (
    <div className='home-page-container'>
      <div className='home-page-image'>
        <div className='image-text'>
          <h1>Create Your Perfect Wedding Event</h1>
          <h2>Effortlessly plan, customize, and bring your dream wedding to life with our intuitive app.</h2>
        </div>
      </div>
      <div className="time-line-container">
        <div className='time-line-title'>
          <h1>Create Your Perfect Wedding Event</h1>
          <h2>Effortlessly plan, customize, and bring your dream wedding to life with our intuitive app.</h2>
          <div>
            <img src="https://easy2give.co.il/media/images/family-icon.original.png" alt="" />
          </div>
        </div>
        <div className='time-line'>
          <div className='boxes-father'>

            <div className="time-line-box">
              <div className="box-details"></div>
            </div>
            <div className="time-line-box right-pair">
              <div className="box-details"></div>
            </div>
            <div className="time-line-box">
              <div className="box-details"></div>
            </div>
            <div className="time-line-box right-pair">
              <div className="box-details"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage