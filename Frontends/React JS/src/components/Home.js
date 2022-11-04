import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  return (
    <div className='home' style={ {backgroundImage:`url(${"https://i.picsum.photos/id/416/1280/853.jpg?hmac=B9Bc5K0QP3GbA6b2Dsfmjm_YpNCOlB_5zm6ZCXUnoHw"})`} }>
        <div className='headerContainer'>
            <h1>Flight Try  </h1>
            <p>The World’s Best Flight Tracking and Flight Status API</p>
            <Link to='/login'>
                <button>Admin Portal</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Home