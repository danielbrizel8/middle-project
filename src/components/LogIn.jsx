import React, { useEffect, useState } from 'react';
import './../styling/log-in.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { TextField } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import users from './../usersData.json';

function LogIn() {
  const { register, formState: { errors }, handleSubmit ,  getValues} = useForm();
  const onSubmit = data => {setShowSignUp(!setShowSignUp);   alert('Registration successful!');
};
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

  const validatePassword = (value) => {
    const { password } = getValues();
    if (value === password) {
      return true;
    } else {
      return "Passwords do not match";
    }
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
        <div  className="signup-container">
          {!showSignUp && (
            <div className="signup-link" onClick={handleSignUpClick}>
              <button className="signup">Not sign up yet?</button>
            </div>
          )}
          {showSignUp && (
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <span className="signup-span">Sign Up</span>
              <input type="text" placeholder="Enter Username" className="form--input"  {...register("userName", { required: "user name required" })} />
              <input type="password" placeholder="Password" className="form--input" {...register("password", { required: "recuired password" })} />
              <input type="password" placeholder="Confirm password" className="form--input"  {...register("cPass", { required: "recuired confirm", validate: validatePassword })} />

              <div className="form--marketing">
                <ErrorMessage
                  errors={errors}
                  name="userName"
                  render={({ message }) => <p>{message}</p>}
                />
                <ErrorMessage
                  errors={errors}
                  name="cPass"
                  render={({ message }) => <p>{message}</p>}
                />
              </div>
              <input className="form--submit" type="submit" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LogIn;