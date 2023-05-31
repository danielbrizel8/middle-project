import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './../styling/calendar.css'

function CalendarComponent() {
  const caughtDates = ['2023-05-10', '2023-05-15', '2023-05-20'];

  // Function to customize tile content and styling
  const tileContent = ({ date }) => {
    const dateISO = date.toISOString().split('T')[0];

    if (caughtDates.includes(dateISO)) {
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
        tileDisabled={({ date }) => caughtDates.includes(date.toISOString().split('T')[0])}
      />
    </div>
  )
}

export default CalendarComponent