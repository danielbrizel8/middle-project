import React, { useEffect, useState } from 'react'
import './../styling/home-page.css'
import { Link, useLocation } from 'react-router-dom'
import Carousle from './Carousle'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import  Timeline  from './../timeLine.json'


function HomePage() {

  const [countTimeLine, setCountTimeLine] = useState(0)
  const { pathname } = useLocation();
  const variants = {
    offscreen: { x: '-20vw', filter: 'blur(7px)' },
    onscreen: { x: 0, filter: 'blur(0px)' }
  };
  const variantsRight = {
    offscreen: { x: '20vw', filter: 'blur(7px)' },
    onscreen: { x: 0, filter: 'blur(0px)' }
  };
  const controls = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();


  useEffect(() => {
    pathname === '/HomePage/about' && window.scrollTo({ behavior: 'smooth', top: 3000 })
  }, [pathname])

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
            <motion.div
              ref={ref1}
              initial='offscreen'
              animate={inView1 ? 'onscreen' : 'offscreen'}
              variants={variants}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="time-line-box left-pair" id='available-dates-section'>
              <div className="box-details">
                <div className="image-time-line">
                  <img className="image-time-line" src="https://www.brides.com/thmb/YkPH2kwcnAlO7n6OslSrkOzMDck=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/calendar-eded7d6cce89406fa85aff003a4899ed.jpg" alt="" />
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Pick Your Date</h1>
                  <h3 className='content-paragraph'>Selecting your dream wedding date is made easy with our interactive tools. Explore venue availability, consider seasonal factors, and ensure a conflict-free celebration. </h3>
                  <div className='button-link'>
                    <Link className='link-more' to={'/Calendar'}>Available Dates</Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref2}
              initial='offscreen'
              animate={inView2 ? 'onscreen' : 'offscreen'}
              variants={variantsRight}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
              className="time-line-box right-pair right-pair-line" id='create-event-section'>
              <div className="box-details">
                <div className="image-time-line">
                  <img className="image-time-line" src='https://images.ctfassets.net/wzm83lc7g93q/5HrYApoPBfKPbw0vHdRDmB/b9e19496fa3b91c88285c19fecfbc6b2/getting_married_in_british_columbia-high.jpg' alt="" />
                </div>
                <div className="content-time-line">
                  <h1 className='content-title'>Let's Get Married</h1>
                  <h3 className='content-paragraph'>Start your journey to a perfect wedding day with us. Our seamless planning tools and expert team make it effortless to bring your dream wedding to life. From venue selection to personalized details, let us guide you every step of the way towards a magical celebration of love at "Gan Eden". </h3>
                  <div className='button-link'>
                    <Link className='link-more' to={'/CreateEvent'}>Create Event</Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref3}
              initial='offscreen'
              animate={inView3 ? 'onscreen' : 'offscreen'}
              variants={variants}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="time-line-box left-pair" id='our-packages-section'>
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
                    <Link className='link-more' to={'/Packages'}>More</Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref4}
              initial='offscreen'
              animate={inView4 ? 'onscreen' : 'offscreen'}
              variants={variantsRight}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
              className="time-line-box right-pair right-pair-line">
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
                    <Link className='link-more' to={'/Inviation'}>View Inviation</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

          <div className='carousle-divs'>
            <div className="carousle-box" >
              <div className='image-carousle-div'>
                <img className="image-carousle" src={Timeline.timeLine[countTimeLine].img} alt="" />
              </div>
              <div className="content-time-line contents-carousle">
                <h1 className='content-title'>{Timeline.timeLine[countTimeLine]['content-title']}</h1>
                <h3 className='content-paragraph'>{Timeline.timeLine[countTimeLine]['content-paragraph']}</h3>
                <div className='button-link'>
                  <Link className='link-more' to={Timeline.timeLine[countTimeLine].to}>{Timeline.timeLine[countTimeLine]['to-content']}</Link>
                </div>
                <button onClick={(e) => {countTimeLine != 0 &&  setCountTimeLine(countTimeLine-1)}}>prev</button>
                <button onClick={(e) => {countTimeLine != 3 && setCountTimeLine(countTimeLine+1)}}>next</button>
              </div>
            </div>
          </div>
          

  
          <img className='image-couple' src="https://easy2give.co.il/media/images/married-icon.original.png" alt="" />
          <div className='about-us-section'>
            <div className='about-us-header'>
              <h1>About- us</h1>
            </div>
            <div className='about-us-content' id='about-us-content'>
              <h2>Welcome to "Gan Eden", where unforgettable memories are made. With 20 years of experience, we are dedicated to providing an exceptional wedding experience. Our elegant venue, personalized service, and attention to detail ensure your special day is truly magical. Let us be part of your love story and create an extraordinary celebration at "Gan Eden".</h2>
            </div>
          </div>
          <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousle>
              <img src="https://www.agadat-deshe.co.il/warehouse/dynamic/274797.jpg" alt="" />
              <img src="https://www.myday.co.il/wp-content/blogs.dir/2/files/2017/09/DSC_7489-117-1.jpg" alt="" />
              <img src="https://ein-hemed.co.il/wp-content/uploads/2023/01/AAA_7048.jpg" alt="" />
              <img src="https://www.easywed.co.il/wp-content/uploads/2019/11/O4A4646-1.jpg" alt="" />
              <img src="https://www.kellysweet.com/wp-content/uploads/2020/05/Detroit-Michigan-wedding-photographer_59.jpg" alt="" />
            </Carousle>
          </div>
          <button id='top-button' onClick={() => window.scrollTo(0, 0)}>
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


      </div >

      )
}

      export default HomePage