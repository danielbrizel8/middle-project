import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Gift from './components/Gift'
import CreateEvent from './components/CreateEvent'
import LogIn from './components/LogIn'
import Packages from './components/Packages'
import Inviation from './components/Inviation'
import { CreateEventContext } from './CreateEventContext'
import CalendarComponent from './components/Calendar'


const weddingDetailsObj = {
  husbandName: '',
  wifeName: '',
  weddingDate: ''
}
if(!localStorage.getItem('weddings'))
{
const arrayOfWedding = [];
localStorage.setItem("weddings", JSON.stringify(arrayOfWedding));
}



function App() {
  const [weddingDetails, setWeddingDetails] = useState(weddingDetailsObj);


  return (
    <CreateEventContext.Provider value={{ weddingDetails, setWeddingDetails}}>
      <Routes>
      <Route index element={<LogIn />}></Route>
        <Route path='/' element={<Layout />}>
          <Route path='HomePage' element={<HomePage />}></Route>
          <Route path='Calendar' element={<CalendarComponent />}></Route>
          <Route path='CreateEvent' element={<CreateEvent />}></Route>
          <Route path='Inviation' element={<Inviation />}></Route>
          <Route path='Packages' element={<Packages />}></Route>
          <Route path='Gift' element={<Gift />}></Route>
        </Route>
      </Routes>
    </CreateEventContext.Provider>

  )
}

export default App
