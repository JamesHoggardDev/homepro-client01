import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Login from './registrations/Login';
import Signup from './registrations/Signup';

const Home = ({ handleClick }) => {
  return (
    <div>
      <main>
        <h2>Homepage</h2>
        <p>Be</p>
        < br/>
        <nav>
          <Link to='/login'>Log In</Link>
        </nav>
        < br/>
        <nav>
          <Link to="/signup">Signup</Link>
        </nav>
        < br />
        
        < br />
        <nav>
          <Link to="/about">About</Link>
        </nav>

      </main>

      
      <br></br>
      <nav>
        <Link to='/signup'>Sign Up</Link>
      </nav>
      
      < hr/>

      <div>
        
      </div>

    </div>
  );
};
export default Home;