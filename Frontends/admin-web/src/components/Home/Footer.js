import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import '../Home/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <LinkedIn/>
        </div>
        <p>&copy; 2022 | Flight Try API Management Base | Designed and Concept By: Hackerstreet Boys</p>

    </div>
  )
}

export default Footer