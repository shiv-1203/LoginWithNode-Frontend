import React from 'react';
import {Link} from 'react-router-dom';
import '../components/HomePage.css';
import Typewriter from './Typewriter';

const HomePage = ({user, setUser}) => {
    const handleLogout = () =>{
        setUser(null);
        console.log(user!==null);
    }

  return (
    <div className='homepage'>
      {user !== null ? (
        <div>
          <p><Typewriter text={`Welcome, ${user.name}!`} delay={100}/></p>
          <div className='logout' onClick={handleLogout}>Logout</div>
        </div>
      ) : (
        <div>
            <div>    
                Please login to view your profile.
            </div>
            <div style={{marginTop:'10px'}}>    
                <Link to='/login' className='loginLink'>Click here</Link>
            </div> 
        </div>
      )}
    </div>
  );
};

export default HomePage;