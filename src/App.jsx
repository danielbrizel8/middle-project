import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Calendar from './components/Calendar'
import Gift from './components/Gift'
import CreateEvent from './components/CreateEvent'
import LogIn from './components/LogIn'
import Packages from './components/Packages'
import Inviation from './components/Inviation'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}></Route>
        <Route path='Calendar' element={<Calendar/>}></Route>
        <Route path='LogIn' element={<LogIn/>}></Route>
        <Route path='CreateEvent' element={<CreateEvent/>}></Route>
        <Route path='Inviation' element={<Inviation/>}></Route>
        <Route path='Packages' element={<Packages/>}></Route>
        <Route path='Gift' element={<Gift/>}></Route>
      </Route>
    </Routes>

  )
}

export default App
