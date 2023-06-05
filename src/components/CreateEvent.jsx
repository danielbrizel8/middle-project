import { InputLabel, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react'
import { CreateEventContext } from './../CreateEventContext'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import './../styling/create-event.css'

function CreateEvent() {
  const [spouse, setSpouse] = useState()
  const [partner, setPartner] = useState()
  const [saveData, setSaveData] = useState(false)
  const [removeSaveData, setRemoveSaveData] = useState(false)
  const { weddingDetails, setWeddingDetails } = useContext(CreateEventContext)
  const navigate = useNavigate()
  const handleDateSave = () => {
    console.log(spouse);
    setWeddingDetails(
      {
        ...weddingDetails,
        userName: localStorage.getItem('user'),
        husbandName: spouse,
        wifeName: partner,
      }

    )
    setTimeout(() => {
      setSaveData(true);
      setRemoveSaveData(true)
    }, 1000);


  }

  const handleNavigate = () => {
    console.log(weddingDetails);
    const localData = JSON.parse(localStorage.getItem('weddings'))
    localData.push(weddingDetails)
    localStorage.setItem("weddings", JSON.stringify(localData));
    console.log(localData);
    navigate('/Inviation')

  }
  

  return (
    <div className="form-container">
      <div className='create-event-form'>
        <div className='names-couple'>
          <TextField className='responsive-input' label="Spouse name" onChange={(e) => { setSpouse(e.target.value) }} />
          <TextField className='responsive-input' id='partner-input' label="Partner name" onChange={(e) => { setPartner(e.target.value) }} />
        </div>
        <br />
        <div className="date-event">
          <div className="chose-date-input">
            <InputLabel>Chosen Date</InputLabel>
            <TextField
              className='responsive-input'
              value={weddingDetails.weddingDate}
              InputProps={{
                readOnly: true,
              }} />
          </div>
          <div className="link-to-chose-date">
            <Link to={'/Calendar'}> still not chose date? </Link>
          </div>

        </div>
        <div className="buttons-container">
         { !removeSaveData && <button className='save-button' onClick={handleDateSave}>Save</button> }
          {saveData && <button onClick={handleNavigate} className="cta">
            <span>To Invation</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>}
        </div>
      </div>


    </div>

  );
}

export default CreateEvent