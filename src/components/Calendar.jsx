import { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import { CreateEventContext } from './../CreateEventContext'
import { useNavigate } from 'react-router';
import 'react-calendar/dist/Calendar.css';
import './../styling/calendar.css'

function CalendarComponent() {
  const [caughtDates, setCaughtDates] = useState([])
  const navigate = useNavigate()
  const arrayFromLocal = JSON.parse(localStorage.getItem('weddings'))
  const test = arrayFromLocal.map((obj) => obj.weddingDate)
  console.log(test);
    // setCaughtDates([...caughtDates, arrayFromLocal.map((obj) => {obj.weddingDate})])
  const { weddingDetails, setWeddingDetails } = useContext(CreateEventContext)
  const caughtDatesTest = ['2023-05-10', '2023-05-15', '2023-05-20'];
  const saveDate = (clickDay) => {
    setWeddingDetails(
      {
        ...weddingDetails,
        weddingDate: clickDay.toISOString().split('T')[0]
      }
    )
    console.log(weddingDetails);
    alert("this date are available")
    navigate('/CreateEvent')
  }

  // Function to customize tile content and styling
  const tileContent = ({ date }) => {
    const dateISO = date.toISOString().split('T')[0];

    if (test.includes(dateISO)) {
      return (
        <div className="caught-date" />
      );
    }

    return null;
  };


  return (
    <div>
      <br />
      <br />
      <br></br>
      <h1 className='clendar-title'>Calendar</h1>
      <Calendar
        className={'calendar-size'}
        tileContent={tileContent}
        tileDisabled={({ date }) => test.includes(date.toISOString().split('T')[0])}
        onClickDay={(day) => saveDate(day)}
      />
    </div>
  )
}

export default CalendarComponent