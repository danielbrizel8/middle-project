import React, { useEffect, useState } from 'react';
import './../styling/log-in.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { TextField } from '@mui/material';
import users from './../usersData.json';

function LogIn() {
  const navigate = useNavigate();
  console.log(users);
  const [usersData, setUsersData] = useState();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setUsersData(users.users);
  }, []);

  const handleCheck = () => {
    const checkUser = usersData?.find((user) => user.userName === userName);

    if (checkUser) {
      if (checkUser.password === password) {
        localStorage.setItem("user", userName);
        navigate('/HomePage');
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('Invalid username');
    }

    console.log(checkUser);
  };

  return (
    <div className='login-container'>
      <div className="log-in-box">
        <div className="title-login">
          <h1>Gan Eden</h1>
          <h2>Unlock the Gates to Your Dream Wedding</h2>
        </div>
        <div className="inputs-login">
          <TextField className='login-input' label="User Name" onChange={(e) => setUserName(e.target.value)} />
          <TextField className='login-input' label="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="button-login">
          <button className='sign-in-button' onClick={handleCheck}>Log In
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;