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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    loginStatus();
  }, []);

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true })
      .then(res => {
        if (res.data) {
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

  useEffect(() => {
    axios.get('http://localhost:3001/exercises')
      .then((res) => {
        const exerBase = res.data
        setExercises(exerBase);
        renderSome(exerBase);
      })
  }, []);
  
  useEffect(() => {
    axios.get('http://127.0.0.1:3001/lists')
      .then((resp) => {
        for (let i = 0; i < resp.data.length; i++) {
        }
        setLists(resp.data)
      })
  }, [exercises]);

  const filterLists = lists.slice(1, 7);
  let justNums = filterLists.map(a => a.exercise_id);

  function renderSome(exercises) {
    let someExercises = [];
    for (let i = 0; i < justNums.length; i++) {
      let found = exercises.filter((exercise) => exercise.id === (justNums[i]));
      someExercises.push(found[0]);
    }
    setExercises(someExercises);
  };

  function handleClick() {
    handleLogout();
  };
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" user={cont.user} element={<Home />} handleLogout={handleLogout} isLoggedIn={cont.isLoggedIn} onClick={handleClick} />
        <Route path="/login" user={cont.user} element={<Login exercises={exercises}/>} isLoggedIn={cont.isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} onClick={handleClick} />
        <Route path="/user" user={cont.user} element={<User exercises={exercises}/>} isLoggedIn={isLoggedIn} lists={lists}  />
        <Route path="/signup" user={cont.user} element={<Signup />} isLoggedIn={isLoggedIn} setErrors={setErrors} />
        <Route path="/about" user={cont.user} element={<About />} isLoggedIn={isLoggedIn} />
      </Routes>
    </div>
  );
}

