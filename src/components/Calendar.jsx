import { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import { CreateEventContext } from './../CreateEventContext'
import { useNavigate } from 'react-router';
import 'react-calendar/dist/Calendar.css';
import './../styling/calendar.css'

function CalendarComponent() {
  const navigate = useNavigate()
  const arrayFromLocal = JSON.parse(localStorage.getItem('weddings'))
  const dates = arrayFromLocal.map((obj) => obj.weddingArr)
  
  const { weddingDetails, setWeddingDetails } = useContext(CreateEventContext)
  const saveDate = (clickDay) => {
    const timezoneOffset = clickDay.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
    const localISOTime = new Date(clickDay - timezoneOffset).toISOString().split('T')[0];
    setWeddingDetails(
      {
        ...weddingDetails,
        weddingDate: localISOTime,
        weddingArr:  clickDay.toISOString().split('T')[0]
      }
    )
    console.log("hii" + localISOTime);
    alert("this date are available")
    navigate('/CreateEvent')
  }

  // Function to customize tile content and styling
  const tileContent = ({ date }) => {
    const dateISO = date.toISOString().split('T')[0];

    if (dates.includes(dateISO)) {
      return (
        <div className="caught-date" />
      );
    }

    return null;
  };

  


  return (
    <div  className='calendar-container'>
      <br />
      <br />
      <br></br>
      <h1 className='clendar-title'>Available Dates</h1>
      <Calendar
        className={'calendar-size'}
        locale="en-GB"
        tileContent={tileContent}
        tileDisabled={({ date }) => dates.includes(date.toISOString().split('T')[0])}
        onClickDay={(day) => saveDate(day)}
      />
      
    </div>
  )
}

export default CalendarComponent