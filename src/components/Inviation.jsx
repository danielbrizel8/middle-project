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

  useEffect(() => {
    if (weddingDetails.weddingDate != '') {
      const dateArr = weddingDetails.weddingDate.split('-')
      console.log(dateArr);
      dateArr[2] = (dateArr[2] * 1) + 1
      console.log(dateArr);
      setUpdateDate(dateArr.join('/'))
    }
  }
    , [])


  console.log(currentWedding);
  return (
    <div className="invitation-form" >
      <div id='all-invation' className='main-container'>
        <div className='front-side' style={{ backgroundImage: `url(${FrontImg})` }}>          <h2>we invite you to celebrate our wedding</h2>
          <div className='heart-bg'> <img src={Heart} alt="" style={{ position: "absolute", height: "26vw", width: "33vw", top: "15vw", left: "11vw" }} />
            <div className='main-part'>
              <h1>{`${currentWedding.husbandName} & ${currentWedding.wifeName}`} </h1>
            </div>
          </div>

          <div className='details'>
            <h2>Date: {updateDate}</h2>
            <h2>place: Gan Eden</h2>
            <h2>Address: Shaked 2</h2>
            <h2>At: 19:00</h2>
          </div>
        </div>


        <div className='front-side' style={{ backgroundImage: `url(${BackImg})` }}>
          <h2>we invite you to celebrate our wedding</h2>
          <h1>Schedule:</h1>
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
        <button onClick={handleDownload}>download</button>
      </div>
    </div>
  )
}

export default Inviation