import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login({ cont, handleLogin, loggedInStatus, handleClick, isLoggedIn, errors, setErrors }) {
  
  const [formData, setFormData] = useState({ username: "", email: "", password: "", errors: "" });
  // const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cont)
    return isLoggedIn ? navigate("/user") : navigate("/login");
  }, []);

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  };

  function handleSubmit(e) {
    e.preventDefault()
    const { username, email, password, errors } = formData

    let user = {
      username: username,
      email: email,
      password: password
    };
    axios.post('http://localhost:3001/login', { user }, { withCredentials: true })
      .then(res => {
        if (res.data.logged_in) {
          // console.log(res.data.user)
          handleLogin(res.data)
          redirect(res.data)
        } else {
          setErrors(res.data.errors)
        }
      })
      .catch(error => console.log('api errors', error));
  };
  const redirect = (data) => {
    console.log(data)
    navigate('/user')
  };
  const handleErrors = () => {
    return (
      <div>
        <ul className="error-ul">
          {errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div style={{ border: '1px solid blue' }} align="center" className="login-form" >
        <h1> Login </h1>
        <br></br>

        <div>
           <form className="login-form" onSubmit={handleSubmit}>
          <br></br><br></br>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br></br><br></br>
          <input
            placeholder="Email Address"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br></br><br></br>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br></br><br></br>
          <button className="Login-Btn" placeholder="submit" type="submit">
            Log In
          </button>
          <div className='Alt'>
            <br></br>
            or <Link to='/signup'>Sign Up</Link>
          </div>
          <button className=""></button>
        </form>
        </div>
        <div className="errors">
          {errors ? handleErrors() : null}
        </div>
        <br></br>
        <br></br>
         <button className="">
          <li className="Logout-Link">
            <a className="logout" href='http://localhost:3000/' onClick={handleClick}>Log Out</a>
          </li>
         </button>
      </div>
    </div>
  );
};

export default Login;
{/* <iframe width="1401" height="704" src="https://www.youtube.com/embed/9ZzpEwluf5A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */ }