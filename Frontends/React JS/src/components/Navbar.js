import React from 'react';
import {Link} from 'react-router-dom'; 
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Home/NavBar.css';


const NavBar = () => {
  
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <h1>Flight Try</h1>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <button>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default NavBar