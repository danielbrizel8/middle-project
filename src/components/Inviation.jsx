import React from 'react'
import './../styling/inviation.css'
import Heart from '../assets/heart-back-removebg-preview.png'

import { CreateEventContext } from './../CreateEventContext'
import { useContext, useState } from 'react'

function Inviation() {
  const { weddingDetails } = useContext(CreateEventContext)
  return (
    <div className="invitation-form">
      <div className='main-container'>
        <div className='front-side'>
          <h2>we invite you to celebrate our wedding</h2>
          <div className='heart-bg'> <img src={Heart} alt="" style={{position:"absolute",height:"26vw",width:"33vw",top:"15vw",left:"11vw"}} />
            <div className='main-part'>
              <h1>{`${weddingDetails.husbandName} & ${weddingDetails.wifeName}`} </h1>
            </div>
          </div>

          <div className='details'>
            <h2>Date: {weddingDetails.weddingDate}</h2>
            <h2>place: Gan Eden</h2>
            <h2>Address: Shaked 2</h2>
            <h2>At: 19:00</h2>
          </div>
        </div>


        <div className='back-side'>
          <h1>Schedule:</h1>
          <p>Welcoming- 19:00</p>
          <p> Ceremony- 20:00</p>
          <p> Dinner- 20:30</p>
          <p> Party- 21:30</p>
          <p>We look forward to celebrating this joyous occasion with you.</p>
          <p>With love,</p>
          <p>{weddingDetails.husbandName} & {weddingDetails.wifeName}</p>
        </div>
      </div>
    </div>
  )
}

export default Inviation