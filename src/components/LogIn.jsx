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
  const [showSignUp, setShowSignUp] = useState(false); // State variable to control the visibility of the sign-up form

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

  const handleSignUpClick = () => {
    setShowSignUp(true); 
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
        <div>
          {!showSignUp && (
            <div className="signup-link" onClick={handleSignUpClick}>
              <button className="signup">Not sgin up yet?</button>
            </div>
          )}
          {showSignUp && (
            <form className="form">
              <span className="signup-span">Sign Up</span>
              <input type="email" placeholder="Email address" className="form--input" />
              <input type="password" placeholder="Password" className="form--input" />
              <input type="password" placeholder="Confirm password" className="form--input" />

              <div className="form--marketing">
                <input id="okayToEmail" type="checkbox" />
                <label htmlFor="okayToEmail" className="checkbox">
                  I want to join the newsletter
                </label>
              </div>
              <button className="form--submit">
                Sign up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LogIn;