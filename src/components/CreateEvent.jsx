import { InputLabel, TextField } from '@mui/material';
import { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CreateEventContext } from './../CreateEventContext'
import { Link } from 'react-router-dom'
import './../styling/create-event.css'

function CreateEvent() {
  const { register, handleSubmit } = useForm();
  const { weddingDetails, setWeddingDetails } = useContext(CreateEventContext)
  const onSubmit = data => {
    setWeddingDetails(
      {
        ...weddingDetails,
        husbandName: data.husband,
        wifeName: data.wife,
        weddingDate: '24.11.2000'
      }
    )
    console.log(weddingDetails);
    console.log(data);
  }


  return (
    <div className="form-container">
      <form className='create-event-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='names-couple'>
          <TextField label="Husband name" {...register("husband")} />
          <TextField label="Wife name" {...register("wife")} />
        </div>
        <br />
        <div className="date-event">
          <InputLabel>
            chose date
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
        <input type="submit" />
        <Link to={'/Inviation'}>invation</Link>
      </form>
      

    </div>

  );
}

export default CreateEvent