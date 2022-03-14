import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';
import User from './components/User';
import About from './components/About';

export default function App() {
  const [cont, setCont] = useState({ isLoggedIn: false, user: {} });
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    loginStatus();
  }, []);

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true })
      .then(res => {
        if (res.data) {
          // console.log(res.data)
          handleLogin(res.data)
        } else {
          console.log('NOT res.data')
          handleLogout();
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  const handleLogin = (data) => {
    setCont({
      isLoggedIn: true,
      user: cont.user
    })
  };

  const handleLogout = () => {
    setCont({
      isLoggedIn: false,
      user: {}
    });
  };

  function handleClick() {
    handleLogout();
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" user={cont.user} element={<Home />} handleLogout={handleLogout} isLoggedIn={cont.isLoggedIn} onClick={handleClick} />
        <Route path="/login" user={cont.user} element={<Login />} isLoggedIn={cont.isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} onClick={handleClick}/>
        <Route path="/user" user={cont.user} element={<User />} isLoggedIn={isLoggedIn} />
        {/* <Route path="/signup" user={cont.user} element={<Signup />} isLoggedIn={isLoggedIn} />
        <Route path="/about"  user={cont.user} element={<About />} isLoggedIn={isLoggedIn} /> */}
      </Routes>
    </div>
  );
};