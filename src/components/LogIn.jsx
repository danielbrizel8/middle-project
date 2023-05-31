import React from 'react'
import './../styling/log-in.css'
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';

function LogIn() {

  return (
    <div>
      <TextField label="User Name"/>
      <TextField label="password"/>
    </div>
  )
}

export default LogIn