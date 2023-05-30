import React from 'react'
import './../styling/home-page.css'
import { Link } from 'react-router-dom'

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
              <div className="box-details">
                <div className="image-time-line">
                  <img className="image-time-line" src="https://oionline.com/wp-content/uploads/2017/01/february-14-calendar-valentines-day.jpeg" alt="" />
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Pick a Date</h1>
                  <h3 className='content-paragraph'>Selecting your dream wedding date is made easy with our interactive tools. Explore venue availability, consider seasonal factors, and ensure a conflict-free celebration. </h3>
                  <div className='button-link'>
                  <Link to={'Calendar'}>Date</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="time-line-box right-pair">
              <div className="box-details">
                <div className="image-time-line">
                  <img className="image-time-line" src='https://images.ctfassets.net/wzm83lc7g93q/5HrYApoPBfKPbw0vHdRDmB/b9e19496fa3b91c88285c19fecfbc6b2/getting_married_in_british_columbia-high.jpg' alt="" />
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Let's Get Married</h1>
                  <h3 className='content-paragraph'>Selecting your dream wedding date is made easy with our interactive tools. Explore venue availability, consider seasonal factors, and ensure a conflict-free celebration. </h3>
                  <div className='button-link'>
                    <Link to={'CreateEvent'}>Event</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="time-line-box">
              <div className="box-details">
                <div className="image-time-line">
                <div className="image-time-line">
                  <img className="image-time-line" src='https://images.ctfassets.net/wzm83lc7g93q/5HrYApoPBfKPbw0vHdRDmB/b9e19496fa3b91c88285c19fecfbc6b2/getting_married_in_british_columbia-high.jpg' alt="" />
                </div>
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Our deals</h1>
                  <h3 className='content-paragraph'>Selecting your dream wedding date is made easy with our interactive tools. Explore venue availability, consider seasonal factors, and ensure a conflict-free celebration. </h3>
                  <div className='button-link'>
                  <Link to={'Packages'}>deals</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="time-line-box right-pair">
              <div className="box-details">
                <div className="image-time-line">
                <div className="image-time-line">
                  <img className="image-time-line" src='https://i.etsystatic.com/32703807/r/il/99b8f3/3493484389/il_1080xN.3493484389_m57u.jpg' alt="" />
                </div>
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Send Inviation</h1>
                  <h3 className='content-paragraph'>Selecting your dream wedding date is made easy with our interactive tools. Explore venue availability, consider seasonal factors, and ensure a conflict-free celebration. </h3>
                  <div className='button-link'>
                  <Link to={'Inviation'}>test</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage