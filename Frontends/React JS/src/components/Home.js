import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import background from '../ross-parmly-rf6ywHVkrlY-unsplash.jpg'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${background})` }}>
      <div className='headerContainer'>
        <h1>Flight Try</h1>
        <br /><br />
        <div>
          <p>The World’s Best Flight Tracking and Flight Status API</p>
          <Link to='/login'>
            <button>Admin Portal</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home