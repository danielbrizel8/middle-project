import React from 'react'
import './../styling/inviation.css'

import { CreateEventContext } from './../CreateEventContext'
import { useContext, useState } from 'react'

function Inviation() {
  const { weddingDetails } = useContext(CreateEventContext)
  return (
    <div className="invitation-form">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <h2>Wedding Invitation</h2>
      <p>Dear friends and family,</p>
      <p>We are thrilled to invite you to the wedding celebration of</p>
      <h3>{weddingDetails.husbandName} & {weddingDetails.wifeName}</h3>
      <p>Date: {weddingDetails.weddingDate}</p>
      <p>Place: Doria</p>
      <p>Address: Shaked 2</p>
      <p>Time:</p>
      <p>19:00 - Welcoming</p>
      <p>20:00 - Ceremony</p>
      <p>20:30 - Dinner</p>
      <p>We look forward to celebrating this joyous occasion with you.</p>
      <p>Please kindly RSVP by the provided date.</p>
      <p>With love,</p>
      <p>{weddingDetails.husbandName} & {weddingDetails.wifeName}</p>
    </div>
  )
}

export default Inviation