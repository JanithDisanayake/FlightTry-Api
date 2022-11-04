import React from 'react';
import { Instagram } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import '../Footer3.css';

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