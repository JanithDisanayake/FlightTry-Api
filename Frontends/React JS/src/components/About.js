import React from 'react';
import '../About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={ {backgroundImage:`url(${"https://i.picsum.photos/id/1045/3936/2624.jpg?hmac=PMfAbC94Asle_jgeRYsj7zQHFabfTfsIwL247Ewetwc"})`} }></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Flight Try is a digital aviation company and operates the world's largest flight tracking and data platform. With global connectivity to 
               every segment of aviation, Flight Try provides over 10,000 aircraft operators and service providers as well as over 13,000,000 passengers 
               with global flight tracking solutions, predictive technology, analytics, and decision-making tools.
               
               Flight Try receives data from air traffic control systems in over 45 countries, Flight Try's network of ADS-B ground stations in 195 countries, 
               Aireon global space-based ADS-B, and datalink (satellite/VHF) via every major provider, including ARINC, SITA, Satcom Direct, Garmin, and Honeywell 
               GoDirect.

               Flight Try's HyperFeed® engine seamlessly fuses thousands of real-time, global data sources with FlightAware’s proprietary AI models and 
               algorithms. Leveraging this data with FlightAware's powerful, intuitive, responsive, and reliable web-based interfaces and APIs yields the 
               world’s most comprehensive, capable, and useful flight tracking and digital aviation data platform. Founded in 2022, Flight Try was acquired 
               by Collins Aerospace in 2021.</p>
        </div>
        
    </div>
  )
}

export default About