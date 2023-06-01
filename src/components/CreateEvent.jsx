import { InputLabel, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react'
import { CreateEventContext } from './../CreateEventContext'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import './../styling/create-event.css'

function CreateEvent() {
  const [spouse, setSpouse] = useState()
  const [partner, setPartner] = useState()
  const [updateDate, setUpdateDate] = useState()
  const [saveDatesArray, setSaveDatesArray] = useState(localStorage.getItem('dates'))
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
   

  }

  const testhand = () => {
    console.log(weddingDetails);
    const localData = JSON.parse(localStorage.getItem('weddings'))
    localData.push(weddingDetails)
    localStorage.setItem("weddings", JSON.stringify(localData));
    console.log(localData);

    navigate('/Inviation')

  }
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


  return (
    <div className="form-container">
      <div className='create-event-form'>
        <div className='names-couple'>
          <TextField label="Husband name" onChange={(e) => {setSpouse(e.target.value) }} />
          <TextField label="Wife name" onChange={(e) => { setPartner(e.target.value) }} />
        </div>
        <br />
        <div className="date-event">
          <TextField
            value={updateDate}
            InputProps={{
              readOnly: true,
            }} />
        </div>
        <button onClick={handleDateSave}>save</button>
        <button onClick={testhand}> huii </button>
        <Link to={'/Inviation'}>invation</Link>
      </div>


    </div>

  );
}

export default CreateEvent