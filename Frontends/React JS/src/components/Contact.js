import React from "react";
import "../Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url('https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg')` }}
      ></div>
      <div className="rightSide">
        <h1> Contact to the Director Board</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;