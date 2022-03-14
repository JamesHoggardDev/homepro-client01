import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ handleClick }) => {
  return (
    <div>
      <main>
        <h2>Homepage</h2>
        <p>Be</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <nav>
        <Link to='/login'>Log In</Link>
      </nav>
      <br></br>
      <nav>
        <Link to='/signup'>Sign Up</Link>
      </nav>
      <button className="">
        <li className="Logout-Link">
          <a className="logout" href='http://localhost:3000/' onClick={handleClick}>Log Out</a>
        </li>
      </button>





    </div>
  );
};
export default Home;