import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function User() {
  let location = useLocation();
  const user = location.state.user;
  const { lists } = user;
  console.log(lists);

  return (
    <div>
      <h1>User</h1>
      <main>Welcome to Your User Page</main>

      <div>
        {user.username}
      </div>

      <br></br>
      <hr></hr>

      <div>
        <br />
        <iframe width="1401" height="704" src="https://www.youtube.com/embed/Qu0HUsfzsmc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
        <br />
      <button className="">
        <li className="Logout-Link">
          <a className="logout" href='http://localhost:3000/' >Log Out</a>
        </li>
      </button>
    </div>
  );
};

