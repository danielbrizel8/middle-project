import React from 'react'
import './../styling/inviation.css'
import Heart from '../assets/heart-back-removebg-preview.png'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { CreateEventContext } from './../CreateEventContext'
import { useContext, useState, useEffect } from 'react'
import FrontImg from './../assets/front-invation.jpg'
import BackImg from './../assets/back-invation.avif'

function Inviation() {
  const { weddingDetails } = useContext(CreateEventContext)
  const [updateDate, setUpdateDate] = useState()
  const localData = JSON.parse(localStorage.getItem('weddings'))
  const currentUser = localStorage.getItem('user')
  const currentWedding = localData.findLast((obj) => obj.userName == currentUser)

  const handleDownload = () => {
    const element = document.getElementById('all-invation');

    html2canvas(element).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'invation.png');
      });
    });
  };

  
  return (
    <div className="invitation-form" >
      <div id='all-invation' className='main-container'>
        <div className='front-side' style={{ backgroundImage: `url(${FrontImg})` }}>
          <h2>we invite you to celebrate our wedding</h2>
          <div className='main-part'>
            <h1>{currentWedding.husbandName}</h1>
             <h1>&</h1>
             <h1>{currentWedding.wifeName} </h1>
          </div>
          <div id='details'>
            <h2>Date: {currentWedding.weddingDate}</h2>
            <h2>place: Gan Eden</h2>
            <h2>Address: Shaked 2</h2>
            <h2>At: 19:00</h2>
          </div>
        </div>


        <div className='back-side' style={{ backgroundImage: `url(${BackImg})` }}>
          <h2>we invite you to celebrate our wedding</h2>
          <h1><u>Schedule:</u></h1>
          <p>Welcoming- 19:00</p>
          <p> Ceremony- 20:00</p>
          <p> Dinner- 20:30</p>
          <p> Party- 21:30</p>
          <p>We look forward to celebrating this joyous occasion with you.</p>
          <p>With love,</p>
          <p>{currentWedding.husbandName} & {currentWedding.wifeName}</p>
        </div>
      </div>
      <div className="download-div">
        <button className='download-btn' onClick={handleDownload}>download</button>
      </div>
    </div>
  )
}

export default Inviation