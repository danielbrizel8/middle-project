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
          <h1>So where do we start?</h1>
          <h2>Let us sort out all the mess for you with the unique platform that will accompany you step by step.</h2>
          <div>
            <img className='image-couple' src="https://easy2give.co.il/media/images/family-icon.original.png" alt="" />
          </div>
        </div>
        <div className='time-line'>
          <div className='boxes-father'>
            <div className="time-line-box" id='available-dates-section'>
              <div className="box-details">
                <div className="image-time-line">
                  <img className="image-time-line" src="https://www.brides.com/thmb/YkPH2kwcnAlO7n6OslSrkOzMDck=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/calendar-eded7d6cce89406fa85aff003a4899ed.jpg" alt="" />
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Pick Your Date</h1>
                  <h3 className='content-paragraph'>Selecting your dream wedding date is made easy with our interactive tools. Explore venue availability, consider seasonal factors, and ensure a conflict-free celebration. </h3>
                  <div className='button-link'>
                    <Link className='link-more' to={'Calendar'}>Available Dates</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="time-line-box right-pair" id='create-event-section'>
              <div className="box-details">
                <div className="image-time-line">
                  <img className="image-time-line" src='https://images.ctfassets.net/wzm83lc7g93q/5HrYApoPBfKPbw0vHdRDmB/b9e19496fa3b91c88285c19fecfbc6b2/getting_married_in_british_columbia-high.jpg' alt="" />
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Let's Get Married</h1>
                  <h3 className='content-paragraph'>Start your journey to a perfect wedding day with us. Our seamless planning tools and expert team make it effortless to bring your dream wedding to life. From venue selection to personalized details, let us guide you every step of the way towards a magical celebration of love at "Gan Eden". </h3>
                  <div className='button-link'>
                    <Link className='link-more' to={'CreateEvent'}>Create Event</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="time-line-box" id='our-packages-section'>
              <div className="box-details">
                <div className="image-time-line">
                  <div className="image-time-line">
                    <img className="image-time-line" src='https://www.womangettingmarried.com/wp-content/uploads/2023/01/wedding-colors-on-table.jpg' alt="" />
                  </div>
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Our Deals</h1>
                  <h3 className='content-paragraph'>Discover extraordinary wedding deals at "Gan Eden". From all-inclusive packages to customizable options, our exclusive offers cater to your unique preferences and budget. Choose us for Createing unforgettable memories while enjoying exceptional value. </h3>
                  <div className='button-link'>
                    <Link className='link-more' to={'Packages'}>More</Link>
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
                  <h3 className='content-paragraph'>Join us and you can see how your wedding invitation will look like. </h3>
                  <div className='button-link'>
                    <Link className='link-more' to={'Inviation'}>View Inviation</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='image-couple' src="https://easy2give.co.il/media/images/married-icon.original.png" alt="" />
        </div>
        <div>
          <div className='about-us-section'>
            <h1>About- us</h1>
          </div>
          <div className='about-us-content'>
            <h2>Welcome to "Gan Eden", where unforgettable memories are made. With 20 years of experience, we are dedicated to providing an exceptional wedding experience. Our elegant venue, personalized service, and attention to detail ensure your special day is truly magical. Let us be part of your love story and create an extraordinary celebration at "Gan Eden".</h2>
          </div>
        </div>
        <button id='top-button' onClick={()=>window.scrollTo(0,0)}>
          <div className="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <div className="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>

  )
}

export default HomePage