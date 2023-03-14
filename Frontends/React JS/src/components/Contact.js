import React from "react";
import "../Contact.css";
import background from '../pexels-photo-2062462.jpeg'

function Contact() {
  return (
    <div className="contact ">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact to the Director Board</h1>

        <form id="contact-form" method="POST">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className="btn btn-outline-secondary" type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;