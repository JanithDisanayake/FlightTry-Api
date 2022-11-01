import React from 'react';
import '../Home/Plans.css';

function Plans() {
  return (
  <div id="wrapper">
    <div id="price_columns">
      <div className="columns">
        <li className="price_name">PERSONAL</li>
        <li className="price"><small>$</small><big>0</big><small>/year</small></li>
        <li className="detail">Unlimited Query Volume</li>
        <li className="detail">10 queroies/minute</li>
        <li className="detail">Alerts not available</li>
        <li className="detail">Email not support</li>
        <li className="detail">Phone not support</li>
        <li className="select_button"><input type="button" className="select_price" defaultValue="SELECT" /></li>
      </div>
      <div className="columns">
      <li className="price_name">STANDARD</li>
        <li className="price"><small>$</small><big>100</big><small>/year</small></li>
        <li className="detail">Unlimited Query Volume</li>
        <li className="detail">5 queroies/second</li>
        <li className="detail">Alerts Available</li>
        <li className="detail">Email Support</li>
        <li className="detail">Phone not support</li>
        <li className="select_button"><input type="button" className="select_price" defaultValue="SELECT" /></li>
      </div>
      <div className="columns">
        <li className="price_name">PREMIUM</li>
        <li className="price"><small>$</small><big>1000</big><small>/year</small></li>
        <li className="detail">Unlimited Query Volume</li>
        <li className="detail">100 queroies/second</li>
        <li className="detail">Alerts Available</li>
        <li className="detail">Email Support</li>
        <li className="detail">Phone Support</li>
        <li className="select_button"><input type="button" className="select_price" defaultValue="SELECT" /></li>
      </div>
    </div>
  </div>

  )
}

export default Plans
